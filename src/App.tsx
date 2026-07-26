import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import TrustMarquee from './components/TrustMarquee'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrustMarquee />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
