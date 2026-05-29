import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackEvent, Events } from '../utils/analytics'

const NAV_LINKS = [
  { label: 'Features',     href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews',      href: '#testimonials' },
  { label: 'FAQ',          href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl backdrop-saturate-180 border-b border-black/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label="FeedMe home">
            <span className="text-2xl" aria-hidden="true">🍔</span>
            <span className="font-bold text-xl text-[#1d1d1f]">
              Feed<span className="text-[#E8001D]">Me</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => trackEvent(Events.NAV_LINK_CLICK, { label: link.label })}
                className="text-sm text-[#1d1d1f]/70 hover:text-[#E8001D] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#download"
            onClick={() => trackEvent(Events.NAV_CTA_CLICK, { location: 'desktop_nav' })}
            className="hidden md:inline-flex items-center gap-2 bg-[#E8001D] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#C2001A] active:scale-95 transition-all"
          >
            Download App
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="md:hidden p-2 rounded-lg text-[#1d1d1f] hover:bg-black/5 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav aria-label="Mobile navigation" className="px-4 py-4 space-y-1">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setMobileOpen(false)
                    trackEvent(Events.NAV_LINK_CLICK, { label: link.label, location: 'mobile' })
                  }}
                  className="block text-[#1d1d1f] font-medium py-3 px-3 rounded-xl hover:bg-[#E8001D]/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => {
                  setMobileOpen(false)
                  trackEvent(Events.NAV_CTA_CLICK, { location: 'mobile_nav' })
                }}
                className="block text-center bg-[#E8001D] text-white font-semibold px-5 py-3 rounded-full mt-2 hover:bg-[#C2001A] transition-colors"
              >
                Download App
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
