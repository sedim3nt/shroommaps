-- ============================================================
-- Foraging Spots & Observations
-- ============================================================

-- Foraging spots table
CREATE TABLE IF NOT EXISTS foraging_spots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  is_private BOOLEAN NOT NULL DEFAULT true,
  species TEXT[] DEFAULT '{}',
  habitat TEXT,
  season TEXT[] DEFAULT '{}',
  terrain TEXT,
  elevation INT,
  last_visited DATE,
  photos TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Spot observations table
CREATE TABLE IF NOT EXISTS spot_observations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  spot_id UUID NOT NULL REFERENCES foraging_spots(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  species_found TEXT[] DEFAULT '{}',
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  notes TEXT,
  conditions TEXT CHECK (conditions IN ('rain', 'dry', 'frost')),
  quantity TEXT CHECK (quantity IN ('none', 'few', 'some', 'abundant')),
  photos TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX idx_foraging_spots_user ON foraging_spots(user_id);
CREATE INDEX idx_foraging_spots_location ON foraging_spots(latitude, longitude);
CREATE INDEX idx_foraging_spots_species ON foraging_spots USING GIN(species);
CREATE INDEX idx_foraging_spots_private ON foraging_spots(is_private);
CREATE INDEX idx_spot_observations_spot ON spot_observations(spot_id);
CREATE INDEX idx_spot_observations_user ON spot_observations(user_id);
CREATE INDEX idx_spot_observations_date ON spot_observations(date);

-- Row Level Security
ALTER TABLE foraging_spots ENABLE ROW LEVEL SECURITY;
ALTER TABLE spot_observations ENABLE ROW LEVEL SECURITY;

-- Foraging spots policies:
-- Private spots visible only to owner
-- Public spots visible to all authenticated users
CREATE POLICY "Users can view their own spots"
  ON foraging_spots FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can view public spots"
  ON foraging_spots FOR SELECT
  USING (is_private = false);

CREATE POLICY "Users can insert their own spots"
  ON foraging_spots FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own spots"
  ON foraging_spots FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete their own spots"
  ON foraging_spots FOR DELETE
  USING (user_id = auth.uid());

-- Observations policies:
-- Observations visible only to the observation author AND the spot owner
CREATE POLICY "Spot owner can view observations"
  ON spot_observations FOR SELECT
  USING (
    user_id = auth.uid()
    OR spot_id IN (SELECT id FROM foraging_spots WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can insert observations on their own spots"
  ON spot_observations FOR INSERT
  WITH CHECK (
    user_id = auth.uid()
    AND spot_id IN (SELECT id FROM foraging_spots WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can update their own observations"
  ON spot_observations FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete their own observations"
  ON spot_observations FOR DELETE
  USING (user_id = auth.uid());
