const testimonials = [
  {
    name: 'Maria Ionescu',
    pet: 'Stăpâna lui Max',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
    text: 'Dr. Vișinescu a salvat viața pisicii mele când nimeni nu mai spera. Profesionalism, compasiune și grijă pentru fiecare detaliu. Recomand din suflet!',
    date: 'acum 2 săptămâni',
  },
  {
    name: 'Andrei Popescu',
    pet: 'Stăpânul lui Rex',
    avatar: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
    text: 'Cea mai bună clinică veterinară din Pitești. Personal amabil, medic foarte atent și răbdător cu animalele. Rex a primit tratament excelent după operație.',
    date: 'acum 1 lună',
  },
  {
    name: 'Elena Dumitrescu',
    pet: 'Stăpâna Bellei',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
    text: 'Clinică curată, modernă și bine organizată. Am fost pentru vaccinări și microcipare. Prețuri corecte și explicații clare de la medic. Mulțumesc!',
    date: 'acum 3 săptămâni',
  },
];

const stats = [
  { value: '15+', label: 'Ani de experiență' },
  { value: '10.000+', label: 'Pacienți tratați' },
  { value: '4.9', label: 'Rating Google' },
  { value: '98%', label: 'Clienți mulțumiți' },
];

function StarRow({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? '#fbbf24' : 'none'}
          stroke={i < count ? '#fbbf24' : '#cbd5e1'}
          strokeWidth="2"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinejoin="round"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: 'var(--color-primary-subtle)',
        padding: '96px 24px',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              marginBottom: '12px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Recenzii Google
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            Ce spun clienții noștri
          </h2>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 16px',
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderRadius: '100px',
            }}
          >
            <StarRow count={5} />
            <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text)' }}>
              4.9
            </span>
            <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
              / 327 de recenzii
            </span>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                padding: '28px',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Google header row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px',
                }}
              >
                <div style={{ display: 'flex', gap: '2px' }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinejoin="round"/>
                    </svg>
                  ))}
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Review text */}
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text)',
                  lineHeight: 1.65,
                  marginBottom: '22px',
                }}
              >
                "{t.text}"
              </p>

              {/* Reviewer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-text)' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                    {t.pet} · {t.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div
          style={{
            marginTop: '64px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            backgroundColor: 'var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
          className="stats-grid"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                padding: '28px 20px',
                backgroundColor: 'var(--color-white)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '30px',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '4px',
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
