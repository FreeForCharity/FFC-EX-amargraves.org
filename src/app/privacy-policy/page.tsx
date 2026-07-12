import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy · Amar Graves',
  description:
    'How the Amar Graves website handles analytics and your privacy, and how to opt out.',
  robots: { index: false, follow: false },
}

const accent = '#7cc4ff'

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p style={{ opacity: 0.65, fontSize: '0.9rem', margin: '0 0 2rem 0' }}>
          Effective date: July 2026
        </p>

        <p style={{ opacity: 0.85 }}>
          This policy explains how the Amar Graves website (amargraves.org) handles information
          about visitors. This is a personal page that is currently under development.
        </p>

        <h2
          style={{
            fontSize: '1.35rem',
            fontWeight: 600,
            color: accent,
            margin: '2.5rem 0 0.75rem',
          }}
        >
          Analytics
        </h2>
        <p style={{ opacity: 0.85 }}>
          To understand how the site is used, we run Google Analytics 4 through Google Tag Manager.
          Analytics is <strong>on by default</strong>: on your first visit an analytics cookie such
          as <code>_ga</code> is set, and aggregate, non-identifying usage data (for example, pages
          viewed and approximate location) is collected. We do not sell this data or use it to
          identify you personally.
        </p>

        <h2
          style={{ fontSize: '1.35rem', fontWeight: 600, color: accent, margin: '2rem 0 0.75rem' }}
        >
          Your choice: opting out
        </h2>
        <p style={{ opacity: 0.85 }}>
          You can turn analytics off at any time. Use the <strong>Decline</strong> option in the
          cookie-consent banner: this stops analytics on this browser going forward and deletes the
          analytics cookies (such as <code>_ga</code>) that were set. You can also clear this
          site&apos;s cookies in your browser settings, which brings the banner back so you can
          choose differently. For full details of the cookies involved, see our{' '}
          <Link href="/cookie-policy" style={{ color: accent }}>
            Cookie Policy
          </Link>
          .
        </p>

        <h2
          style={{ fontSize: '1.35rem', fontWeight: 600, color: accent, margin: '2rem 0 0.75rem' }}
        >
          Contact
        </h2>
        <p style={{ opacity: 0.85 }}>
          Questions about this policy can be directed to the site owner. As the site develops,
          contact details will be added here.
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
