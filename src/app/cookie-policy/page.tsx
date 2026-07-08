import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy · Amar Graves',
  description:
    'How the Amar Graves website uses cookies and similar technologies, and how you can control them.',
  robots: { index: false, follow: false },
}

const accent = '#7cc4ff'

export default function CookiePolicy() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        color: '#ffffff',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        padding: '4rem 1.5rem',
      }}
    >
      <article style={{ maxWidth: '720px', margin: '0 auto', lineHeight: 1.65 }}>
        <p
          style={{
            fontSize: '0.8rem',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: accent,
            marginBottom: '1rem',
          }}
        >
          Site Information
        </p>
        <h1
          style={{
            fontSize: 'clamp(1.9rem, 5vw, 2.75rem)',
            fontWeight: 300,
            margin: '0 0 0.75rem 0',
          }}
        >
          Cookie Policy
        </h1>
        <p style={{ opacity: 0.65, fontSize: '0.9rem', margin: '0 0 2rem 0' }}>
          Effective date: July 2026
        </p>

        <p style={{ opacity: 0.85 }}>
          This policy explains how the Amar Graves website (amargraves.org) uses cookies and similar
          technologies, and how you can control them.
        </p>

        <h2
          style={{
            fontSize: '1.35rem',
            fontWeight: 600,
            color: accent,
            margin: '2.5rem 0 0.75rem',
          }}
        >
          What are cookies?
        </h2>
        <p style={{ opacity: 0.85 }}>
          Cookies are small text files stored on your device. They help websites function, remember
          preferences, and measure how a site is used.
        </p>

        <h2
          style={{ fontSize: '1.35rem', fontWeight: 600, color: accent, margin: '2rem 0 0.75rem' }}
        >
          How we use cookies
        </h2>
        <ul style={{ paddingLeft: '1.25rem', opacity: 0.85, display: 'grid', gap: '0.65rem' }}>
          <li>
            <strong>Necessary and functional.</strong> A small amount of information may be stored
            to make the site work and to remember your cookie choices. These are set regardless of
            consent because the site cannot function without them.
          </li>
          <li>
            <strong>Analytics (on by default, opt-out).</strong> We use Google Tag Manager and
            Google Analytics 4 to understand aggregate site usage. These run by default, and an
            analytics cookie such as <code>_ga</code> is set on your first visit. You can turn this
            off at any time through our cookie banner (see below).
          </li>
          <li>
            <strong>Third-party.</strong> Some pages may link to or embed outside services, and
            those services may set their own cookies when used.
          </li>
        </ul>

        <h2
          style={{ fontSize: '1.35rem', fontWeight: 600, color: accent, margin: '2rem 0 0.75rem' }}
        >
          Managing your choices
        </h2>
        <p style={{ opacity: 0.85 }}>
          Analytics runs by default so we can measure aggregate usage, but you are always free to
          opt out. Our cookie-consent banner lets you decline (or customize) non-essential cookies:
          declining stops analytics on this browser and removes analytics cookies such as{' '}
          <code>_ga</code>. You can also clear this site&apos;s cookies and stored data in your
          browser settings, which brings the banner back on your next visit so you can choose
          differently.
        </p>

        <h2
          style={{ fontSize: '1.35rem', fontWeight: 600, color: accent, margin: '2rem 0 0.75rem' }}
        >
          More information
        </h2>
        <p style={{ opacity: 0.85 }}>
          For more on how information is handled, see our{' '}
          <Link href="/privacy-policy" style={{ color: accent }}>
            Privacy Policy
          </Link>
          . This site is a personal page currently under development; questions about this policy
          can be directed to the site owner.
        </p>

        <p style={{ marginTop: '3rem' }}>
          <Link href="/" style={{ color: accent, textDecoration: 'none' }}>
            &larr; Back to home
          </Link>
        </p>
      </article>
    </main>
  )
}
