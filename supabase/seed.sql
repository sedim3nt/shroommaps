-- MycoMaps seed data — REAL verified retailers (generated 2026-05-25)
-- Source of truth: data/retailers/{therapeutic,colorado,online}.ts (see those files for provenance).
-- Regenerate with: npx tsx scripts/gen-seed.ts
-- WARNING: Truncates retailers table before inserting.
TRUNCATE TABLE retailers CASCADE;

INSERT INTO retailers (slug, name, description, verticals, address, city, state, zip, lat, lng, phone, website, email, hours, cover_url, photo_urls, is_verified, verification_type, subscription_tier, avg_rating, review_count) VALUES
(
  'the-center-origin', 'The Center Origin', 'A licensed psychedelic-assisted healing center in LoDo Denver specializing in journey work, natural medicine services, post-journey integration, and facilitator training. Reported as Colorado''s first state-licensed psilocybin healing center.',
  ARRAY['therapeutic'],
  '1440 Blake Street, Suite 330', 'Denver', 'CO', '80202',
  39.7490933, -105.0008779,
  '3032844246', 'https://www.thecenterorigin.com', NULL,
  '{"mon":"By appointment","tue":"By appointment","wed":"By appointment","thu":"By appointment","fri":"By appointment","sat":"By appointment","sun":"By appointment"}'::jsonb,
  NULL, ARRAY[]::text[],
  true, 'Self-attested "Licensed Natural Medicine Healing Center" on thecenterorigin.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center); reported as Colorado''s first state-issued healing center license (CPR, 2025-03-31).', 'basic',
  0, 0
),
(
  'happy-rebel-healing', 'Happy Rebel Healing', 'A Colorado state-licensed Natural Medicine healing center in Boulder offering individual and group psilocybin sessions and support in a professionally guided setting.',
  ARRAY['therapeutic'],
  '3450 Penrose Place, Suite 220', 'Boulder', 'CO', '80301',
  40.037452, -105.247479,
  '7208009119', 'https://www.happyrebelhealing.com', 'teresa@happyrebelhealing.com',
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  true, 'Self-described "Colorado state-licensed Natural Medicine Healing Center" on happyrebelhealing.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).', 'basic',
  0, 0
),
(
  'chariot-psilocybin-healing-center', 'Chariot', 'A psilocybin service center offering guided psilocybin-assisted sessions in a curated, supervised space with licensed facilitators. Operates a Boulder, Colorado location (also Portland, OR).',
  ARRAY['therapeutic'],
  '1240 Pine St', 'Boulder', 'CO', '80302',
  40.0198523, -105.279461,
  NULL, 'https://chariotspace.com', NULL,
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  true, 'Listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center) with the 1240 Pine St Boulder address matching chariotspace.com; reported as an operating Boulder healing center (Axios Boulder, 2025-12-01).', 'basic',
  0, 0
),
(
  'psychedelic-growth', 'Psychedelic Growth', 'A Boulder healing center providing psychedelic-assisted therapy with licensed facilitators, including psilocybin, structured around preparation, the session, and integration.',
  ARRAY['therapeutic'],
  '5277 Manhattan Circle, Suite 103', 'Boulder', 'CO', '80303',
  39.9850601, -105.2294517,
  '7204413992', 'https://psychedelicgrowth.net', 'erin@psychedelicgrowth.net',
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  true, 'Listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center); reported as an operating Boulder healing center (Axios Boulder, 2025-12-01). Note: own /contact page address (5277 Manhattan Circle) differs from HAF listing (3015 47th St); own-site value used.', 'basic',
  0, 0
),
(
  'wholeness-center', 'Wholeness Center', 'An integrative mental-health clinic in Fort Collins that describes itself as a licensed healing center offering psilocybin-assisted therapies alongside psychiatric and functional-medicine care.',
  ARRAY['therapeutic'],
  '2620 E Prospect Rd, Suite 190', 'Fort Collins', 'CO', '80525',
  40.5687254, -105.0280663,
  '9702211106', 'https://www.wholeness.com', 'info@wholeness.com',
  '{"mon":"9:00-17:00","tue":"9:00-17:00","wed":"9:00-17:00","thu":"9:00-17:00","fri":"9:00-17:00","sat":"9:00-13:00","sun":null}'::jsonb,
  NULL, ARRAY[]::text[],
  true, 'Self-described "licensed healing center offering psilocybin-assisted therapies" on wholeness.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).', 'basic',
  0, 0
),
(
  'numia-healing', 'Numia Healing', 'A Denver healing center offering legal, therapist-guided psilocybin-assisted therapy in a clinically structured setting for individuals, couples, and small groups, emphasizing preparation, safety, and integration.',
  ARRAY['therapeutic'],
  '75 S Madison St, Suite 201', 'Denver', 'CO', '80209',
  39.7150043, -104.946276,
  '7203727137', 'https://numiahealing.com', 'info@numiahealing.com',
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  true, 'Self-described provider of "Legal, Therapist Guided Psilocybin-Assisted Therapy In Denver" on numiahealing.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).', 'basic',
  0, 0
),
(
  'transcendent-integrative-health', 'Transcendent Integrative Health', 'An Arvada healing center providing psychedelic-assisted therapy at a licensed natural-medicine facility with on-site mushroom cultivation and licensed facilitators.',
  ARRAY['therapeutic'],
  '5511 W 56th Ave, Unit 100', 'Arvada', 'CO', '80002',
  39.7989895, -105.0560705,
  '3038287473', 'https://www.transcendent.health', 'info@transcendent.health',
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  true, 'Self-described "fully licensed" healing center "operating in alignment with Colorado law" on transcendent.health; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).', 'basic',
  0, 0
),
(
  'sanctum-aspen', 'SANCTUM', 'An Aspen healing center offering legal, licensed, and medically supervised psilocybin retreats and natural-medicine services for adults 21+, with a focus on leadership and group transformation.',
  ARRAY['therapeutic'],
  '535 E Hyman Ave, Lower Level', 'Aspen', 'CO', '81611',
  39.1884328, -106.817777,
  '9702391147', 'https://www.sanctumaspen.com', NULL,
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  true, 'Self-described "legal, licensed, and medically supervised" Colorado healing center on sanctumaspen.com; listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).', 'basic',
  0, 0
),
(
  'vivid-minds-wellness', 'Vivid Minds Wellness', 'A Denver healing center offering guided psilocybin journeys along with yoga, breathwork, and art therapy in small groups. Describes itself as one of Colorado''s first licensed healing centers.',
  ARRAY['therapeutic'],
  '1545 S Broadway', 'Denver', 'CO', '80210',
  39.6885671, -104.9876124,
  '7202106553', 'https://vividmindswellness.com', NULL,
  '{"mon":"8:00-18:00","tue":"8:00-18:00","wed":"8:00-18:00","thu":"8:00-18:00","fri":"8:00-18:00","sat":"8:00-18:00","sun":"8:00-18:00"}'::jsonb,
  NULL, ARRAY[]::text[],
  true, 'CO Natural Medicine healing center license # NMHC-00003 (published on vividmindswellness.com, "One of Colorado''s First Licensed Healing Centers"); also listed on Healing Advocacy Fund active-licensee directory (healingadvocacyfund.org/co-healing-center).', 'basic',
  0, 0
),
(
  'hazel-dell-mushrooms', 'Hazel Dell Mushrooms', 'Family-owned mushroom farm operating in Colorado''s Northern Front Range since 1997, growing gourmet organic mushrooms (Lion''s Mane, King Oyster, Golden Oyster and more) sold fresh, dried and powdered at its on-site retail store.',
  ARRAY['gourmet'],
  '3925 E County Road 32', 'Fort Collins', 'CO', '80528',
  40.4795751, -105.0067459,
  NULL, 'https://hazeldellmushrooms.com', NULL,
  '{"mon":"9:00-17:00","tue":"9:00-17:00","wed":"9:00-17:00","thu":"9:00-17:00","fri":"9:00-17:00"}'::jsonb,
  NULL, ARRAY[]::text[],
  false, NULL, 'basic',
  0, 0
),
(
  'mile-high-fungi', 'Mile High Fungi', 'Colorado gourmet mushroom farm growing sustainably-cultivated varieties (shiitake, blue & phoenix oyster, chestnut, pioppini, king trumpet, lion''s mane, maitake, beech) plus seasonal wild-foraged mushrooms; sold at Denver farmers markets and via CSA partners.',
  ARRAY['gourmet'],
  '19054 Gooseberry Lane', 'Littleton', 'CO', '80127',
  39.613321, -105.016649,
  '7204810770', 'https://www.milehighfungi.com', 'info@milehighfungi.com',
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  false, NULL, 'basic',
  0, 0
),
(
  'furst-class-fungi', 'Furst Class Fungi', 'Denver-based gourmet mushroom farm selling fresh mushrooms at Colorado farmers markets (City Park, Lafayette, Old South Pearl St) and to local restaurants, with a winter CSA offering pickup and delivery.',
  ARRAY['gourmet'],
  '375 Zenobia St', 'Denver', 'CO', '80219',
  39.721868, -105.052353,
  '8607291177', 'https://www.furstclassfungi.com', NULL,
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  false, NULL, 'basic',
  0, 0
),
(
  'elevated-mushrooms', 'Elevated Mushrooms', 'Englewood mushroom farm and lab growing gourmet and medicinal fungi (Lion''s Mane, King/Polar White/Grey Oyster, Chestnut, Black Pearl) with a storefront selling fresh mushrooms, supplements, cultivation supplies and gourmet treats.',
  ARRAY['gourmet', 'medicinal'],
  '4551 S Logan St', 'Englewood', 'CO', '80113',
  39.634019, -104.9832432,
  '3032492462', 'https://elevatedmushrooms.com', 'paul@elevatedmushrooms.net',
  '{"tue":"10:00-15:00","wed":"10:00-15:00","thu":"10:00-15:00","fri":"10:00-15:00","sat":"10:00-13:00"}'::jsonb,
  NULL, ARRAY[]::text[],
  false, NULL, 'basic',
  0, 0
),
(
  'fox-fungi', 'Fox Fungi', 'Denver urban mushroom farm and retail storefront offering daily-restocked fresh gourmet mushrooms (including oyster varieties), functional mushroom powders, pantry items, frozen meals and mycology supplies.',
  ARRAY['gourmet', 'medicinal'],
  '2370 S Kalamath St Unit D', 'Denver', 'CO', '80223',
  39.673616, -105.0005056,
  '3036561230', 'https://www.foxfungi.com', 'contact@foxfungi.com',
  '{"mon":"12:00-18:00","tue":"12:00-18:00","wed":"12:00-18:00","thu":"12:00-18:00","fri":"10:00-19:00","sat":"10:00-19:00","sun":"14:00-17:00"}'::jsonb,
  NULL, ARRAY[]::text[],
  false, NULL, 'basic',
  0, 0
),
(
  'high-balsam-farm', 'High Balsam Farm', 'One-acre urban farm in Lakewood growing gourmet and medicinal specialty mushrooms (oyster, lion''s mane, reishi, turkey tail, chestnut, enoki, pioppini) sold fresh and dried, with a weekly mushroom CSA (Thursday pickup), tours and cultivation classes.',
  ARRAY['gourmet', 'medicinal'],
  '720 Balsam St', 'Lakewood', 'CO', '80214',
  39.7391754, -105.0884425,
  '7206292171', 'https://www.highbalsamfarm.com', 'Bethlloyd7@gmail.com',
  '{"thu":"16:00-18:00"}'::jsonb,
  NULL, ARRAY[]::text[],
  false, NULL, 'basic',
  0, 0
),
(
  'soss-mushrooms', 'SOSS Mushrooms', 'Denver functional-mushroom retailer offering dual-extracted organic mushroom tinctures and gummies (Lion''s Mane, Cordyceps, Turkey Tail and a 5-Mushroom Blend); in-person product sales by appointment.',
  ARRAY['medicinal'],
  '480 S Holly St', 'Denver', 'CO', '80246',
  39.707927, -104.9219662,
  '3038347673', 'https://www.sossmushrooms.com', NULL,
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  false, NULL, 'basic',
  0, 0
),
(
  'mushroom-saloon', 'The Mushroom Saloon @ CBD Life', 'Colorado Springs wellness retail shop with a curated selection of functional mushrooms alongside hemp/CBD products and mushroom-cultivation supplies, plus classes; operates two storefront locations.',
  ARRAY['medicinal'],
  '826 E Fillmore St', 'Colorado Springs', 'CO', '80907',
  38.8741647, -104.810333,
  '7199008733', 'https://themushroomsaloon.com', 'coloradosbigdiscovery@gmail.com',
  '{"mon":"11:00-18:00","tue":"11:00-18:00","wed":"11:00-18:00","thu":"11:00-18:00","fri":"11:00-18:00","sat":"11:00-18:00","sun":"11:00-16:00"}'::jsonb,
  NULL, ARRAY[]::text[],
  false, NULL, 'basic',
  0, 0
),
(
  'apothecary-tinctura', 'Apothecary Tinctura', 'Denver herbal apothecary and integrative healing practice carrying medicinal mushroom products (Chaga, Maitake, Reishi, Lion''s Mane, Turkey Tail) in tincture, capsule and dried forms, alongside herbs, teas and wellness services.',
  ARRAY['medicinal'],
  '2900 E 6th Ave', 'Denver', 'CO', '80206',
  39.72553, -104.953259,
  '3033991175', 'https://www.apothecarytinctura.com', 'connect@apothecarytinctura.com',
  '{"mon":"10:00-18:00","tue":"10:00-18:00","wed":"10:00-18:00","thu":"10:00-18:00","fri":"10:00-18:00","sat":"10:00-17:00","sun":"12:00-17:00"}'::jsonb,
  NULL, ARRAY[]::text[],
  false, NULL, 'basic',
  0, 0
),
(
  'real-mushrooms', 'Real Mushrooms', 'Sells 100% mushroom-fruiting-body extract supplements (Lion''s Mane, Reishi, Cordyceps, Chaga, Turkey Tail, and the 5 Defenders blend) in powders and capsules for people and pets, with no grain fillers.',
  ARRAY['medicinal'],
  '330 5th Avenue SW, Tower 1, Suite 1800', 'Calgary', 'AB', 'T2P 0L4',
  51.0488256, -114.069204,
  '18002634387', 'https://www.realmushrooms.com', 'hello@realmushrooms.com',
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  false, 'online', 'basic',
  0, 0
),
(
  'host-defense', 'Host Defense (Fungi Perfecti)', 'Paul Stamets'' mycelium-based mushroom supplement line (Lion''s Mane, Reishi, Turkey Tail, Chaga, Cordyceps, MyCommunity and other blends) sold as capsules, powders, gummies, extracts, sprays and drink mixes.',
  ARRAY['medicinal'],
  '', 'Olympia', 'WA', '98507',
  47.0451022, -122.8950075,
  '3604269292', 'https://fungi.com', 'info@fungi.com',
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  false, 'online', 'basic',
  0, 0
),
(
  'freshcap-mushrooms', 'FreshCap Mushrooms', 'Organic functional-mushroom supplements (Lion''s Mane, Cordyceps, Reishi, Chaga, Turkey Tail, Tremella, Maitake, the Ultimate Mushroom Complex blend, and mushroom coffee) in capsules and powders, plus pet products.',
  ARRAY['medicinal'],
  '57-52343 Range Road 211', 'Sherwood Park', 'AB', 'T8G 1A6',
  53.5256963, -113.296631,
  '8558135808', 'https://www.freshcap.com', 'support@freshcap.com',
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  false, 'online', 'basic',
  0, 0
),
(
  'four-sigmatic', 'Four Sigmatic', 'Functional-mushroom coffees, lattes, hot cocoa, protein and supplements featuring Lion''s Mane, Chaga, Cordyceps and Reishi.',
  ARRAY['medicinal'],
  '1450 2nd St, Suite 210', 'Santa Monica', 'CA', '90401',
  34.0136602, -118.4961426,
  '8554008584', 'https://us.foursigmatic.com', NULL,
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  false, 'online', 'basic',
  0, 0
),
(
  'om-mushroom-superfood', 'Om Mushroom Superfood', 'Whole-food cultivated functional-mushroom powders, capsules, drink mixes and broths (Lion''s Mane, Reishi, Cordyceps, Chaga, Turkey Tail and blends).',
  ARRAY['medicinal'],
  '5931 Priestly Drive, Suite 101', 'Carlsbad', 'CA', '92008',
  33.1327084, -117.2731506,
  NULL, 'https://ommushrooms.com', NULL,
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  false, 'online', 'basic',
  0, 0
),
(
  'nootropics-depot', 'Nootropics Depot', 'Online retailer of nootropics and supplements including lab-tested functional-mushroom extracts (Lion''s Mane, Reishi, Cordyceps, Chaga and others) in capsules and powders.',
  ARRAY['medicinal'],
  '8380 S Kyrene Rd, Suite 110', 'Tempe', 'AZ', '85284',
  33.3383851, -111.9457878,
  '4807790257', 'https://nootropicsdepot.com', NULL,
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  false, 'online', 'basic',
  0, 0
),
(
  'mushroom-revival', 'Mushroom Revival', 'USDA Organic functional-mushroom supplements in capsules, tinctures, powders and gummies (Lion''s Mane, Reishi, Cordyceps, Turkey Tail, Chaga and blends).',
  ARRAY['medicinal'],
  '301 West Ave, 5501', 'Austin', 'TX', '78701',
  30.2678018, -97.7511675,
  NULL, 'https://www.mushroomrevival.com', 'support@mushroomrevival.com',
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  false, 'online', 'basic',
  0, 0
),
(
  'north-spore', 'North Spore', 'Mushroom cultivation supplies (spawn, grow kits, substrates) plus a wellness line of mushroom tinctures, capsules, mushroom coffee, chocolate and dried mushrooms.',
  ARRAY['medicinal'],
  '921 Riverside Street', 'Portland', 'ME', '04103',
  43.7062909, -70.3180425,
  '2073520264', 'https://northspore.com', 'info@northspore.com',
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  false, 'online', 'basic',
  0, 0
),
(
  'troop', 'Troop', 'Functional-mushroom daily gummies and blends (Lion''s Mane, Reishi and the Super Troop multi-mushroom blend).',
  ARRAY['medicinal'],
  '', 'Los Angeles', 'CA', '',
  34.0536909, -118.242766,
  '4242349097', 'https://trytroop.com', 'info@trytroop.com',
  '{}'::jsonb,
  NULL, ARRAY[]::text[],
  false, 'online', 'basic',
  0, 0
);
