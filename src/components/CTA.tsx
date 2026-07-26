export default function CTA() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: '0 24px 80px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            position: 'relative',
            backgroundColor: 'var(--color-primary)',
            borderRadius: 'var(--radius-xl)',
            padding: '56px 48px',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Decorative paw print — low-opacity watermark, right side */}
          <svg
            viewBox="0 0 200 200"
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-16px',
              bottom: '-20px',
              width: '280px',
              height: '280px',
              opacity: 0.04,
              pointerEvents: 'none',
              color: '#ffffff',
            }}
          >
            {/* Main pad */}
            <ellipse cx="100" cy="140" rx="46" ry="38" fill="currentColor" />
            {/* Top-left toe */}
            <ellipse cx="52" cy="90" rx="20" ry="25" fill="currentColor" transform="rotate(-15 52 90)" />
            {/* Top-center-left toe */}
            <ellipse cx="82" cy="68" rx="20" ry="26" fill="currentColor" transform="rotate(-5 82 68)" />
            {/* Top-center-right toe */}
            <ellipse cx="116" cy="68" rx="20" ry="26" fill="currentColor" transform="rotate(5 116 68)" />
            {/* Top-right toe */}
            <ellipse cx="148" cy="90" rx="20" ry="25" fill="currentColor" transform="rotate(15 148 90)" />
          </svg>

          {/* Second paw — faint, upper left */}
          <svg
            viewBox="0 0 200 200"
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '-30px',
              top: '-30px',
              width: '180px',
              height: '180px',
              opacity: 0.03,
              pointerEvents: 'none',
              color: '#ffffff',
            }}
          >
            <ellipse cx="100" cy="140" rx="46" ry="38" fill="currentColor" />
            <ellipse cx="52" cy="90" rx="20" ry="25" fill="currentColor" transform="rotate(-15 52 90)" />
            <ellipse cx="82" cy="68" rx="20" ry="26" fill="currentColor" transform="rotate(-5 82 68)" />
            <ellipse cx="116" cy="68" rx="20" ry="26" fill="currentColor" transform="rotate(5 116 68)" />
            <ellipse cx="148" cy="90" rx="20" ry="25" fill="currentColor" transform="rotate(15 148 90)" />
          </svg>

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Eyebrow label */}
            <span
              style={{
                display: 'inline-block',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(77,217,217,0.85)',
                marginBottom: '12px',
              }}
            >
              Programări
            </span>

            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 38px)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '14px',
              }}
            >
              Programează o consultație
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.65,
                maxWidth: '560px',
                margin: '0 auto 32px',
              }}
            >
              Contactează-ne pentru o programare, o urgență sau dacă ai
              întrebări despre sănătatea animalului tău.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '14px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="tel:+40745534944"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#ffffff',
                  color: 'var(--color-primary)',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background-color 0.15s ease, color 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = 'var(--color-primary-light)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = '#ffffff';
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                    fill="currentColor"
                  />
                </svg>
                Sună acum
              </a>

              <a
                href="mailto:contact@cabinetveterinararad.ro"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'transparent',
                  border: '1.5px solid rgba(255,255,255,0.45)',
                  color: '#ffffff',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'border-color 0.15s ease, background-color 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = 'rgba(255,255,255,0.75)';
                  el.style.backgroundColor = 'rgba(255,255,255,0.08)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = 'rgba(255,255,255,0.45)';
                  el.style.backgroundColor = 'transparent';
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Trimite email
              </a>
            </div>

            {/* Trust line */}
            <p
              style={{
                marginTop: '22px',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.6,
              }}
            >
              Programări rapide • Răspundem în aceeași zi lucrătoare
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
