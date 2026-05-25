// One-shot generator: emits supabase/seed.sql from the verified retailer data.
// Run: npx tsx scripts/gen-seed.ts
import { writeFileSync } from 'node:fs'
import { therapeuticRetailers } from '../data/retailers/therapeutic'
import { coloradoRetailers } from '../data/retailers/colorado'
import { onlineRetailers } from '../data/retailers/online'

const all = [...therapeuticRetailers, ...coloradoRetailers, ...onlineRetailers]

const q = (s: string | undefined | null) =>
  s === undefined || s === null ? 'NULL' : `'${String(s).replace(/'/g, "''")}'`
const arr = (xs: string[]) => `ARRAY[${xs.map((x) => q(x)).join(', ')}]`

const rows = all.map((r) => {
  const hours = JSON.stringify(r.hours ?? {})
  const photos = r.photoUrls?.length ? arr(r.photoUrls) : `ARRAY[]::text[]`
  // verification_type carries the licensing provenance (therapeutic centers);
  // online-ness is encoded as a tag-style flag in verification_type for online brands.
  const verification = r.licenseInfo ? q(r.licenseInfo) : r.online ? `'online'` : 'NULL'
  return `(
  ${q(r.slug)}, ${q(r.name)}, ${q(r.description)},
  ${arr(r.verticals)},
  ${q(r.address)}, ${q(r.city)}, ${q(r.state)}, ${q(r.zip)},
  ${r.lat}, ${r.lng},
  ${q(r.phone)}, ${q(r.website)}, ${q(r.email)},
  '${hours.replace(/'/g, "''")}'::jsonb,
  NULL, ${photos},
  ${r.isVerified}, ${verification}, ${q(r.subscriptionTier)},
  ${r.avgRating}, ${r.reviewCount}
)`
})

const sql = `-- MycoMaps seed data — REAL verified retailers (generated ${new Date().toISOString().slice(0, 10)})
-- Source of truth: data/retailers/{therapeutic,colorado,online}.ts (see those files for provenance).
-- Regenerate with: npx tsx scripts/gen-seed.ts
-- WARNING: Truncates retailers table before inserting.
TRUNCATE TABLE retailers CASCADE;

INSERT INTO retailers (slug, name, description, verticals, address, city, state, zip, lat, lng, phone, website, email, hours, cover_url, photo_urls, is_verified, verification_type, subscription_tier, avg_rating, review_count) VALUES
${rows.join(',\n')};
`

writeFileSync(new URL('../supabase/seed.sql', import.meta.url), sql)
console.log(`Wrote supabase/seed.sql with ${all.length} retailers.`)
