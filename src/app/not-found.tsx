import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found · Amar Graves',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        color: '#ffffff',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '480px' }}>
        <p
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#7cc4ff',
            marginBottom: '1rem',
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 5vw, 3rem)',
            fontWeight: 300,
            lineHeight: 1.2,
            margin: '0 0 1rem 0',
          }}
        >
          We couldn&apos;t find that page.
        </h1>
        <p
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            opacity: 0.7,
            lineHeight: 1.6,
            margin: '0 0 2rem 0',
          }}
        >
          The link may be old, or the page may have moved.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.65rem 1.5rem',
            borderRadius: '6px',
            fontWeight: 600,
            fontSize: '0.95rem',
            background: '#7cc4ff',
            color: '#1a1a2e',
            textDecoration: 'none',
          }}
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
