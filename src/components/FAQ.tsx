import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: 'Oferiți consultații de urgență?',
    answer:
      'Da. În funcție de disponibilitate, oferim consultații pentru urgențe medicale. Vă recomandăm să ne contactați telefonic înainte de sosire.',
  },
  {
    question: 'Este necesară programarea?',
    answer:
      'Programarea este recomandată pentru a reduce timpul de așteptare și pentru a ne putea organiza cât mai eficient.',
  },
  {
    question: 'Ce animale tratați?',
    answer:
      'Oferim servicii medicale pentru câini, pisici și alte animale de companie.',
  },
  {
    question: 'Ce trebuie să aduc la prima consultație?',
    answer:
      'Dacă există, vă recomandăm să aduceți carnetul de sănătate și orice documente medicale relevante ale animalului.',
  },
  {
    question: 'Ce metode de plată acceptați?',
    answer: 'Acceptăm plata cu numerar și card bancar.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: '96px 24px',
      }}
      className="section-pad"
      id="faq"
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            Suport
          </span>
          <h2 className="section-title">
            Întrebări frecvente
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
            Am răspuns la cele mai întâlnite întrebări pentru a vă ajuta să
            găsiți rapid informațiile de care aveți nevoie.
          </p>
        </div>

        {/* Accordion */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FaqRow
                key={index}
                item={item}
                isOpen={isOpen}
                onToggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

type FaqRowProps = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqRow({ item, isOpen, onToggle }: FaqRowProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-white)',
        border: `1px solid ${isOpen ? 'var(--color-primary)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '20px 24px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <span
          style={{
            fontSize: '16px',
            fontWeight: 600,
            color: 'var(--color-text)',
            lineHeight: 1.4,
          }}
        >
          {item.question}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: isOpen ? 'var(--color-primary)' : 'var(--color-primary-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease, transform 0.25s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            style={{ color: isOpen ? '#ffffff' : 'var(--color-primary)', transition: 'color 0.2s ease' }}
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Animated panel using grid-rows trick */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.3s ease',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <p
            style={{
              padding: '0 24px 22px',
              fontSize: '15px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.65,
            }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
