import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
