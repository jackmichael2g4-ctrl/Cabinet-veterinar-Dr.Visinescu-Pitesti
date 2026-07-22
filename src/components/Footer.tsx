const columns = [
  {
    title: 'Clinică',
    links: [
      { label: 'Acasă', href: '#' },
      { label: 'Despre noi', href: '#' },
      { label: 'Servicii', href: '#services' },
      { label: 'Recenzii', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Servicii',
    links: [
      { label: 'Consultații & Diagnostic', href: '#services' },
      { label: 'Chirurgie & Stomatologie', href: '#services' },
      { label: 'Vaccinări & Microcipări', href: '#services' },
      { label: 'Analize & Laborator', href: '#services' },
      { label: 'Farmacie Veterinară', href: '#services' },
      { label: 'Urgențe Veterinare', href: '#services' },
    ],
  },
];

const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    label: 'Adresă',
    value: 'Pitești, Județul Argeș, România',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
      </svg>
    ),
    label: 'Telefon',
    value: 'Sună pentru programări',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Program',
    value: 'Luni–Vineri: 09:00–19:00\nSâmbătă: 09:00–14:00',
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: 'var(--color-dark)',
        color: 'rgba(255,255,255,0.7)',
        paddingTop: '80px',
        paddingBottom: '32px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: '48px',
            paddingBottom: '56px',
            borderBottom: '1px solid rgba(255,255,255,0.10)',
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4.5 11C5.88 11 7 9.88 7 8.5S5.88 6 4.5 6 2 7.12 2 8.5 3.12 11 4.5 11Z" fill="white"/>
                  <path d="M9 7C10.38 7 11.5 5.88 11.5 4.5S10.38 2 9 2 6.5 3.12 6.5 4.5 7.62 7 9 7Z" fill="white"/>
                  <path d="M15 7C16.38 7 17.5 5.88 17.5 4.5S16.38 2 15 2 12.5 3.12 12.5 4.5 13.62 7 15 7Z" fill="white"/>
                  <path d="M19.5 11C20.88 11 22 9.88 22 8.5S20.88 6 19.5 6 17 7.12 17 8.5 18.12 11 19.5 11Z" fill="white"/>
                  <path d="M17.34 14.86C16.1 13.3 14.21 12.34 12.12 12.34C10.01 12.34 8.1 13.32 6.87 14.9C5.63 16.47 5.24 18.5 5.85 20.38L6.41 22.11C6.63 22.78 7.26 23.22 7.97 23.22H16.03C16.74 23.22 17.37 22.78 17.59 22.11L18.15 20.38C18.76 18.5 18.57 16.43 17.34 14.86Z" fill="white"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
                  Dr. Vișinescu
                </div>
                <div style={{ fontSize: '11px', color: '#4dd9d9', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 500 }}>
                  Cabinet & Farmacie
                </div>
              </div>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.6)', maxWidth: '300px', marginBottom: '20px' }}>
              Cabinet și farmacie veterinară în Pitești. Îngrijire dedicată pentru
              animalul tău de companie, cu o echipă medicală experimentată.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['facebook', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(0,101,102,0.5)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                >
                  {social === 'facebook' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-10.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#ffffff',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        transition: 'color 0.15s ease',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#4dd9d9'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '18px',
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {contactInfo.map((info) => (
                <li key={info.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, color: '#4dd9d9', marginTop: '2px' }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff', marginBottom: '2px' }}>
                      {info.label}
                    </div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                      {info.value}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          className="footer-bottom"
        >
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
            © 2025 Dr. Vișinescu — Cabinet & Farmacie Veterinară. Toate drepturile rezervate.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Politica de confidențialitate</a>
            <a href="#" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Termeni și condiții</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
