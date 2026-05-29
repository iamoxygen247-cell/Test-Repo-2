import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { trackEvent, Events } from '../utils/analytics'

export default function FinalCTA() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-white" ref={ref} aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="bg-gradient-to-br from-[#E8001D] to-[#FF2D44] rounded-[40px] px-8 py-16 text-center relative overflow-hidden"
        >
          {/* Background blobs */}
          <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-white/10 blur-2xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/5  blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative">
            <p className="text-5xl mb-5" aria-hidden="true">🍕🍔🍣</p>

            <h2 id="cta-heading" className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Hungry right now?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
              Join 120,000+ people who never wait long for great food.
              Download the app or sign up in seconds — it's free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* App Store */}
              <a
                href="#"
                onClick={() => trackEvent(Events.APP_STORE_CLICK, { location: 'final_cta' })}
                aria-label="Download FeedMe on the App Store"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#1d1d1f] px-6 py-4 rounded-full font-semibold hover:bg-white/90 active:scale-95 transition-all"
              >
                <span aria-hidden="true">🍎</span>
                App Store
              </a>

              {/* Google Play */}
              <a
                href="#"
                onClick={() => trackEvent(Events.PLAY_STORE_CLICK, { location: 'final_cta' })}
                aria-label="Get FeedMe on Google Play"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#1d1d1f] px-6 py-4 rounded-full font-semibold hover:bg-white/90 active:scale-95 transition-all"
              >
                <span aria-hidden="true">▶️</span>
                Google Play
              </a>

              {/* Web signup */}
              <a
                href="/signup"
                onClick={() => trackEvent(Events.FINAL_CTA_CLICK, { location: 'final_cta' })}
                className="inline-flex items-center justify-center gap-2 bg-[#1d1d1f] text-white px-6 py-4 rounded-full font-semibold hover:bg-black/80 active:scale-95 transition-all"
              >
                Get Started Free →
              </a>
            </div>

            <p className="mt-6 text-white/55 text-sm">
              No credit card needed &nbsp;·&nbsp; First 3 deliveries fee-free{' '}
              <span aria-hidden="true">🎉</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
