-- ShroomMaps Initial Database Schema
-- Migration: 001_initial
-- Created: 2026-03-09

-- Enable PostGIS for geo queries
CREATE EXTENSION IF NOT EXISTS postgis;

-- Enable pg_trgm for text search
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- ============================================================
-- RETAILERS
-- ============================================================
CREATE TABLE retailers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  verticals TEXT[] NOT NULL DEFAULT '{}', -- ['therapeutic', 'medicinal', 'gourmet']
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  location GEOGRAPHY(Point, 4326), -- PostGIS for geo search
  phone TEXT,
  website TEXT,
  email TEXT,
  hours JSONB DEFAULT '{}', -- { mon: "9:00-17:00", tue: "9:00-17:00", ... }
  logo_url TEXT,
  cover_url TEXT,
  photo_urls TEXT[] DEFAULT '{}',
  is_verified BOOLEAN DEFAULT false,
  verification_type TEXT, -- 'state_license', 'business_reg', 'manual'
  license_number TEXT,
  subscription_tier TEXT DEFAULT 'basic', -- basic, plus, pro, enterprise
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  avg_rating DECIMAL(3,2) DEFAULT 0.0,
  review_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes
CREATE INDEX idx_retailers_location ON retailers USING GIST(location);
CREATE INDEX idx_retailers_city_state ON retailers(city, state);
CREATE INDEX idx_retailers_verticals ON retailers USING GIN(verticals);
CREATE INDEX idx_retailers_slug ON retailers(slug);
CREATE INDEX idx_retailers_subscription ON retailers(subscription_tier);
CREATE INDEX idx_retailers_name_trgm ON retailers USING GIN(name gin_trgm_ops);

-- Auto-update location from lat/lng
CREATE OR REPLACE FUNCTION update_retailer_location()
RETURNS TRIGGER AS $$
BEGIN
  NEW.location = ST_SetSRID(ST_MakePoint(NEW.lng, NEW.lat), 4326)::geography;
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_retailer_location
  BEFORE INSERT OR UPDATE OF lat, lng ON retailers
  FOR EACH ROW EXECUTE FUNCTION update_retailer_location();

