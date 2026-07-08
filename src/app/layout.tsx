import type { Metadata } from 'next'
import './globals.css'
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/google-tag-manager'
import CookieConsent from '@/components/cookie-consent'

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
        <GoogleTagManager />
      </head>
      <body suppressHydrationWarning={true}>
        <GoogleTagManagerNoScript />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
