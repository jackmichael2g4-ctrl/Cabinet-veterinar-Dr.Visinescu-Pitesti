import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState<'clinic' | 'pharmacy'>('clinic')

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-100">
              <span className="text-xl font-bold">🐾</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">Dr. Vișinescu</h1>
              <p className="text-xs text-teal-600 font-medium tracking-wider uppercase">Cabinet & Farmacie Veterinară</p>
            </div>
          </div>
          <nav className="flex gap-1 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('clinic')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'clinic'
                  ? 'bg-white text-teal-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Cabinet Veterinar
            </button>
            <button
              onClick={() => setActiveTab('pharmacy')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'pharmacy'
                  ? 'bg-white text-teal-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Farmacie Veterinară
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-100">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
              Programări și Urgențe Pitesti
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Sănătatea și fericirea <br />
              <span className="text-teal-600">prietenului tău necuvântător</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Oferim servicii medicale veterinare complete, diagnostic avansat și o farmacie veterinară bine aprovizionată în Pitești. Echipa condusă de Dr. Vișinescu tratează fiecare pacient cu devotament și profesionalism.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 shadow-lg shadow-teal-100 transition-all duration-200"
              >
                Programează o consultație
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 active:bg-slate-100 transition-all duration-200"
              >
                Vezi serviciile noastre
              </a>
            </div>
          </div>

          {/* Interactive Card */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-100 border border-slate-100/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10"></div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span>{activeTab === 'clinic' ? '🏥 Servicii Medicale' : '💊 Farmacie Veterinară'}</span>
              </h3>

              {activeTab === 'clinic' ? (
                <div className="space-y-4">
                  {[
                    { title: 'Consultații & Tratamente', desc: 'Evaluare generală, diagnostic clinic și planuri personalizate de tratament.' },
                    { title: 'Chirurgie & Stomatologie', desc: 'Intervenții chirurgicale sigure și servicii de igienă orală pentru animale.' },
                    { title: 'Vaccinări & Microcipări', desc: 'Prevenție esențială și înregistrare oficială în RECS.' }
                  ].map((service, idx) => (
                    <div key={idx} className="p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200">
                      <h4 className="font-semibold text-slate-900">{service.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{service.desc}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {[
                    { title: 'Medicamente cu rețetă', desc: 'Tratamente specifice recomandate de medicul veterinar.' },
                    { title: 'Suplimente & Vitamine', desc: 'Susținerea sistemului imunitar și a articulațiilor animalului tău.' },
                    { title: 'Diete Veterinare & Hrană', desc: 'Nutriție specializată pentru diverse afecțiuni și stadii de viață.' }
                  ].map((prod, idx) => (
                    <div key={idx} className="p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200">
                      <h4 className="font-semibold text-slate-900">{prod.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{prod.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Info Sections */}
      <section className="bg-slate-900 text-white py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <h4 className="text-lg font-bold text-teal-400 mb-2">📍 Locație</h4>
              <p className="text-slate-300">Pitești, Județul Argeș, România</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <h4 className="text-lg font-bold text-teal-400 mb-2">📞 Contact & Urgențe</h4>
              <p className="text-slate-300">Sună pentru programări la medicul veterinar.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <h4 className="text-lg font-bold text-teal-400 mb-2">🕒 Program</h4>
              <p className="text-slate-300">Luni - Vineri: 09:00 - 19:00<br />Sâmbătă: 09:00 - 14:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
