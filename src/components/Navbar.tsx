export default function Navbar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--color-white)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              backgroundColor: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 11C5.88 11 7 9.88 7 8.5S5.88 6 4.5 6 2 7.12 2 8.5 3.12 11 4.5 11Z" fill="white"/>
              <path d="M9 7C10.38 7 11.5 5.88 11.5 4.5S10.38 2 9 2 6.5 3.12 6.5 4.5 7.62 7 9 7Z" fill="white"/>
              <path d="M15 7C16.38 7 17.5 5.88 17.5 4.5S16.38 2 15 2 12.5 3.12 12.5 4.5 13.62 7 15 7Z" fill="white"/>
              <path d="M19.5 11C20.88 11 22 9.88 22 8.5S20.88 6 19.5 6 17 7.12 17 8.5 18.12 11 19.5 11Z" fill="white"/>
              <path d="M17.34 14.86C16.1 13.3 14.21 12.34 12.12 12.34C10.01 12.34 8.1 13.32 6.87 14.9C5.63 16.47 5.24 18.5 5.85 20.38L6.41 22.11C6.63 22.78 7.26 23.22 7.97 23.22H16.03C16.74 23.22 17.37 22.78 17.59 22.11L18.15 20.38C18.76 18.5 18.57 16.43 17.34 14.86Z" fill="white"/>
            </svg>
          </div>
          <div>
            <div
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: 'var(--color-text)',
                lineHeight: '1.2',
              }}
            >
              Dr. Vișinescu
            </div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 500,
                color: 'var(--color-primary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Cabinet & Farmacie Veterinară
            </div>
          </div>
        </a>

        {/* Nav links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
          className="nav-links"
        >
          {[
            { label: 'Acasă', href: '#' },
            { label: 'Servicii', href: '#services' },
            { label: 'Recenzii', href: '#testimonials' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                padding: '8px 14px',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-sm)',
                transition: 'color 0.15s ease, background-color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text)';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-bg)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-secondary)';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+40000000000"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-white)',
            fontSize: '14px',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'background-color 0.15s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-primary-hover)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-primary)';
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
          </svg>
          Programează
        </a>
      </div>
    </header>
  );
}
