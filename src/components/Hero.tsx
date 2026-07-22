const trustBadges = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: 'Diagnostic avansat',
    sub: 'Echipamente moderne pentru un diagnostic rapid și precis',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: 'Medici specializați',
    sub: 'Echipă cu experiență în diverse domenii veterinare',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12H15V22" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: 'Mediu prietenos',
    sub: 'Spațiu modern destinat câinilor și pisicilor pentru confort maxim',
  },
];

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 68px)',
        minHeight: '600px',
        maxHeight: '860px',
        overflow: 'hidden',
        backgroundColor: '#1a2e2e',
      }}
    >
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        alt="Medic veterinar cu un câine"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 20%',
        }}
      />

      {/* Overlay — left-heavy gradient for text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(10,26,26,0.82) 0%, rgba(10,26,26,0.55) 55%, rgba(10,26,26,0.10) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBottom: '160px',
        }}
        className="hero-content"
      >
        <div style={{ maxWidth: '620px' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '100px',
              backgroundColor: 'rgba(0,101,102,0.25)',
              border: '1px solid rgba(0,101,102,0.4)',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#4dd9d9',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '13px',
                fontWeight: 500,
                color: '#a8ecec',
                letterSpacing: '0.03em',
              }}
            >
              Programări și urgențe — Pitești
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}
          >
            Dr. Vișinescu —{' '}
            <span style={{ color: '#4dd9d9' }}>
              Clinica veterinară
            </span>{' '}
            preferată din Pitești
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: '17px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.65,
              marginBottom: '36px',
              maxWidth: '520px',
            }}
          >
            Îngrijire veterinară de calitate pentru animalul tău de companie,
            într-un mediu modern și prietenos. Servicii complete — cabinet și
            farmacie veterinară.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }} className="hero-ctas">
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 24px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-primary)',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background-color 0.15s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-primary-hover)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-primary)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                <path d="M16 2V6M8 2V6M3 10H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Programează o consultație
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 24px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.35)',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'border-color 0.15s ease, background-color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.65)';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.06)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.35)';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              }}
            >
              Descoperă serviciile noastre
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M13 6L19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Trust badges strip at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
        className="hero-trust-strip"
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              backgroundColor: 'rgba(255,255,255,0.10)',
              borderTop: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '12px 12px 0 0',
              overflow: 'hidden',
            }}
            className="hero-trust-grid"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                style={{
                  padding: '20px 24px',
                  backgroundColor: 'rgba(10,26,26,0.75)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div
                    style={{
                      flexShrink: 0,
                      marginTop: '2px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(0,101,102,0.30)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {badge.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', marginBottom: '3px' }}>
                      {badge.text}
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                      {badge.sub}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