-- ============================================================
-- PRODUCTS
-- ============================================================
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  retailer_id UUID REFERENCES retailers(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL, -- supplement, tincture, fresh, dried, grow_kit, capsule, therapy_session
  species TEXT[] DEFAULT '{}', -- ['lions_mane', 'reishi', 'psilocybin', ...]
  use_cases TEXT[] DEFAULT '{}', -- ['cognitive_health', 'immune_support', 'sleep', 'therapy']
  price_cents INT, -- NULL means call for pricing
  image_url TEXT,
  is_available BOOLEAN DEFAULT true,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_products_retailer ON products(retailer_id);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_species ON products USING GIN(species);

-- ============================================================
-- REVIEWS
-- ============================================================
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  retailer_id UUID REFERENCES retailers(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT, -- for display (anonymized)
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  body TEXT CHECK (char_length(body) <= 2000),
  is_verified_purchase BOOLEAN DEFAULT false,
  is_approved BOOLEAN DEFAULT true, -- moderation flag
  helpful_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  -- One review per user per retailer
  UNIQUE(retailer_id, user_id)
);

CREATE INDEX idx_reviews_retailer ON reviews(retailer_id);
CREATE INDEX idx_reviews_user ON reviews(user_id);
CREATE INDEX idx_reviews_approved ON reviews(retailer_id, is_approved);

-- Auto-update retailer avg_rating after review insert/update/delete
CREATE OR REPLACE FUNCTION update_retailer_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE retailers
  SET
    avg_rating = (
      SELECT COALESCE(AVG(rating)::DECIMAL(3,2), 0)
      FROM reviews
      WHERE retailer_id = COALESCE(NEW.retailer_id, OLD.retailer_id)
        AND is_approved = true
    ),
    review_count = (
      SELECT COUNT(*)
      FROM reviews
      WHERE retailer_id = COALESCE(NEW.retailer_id, OLD.retailer_id)
        AND is_approved = true
    )
  WHERE id = COALESCE(NEW.retailer_id, OLD.retailer_id);
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_retailer_rating
  AFTER INSERT OR UPDATE OR DELETE ON reviews
  FOR EACH ROW EXECUTE FUNCTION update_retailer_rating();

-- ============================================================
-- DEALS
-- ============================================================
CREATE TABLE deals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  retailer_id UUID REFERENCES retailers(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  discount_pct INT CHECK (discount_pct >= 0 AND discount_pct <= 100),
  promo_code TEXT,
  starts_at TIMESTAMPTZ DEFAULT now(),
  expires_at TIMESTAMPTZ,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_deals_retailer ON deals(retailer_id);
CREATE INDEX idx_deals_active ON deals(is_active, expires_at);
CREATE INDEX idx_deals_featured ON deals(is_featured, is_active);

-- ============================================================
-- LEGAL STATUS BY JURISDICTION
-- ============================================================
CREATE TABLE legal_status (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  jurisdiction TEXT NOT NULL, -- 'CO', 'OR', 'Denver, CO', etc.
  jurisdiction_type TEXT NOT NULL, -- 'state', 'city', 'county'
  therapeutic_status TEXT NOT NULL DEFAULT 'prohibited', -- 'legal', 'pending', 'decriminalized', 'prohibited'
  decrim_status TEXT NOT NULL DEFAULT 'prohibited', -- 'decriminalized', 'prohibited', 'lowest_priority', 'partial'
  gourmet_status TEXT DEFAULT 'legal', -- always legal (food)
  medicinal_status TEXT DEFAULT 'legal', -- supplements are legal everywhere
  notes TEXT,
  effective_date DATE,
  source_url TEXT,
  last_verified_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE UNIQUE INDEX idx_legal_status_jurisdiction ON legal_status(jurisdiction, jurisdiction_type);

-- Seed initial legal status data
INSERT INTO legal_status (jurisdiction, jurisdiction_type, therapeutic_status, decrim_status, notes, effective_date, source_url) VALUES
  ('CO', 'state', 'legal', 'decriminalized', 'Prop 122 (2022) legalized psilocybin healing centers. Denver decriminalized in 2019.', '2025-01-01', 'https://www.sos.state.co.us/pubs/elections/Initiatives/titleBoard/filings/2021-2022/7Final.pdf'),
  ('OR', 'state', 'legal', 'decriminalized', 'Measure 109 (2020) established licensed psilocybin service centers. Service centers operational as of 2024.', '2023-01-01', 'https://www.oregon.gov/oha/PH/PREVENTIONWELLNESS/Pages/psilocybin-services.aspx'),
  ('CA', 'state', 'pending', 'partial', 'SB 58 signed (2023) decriminalizes personal possession. Therapeutic framework pending rulemaking.', '2025-01-01', 'https://leginfo.legislature.ca.gov/'),
  ('DC', 'state', 'decriminalized', 'decriminalized', 'Initiative 81 (2020) decriminalized. Therapeutic framework being developed.', '2021-03-15', 'https://dc.gov/');

-- ============================================================
-- RETAILER ANALYTICS (basic)
-- ============================================================
CREATE TABLE retailer_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  retailer_id UUID REFERENCES retailers(id) ON DELETE CASCADE NOT NULL,
  event_type TEXT NOT NULL, -- 'profile_view', 'search_impression', 'website_click', 'phone_click', 'directions_click'
  user_agent TEXT,
  ip_hash TEXT, -- hashed for privacy
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_events_retailer ON retailer_events(retailer_id);
CREATE INDEX idx_events_type ON retailer_events(retailer_id, event_type);
CREATE INDEX idx_events_time ON retailer_events(retailer_id, created_at);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

-- Enable RLS
ALTER TABLE retailers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE deals ENABLE ROW LEVEL SECURITY;

-- Retailers: anyone can read; only owner can write
CREATE POLICY "Retailers are publicly readable"
  ON retailers FOR SELECT USING (true);

CREATE POLICY "Retailers can be created by authenticated users"
  ON retailers FOR INSERT WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Retailers can be updated by owner"
  ON retailers FOR UPDATE USING (auth.uid() = owner_id);

-- Products: publicly readable; only retailer owner can write
CREATE POLICY "Products are publicly readable"
  ON products FOR SELECT USING (true);

CREATE POLICY "Products managed by retailer owner"
  ON products FOR ALL USING (
    EXISTS (
      SELECT 1 FROM retailers
      WHERE retailers.id = products.retailer_id
        AND retailers.owner_id = auth.uid()
    )
  );

-- Reviews: approved reviews publicly readable; users can write their own
CREATE POLICY "Approved reviews are publicly readable"
  ON reviews FOR SELECT USING (is_approved = true);

CREATE POLICY "Authenticated users can write reviews"
  ON reviews FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reviews"
  ON reviews FOR UPDATE USING (auth.uid() = user_id);

-- Deals: publicly readable; retailer owner can write
CREATE POLICY "Deals are publicly readable"
  ON deals FOR SELECT USING (true);

CREATE POLICY "Deals managed by retailer owner"
  ON deals FOR ALL USING (
    EXISTS (
      SELECT 1 FROM retailers
      WHERE retailers.id = deals.retailer_id
        AND retailers.owner_id = auth.uid()
    )
  );

-- ============================================================
-- HELPFUL VIEWS
-- ============================================================

-- Active deals view
CREATE VIEW active_deals AS
  SELECT d.*, r.name as retailer_name, r.slug as retailer_slug, r.city, r.state
  FROM deals d
  JOIN retailers r ON d.retailer_id = r.id
  WHERE d.is_active = true
    AND (d.expires_at IS NULL OR d.expires_at > now())
  ORDER BY d.is_featured DESC, d.created_at DESC;

-- Retailer search view (with rating)
CREATE VIEW retailer_search AS
  SELECT
    r.*,
    ST_X(r.location::geometry) as lng_computed,
    ST_Y(r.location::geometry) as lat_computed
  FROM retailers r
  ORDER BY r.subscription_tier DESC, r.avg_rating DESC;
