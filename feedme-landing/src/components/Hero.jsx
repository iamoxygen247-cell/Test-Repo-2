import { motion } from 'framer-motion'
import { trackEvent, Events } from '../utils/analytics'

/* ---------- sub-components ---------- */

function AppStoreBadge() {
  return (
    <a
      href="#"
      onClick={() => trackEvent(Events.APP_STORE_CLICK, { location: 'hero' })}
      aria-label="Download FeedMe on the App Store"
      className="inline-flex items-center gap-3 bg-[#1d1d1f] text-white px-5 py-3 rounded-xl hover:bg-black/80 active:scale-95 transition-all"
    >
      {/* Apple logo path */}
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[10px] opacity-70 uppercase tracking-wide">Download on the</div>
        <div className="text-sm font-bold">App Store</div>
      </div>
    </a>
  )
}

function PlayStoreBadge() {
  return (
    <a
      href="#"
      onClick={() => trackEvent(Events.PLAY_STORE_CLICK, { location: 'hero' })}
      aria-label="Get FeedMe on Google Play"
      className="inline-flex items-center gap-3 bg-[#1d1d1f] text-white px-5 py-3 rounded-xl hover:bg-black/80 active:scale-95 transition-all"
    >
      {/* Stylised Play triangle */}
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[10px] opacity-70 uppercase tracking-wide">Get it on</div>
        <div className="text-sm font-bold">Google Play</div>
      </div>
    </a>
  )
}

/* ---------- hero mockup: styled CSS phone ---------- */

function PhoneMockup() {
  return (
    <div className="relative w-72 h-[580px]">
      {/* Outer phone shell */}
      <div className="absolute inset-0 bg-[#1d1d1f] rounded-[48px] shadow-2xl shadow-black/30">
        {/* Screen area */}
        <div className="absolute inset-[6px] rounded-[44px] overflow-hidden bg-gradient-to-br from-[#E8001D] to-[#FF2D44]">

          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-5 pb-1 text-white">
            <span className="text-xs font-semibold">9:41</span>
            <div className="w-20 h-5 bg-black/40 rounded-full" aria-hidden="true" />
            <div className="flex items-center gap-1" aria-hidden="true">
              <div className="w-4 h-2.5 border border-white/60 rounded-sm">
                <div className="h-full w-3/4 bg-white/60 rounded-sm" />
              </div>
            </div>
          </div>

          {/* App UI mockup */}
          <div className="px-5 pt-3">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-white/70 text-xs">Good evening 👋</p>
                <p className="text-white font-extrabold text-lg leading-tight">What's for dinner?</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg" aria-hidden="true">
                😊
              </div>
            </div>

            {/* Search bar */}
            <div className="bg-white/20 backdrop-blur rounded-2xl px-4 py-3 flex items-center gap-2 mb-4">
              <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <span className="text-white/70 text-sm">Search restaurants…</span>
            </div>

            {/* Category pills */}
            <div className="flex gap-2 mb-5 overflow-hidden" aria-hidden="true">
              {['🍕 Pizza', '🍔 Burgers', '🍣 Sushi', '🌮 Mexican'].map(c => (
                <span key={c} className="shrink-0 bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  {c}
                </span>
              ))}
            </div>

            {/* Restaurant cards */}
            {[
              { name: 'The Burger Joint', time: '22 min', rating: '4.9', emoji: '🍔', grad: 'from-amber-400 to-orange-500' },
              { name: 'Sakura Sushi Bar', time: '35 min', rating: '4.8', emoji: '🍣', grad: 'from-rose-400 to-pink-500' },
            ].map(r => (
              <div key={r.name} className="bg-white/15 backdrop-blur rounded-2xl overflow-hidden mb-3" aria-hidden="true">
                <div className={`h-16 bg-gradient-to-r ${r.grad} flex items-center justify-center text-3xl`}>
                  {r.emoji}
                </div>
                <div className="px-3 py-2">
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-white/60 text-xs">⏱ {r.time} · ⭐ {r.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" aria-hidden="true" />
      </div>

      {/* Floating delivery-time badge */}
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
        className="absolute -right-10 top-1/4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-2xl">⏱</span>
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide">Delivery in</p>
          <p className="font-extrabold text-[#1d1d1f] text-sm">28 minutes</p>
        </div>
      </motion.div>

      {/* Floating order-placed badge */}
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
        className="absolute -left-10 bottom-1/4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-2xl">🎉</span>
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide">Order placed!</p>
          <p className="font-extrabold text-green-500 text-sm">On its way</p>
        </div>
      </motion.div>
    </div>
  )
}

/* ---------- main Hero ---------- */

const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 24 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF0F1] via-white to-[#FFF3F4] -z-10" />
      <div className="absolute top-10 right-0  w-[480px] h-[480px] rounded-full bg-[#E8001D]/10 blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-72  h-72  rounded-full bg-[#E8001D]/5  blur-3xl -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Copy ── */}
          <div>
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-[#E8001D]/10 text-[#E8001D] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span aria-hidden="true">🔥</span>
              Now serving 50+ cities
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              id="hero-heading"
              className="text-5xl sm:text-6xl font-extrabold text-[#1d1d1f] leading-[1.08] tracking-tight mb-6"
            >
              Food That Moves{' '}
              <span className="text-[#E8001D]">at Your Speed</span>{' '}
              <span aria-hidden="true">🚀</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="text-xl text-[#1d1d1f]/60 leading-relaxed mb-8 max-w-lg">
              Order from hundreds of local restaurants. Track your delivery in real time.
              Arrive hot, fresh, and exactly when you need it.
            </motion.p>

            {/* ── Triple CTA ── */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap gap-3 items-center mb-8"
              id="download"
            >
              <AppStoreBadge />
              <PlayStoreBadge />

              <a
                href="/signup"
                onClick={() => trackEvent(Events.SIGNUP_CLICK, { location: 'hero' })}
                className="inline-flex items-center gap-2 bg-[#E8001D] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C2001A] active:scale-95 transition-all"
              >
                Get Started Free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            <motion.p {...fadeUp(0.4)} className="text-sm text-[#1d1d1f]/40">
              <span aria-label="5 stars">⭐⭐⭐⭐⭐</span>{' '}
              Loved by <strong className="text-[#1d1d1f]/60">120,000+</strong> hungry people
            </motion.p>
          </div>

          {/* ── Phone mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
