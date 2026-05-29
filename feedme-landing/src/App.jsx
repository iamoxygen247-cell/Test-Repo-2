import Nav from './components/Nav'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import CompetitiveAdvantage from './components/CompetitiveAdvantage'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import AppPreview from './components/AppPreview'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Accessibility: skip-to-content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#E8001D] text-white px-4 py-2 rounded-full z-[100] font-semibold"
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content">
        <Hero />
        <SocialProof />
        <CompetitiveAdvantage />
        <Features />
        <HowItWorks />
        <AppPreview />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
