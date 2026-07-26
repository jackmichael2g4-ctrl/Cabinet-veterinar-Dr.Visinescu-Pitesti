const services = [
  {
    title: 'Consultații & Diagnostic',
    description:
      'Evaluare generală completă, diagnostic clinic precis și planuri de tratament personalizate pentru animalul tău.',
    image:
      'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Medic veterinar consultând un câine',
  },
  {
    title: 'Chirurgie & Stomatologie',
    description:
      'Intervenții chirurgicale de la sterilizări de rutină la proceduri complexe, realizate în condiții optime.',
    image:
      'https://images.pexels.com/photos/6235010/pexels-photo-6235010.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Instrumentar chirurgical veterinar',
  },
  {
    title: 'Vaccinări & Microcipări',
    description:
      'Prevenție esențială prin vaccinări conform schemelor recomandate și înregistrare oficială în RECS.',
    image:
      'https://images.pexels.com/photos/6235239/pexels-photo-6235239.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Vaccinare câine la cabinet veterinar',
  },
  {
    title: 'Analize & Laborator',
    description:
      'Investigații de laborator rapide — hemogramă, biochimie, urină — pentru un diagnostic complet și corect.',
    image:
      'https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Analize de laborator veterinar',
  },
  {
    title: 'Farmacie Veterinară',
    description:
      'Medicamente cu și fără prescripție, suplimente, diete veterinare și produse antiparazitare de calitate.',
    image:
      'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Produse farmacie veterinară',
  },
  {
    title: 'Urgențe Veterinare',
    description:
      'Echipă pregătită pentru situații de urgență, cu acces rapid la diagnostic și tratament în cazuri critice.',
    image:
      'https://images.pexels.com/photos/7469207/pexels-photo-7469207.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Urgență veterinară câine',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: '96px 24px',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
            Ce oferim
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
            Serviciile noastre
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.65,
              maxWidth: '540px',
              margin: '0 auto',
            }}
          >
            Oferim o gamă completă de servicii veterinare pentru animalul tău de companie,
            cu o echipă medicală dedicată și experimentată.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

function ServiceCard({ title, description, image, imageAlt }: ServiceCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-sm)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Image */}
      <div style={{ height: '220px', overflow: 'hidden' }}>
        <img
          src={image}
          alt={imageAlt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.35s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        <h3
          style={{
            fontSize: '17px',
            fontWeight: 700,
            color: 'var(--color-primary)',
            marginBottom: '10px',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
            marginBottom: '16px',
          }}
        >
          {description}
        </p>
        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--color-primary)',
            textDecoration: 'none',
            transition: 'gap 0.15s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '8px'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '5px'; }}
        >
          Află mai multe
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
