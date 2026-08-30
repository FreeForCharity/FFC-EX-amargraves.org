import type { Metadata } from 'next'
import './globals.css'
import { CONSENT_MODE_BOOTSTRAP } from '@/lib/consent-mode'

export const metadata: Metadata = {
  metadataBase: new URL('https://amargraves.org'),
  title: 'Amar Graves',
  description: 'The personal page for Amar Graves. Under development.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://amargraves.org/',
    siteName: 'Amar Graves',
    title: 'Amar Graves',
    description: 'The personal page for Amar Graves. Under development.',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Consent Mode v2 defaults — MUST run before any Google tag.
            No Google tag is wired into this layout today (the site is a
            pre-launch placeholder), so this only sets the regional consent
            defaults on the dataLayer; if GTM/GA4 is enabled at launch, keep
            this script ABOVE it. Granted worldwide, denied (cookieless
            pings) only where Google's EU User Consent Policy requires
            opt-in. See src/lib/consent-mode.ts. */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_MODE_BOOTSTRAP }} />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
