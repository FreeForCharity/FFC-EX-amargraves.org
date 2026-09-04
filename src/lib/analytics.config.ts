// Analytics & tracking IDs — reference values plus the isConfigured guard.
//
// These are NOT secrets. They are public, client-side identifiers that get
// baked into the static export and are visible in the page source anyway.
//
// NOTE: in THIS fork the values below are not yet the single source of
// truth — the cookie-consent component reads its IDs from NEXT_PUBLIC_*
// environment variables (falling back to the same placeholders), and the
// currently-unmounted google-tag-manager component hardcodes its GTM ID.
// This file exists so the placeholder guard below has one home and so the
// fork can converge on the template's single-source layout later; if you
// change an ID, check those two components as well.
//
// Leave a value as its placeholder to keep that integration effectively
// inert.
export const analyticsConfig = {
  // Google Tag Manager container ID, e.g. 'GTM-ABC1234'. GTM is the umbrella
  // that can load the others, so this is the main one most sites set.
  gtmId: 'GTM-TQ5H8HPR',

  // Google Analytics 4 measurement ID, e.g. 'G-ABC1234567'.
  gaMeasurementId: 'G-XXXXXXXXXX',

  // Meta (Facebook) Pixel ID.
  metaPixelId: 'XXXXXXXXXXXXXXX',

  // Microsoft Clarity project ID.
  clarityProjectId: 'XXXXXXXXXX',
} as const

// The placeholder values shipped above. Loaders check against this list so
// that "leave a value as its placeholder to keep that integration
// effectively inert" (the promise a few lines up) is actually honored.
const PLACEHOLDER_IDS: readonly string[] = ['G-XXXXXXXXXX', 'XXXXXXXXXXXXXXX', 'XXXXXXXXXX']

/**
 * True when an analytics ID has been replaced with a real value. A falsy
 * or whitespace-only value, one of the shipped placeholders, or any
 * obviously-templated value (six or more consecutive X's) counts as NOT
 * configured, so the integration it belongs to stays inert.
 */
export function isConfigured(id: string | undefined | null): boolean {
  if (!id) return false
  const trimmed = id.trim()
  if (!trimmed) return false
  if (PLACEHOLDER_IDS.includes(trimmed)) return false
  if (/X{6,}/.test(trimmed)) return false
  return true
}
