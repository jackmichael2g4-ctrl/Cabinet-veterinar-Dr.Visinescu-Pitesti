import { contact } from '../data/contact';

const contactItems = [
  {
    label: 'Adresă',
    value: contact.address,
    href: `https://www.google.com/maps?q=${contact.coordinates.lat},${contact.coordinates.lng}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: 'Telefon',
    value: contact.phone,
    href: contact.phoneHref,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: contact.email,
    href: contact.emailHref,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Program',
    value: contact.hours.join('\n'),
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: '0 24px 64px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              marginBottom: '12px',
            }}
          >
            Contact
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '12px',
            }}
          >
            Programează o consultație
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.65,
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            Sună, scrie sau treci pe la noi — suntem aici pentru animalul tău.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="contact-grid">
          {/* Left — contact info + CTAs */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              padding: '32px',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {contactItems.map((item) => (
                <li key={item.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-primary-subtle)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '4px',
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: '15px',
                          color: 'var(--color-text-secondary)',
                          lineHeight: 1.55,
                          textDecoration: 'none',
                          whiteSpace: 'pre-line',
                          transition: 'color 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-secondary)';
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontSize: '15px',
                          color: 'var(--color-text-secondary)',
                          lineHeight: 1.55,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: 'auto' }}>
              <a
                href={contact.phoneHref}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--color-primary)',
                  color: '#ffffff',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background-color 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-primary-hover)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-primary)';
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
                href={contact.emailHref}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'transparent',
                  border: '1.5px solid var(--color-primary)',
                  color: 'var(--color-primary)',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background-color 0.15s ease, color 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = 'var(--color-primary)';
                  el.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = 'transparent';
                  el.style.color = 'var(--color-primary)';
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
          </div>

          {/* Right — Google Maps */}
          <div
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              minHeight: '420px',
              backgroundColor: 'var(--color-border)',
            }}
          >
            <iframe
              title="Locație Cabinet Veterinar Dr. Vișinescu — Pitești"
              src={contact.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
