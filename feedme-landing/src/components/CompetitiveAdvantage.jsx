import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ROWS = [
  {
    feature: 'First orders fee-free',
    feedme:   { text: '3 orders free 🎉',   good: true  },
    doordash: { text: 'None',               good: false },
    ubereats: { text: 'None',               good: false },
  },
  {
    feature: 'Average delivery time',
    feedme:   { text: '~28 minutes ⚡',     good: true  },
    doordash: { text: '~40 minutes',        good: false },
    ubereats: { text: '~38 minutes',        good: false },
  },
  {
    feature: 'Delivery fee range',
    feedme:   { text: '£0.99 – £2.99',      good: true  },
    doordash: { text: '£1.99 – £5.99',      good: false },
    ubereats: { text: '£2.49 – £4.99',      good: false },
  },
  {
    feature: 'Surge / dynamic pricing',
    feedme:   { text: 'Never',              good: true  },
    doordash: { text: 'Yes',               good: false },
    ubereats: { text: 'Yes',               good: false },
  },
  {
    feature: 'Local & independent restaurants',
    feedme:   { text: '500+ local spots',   good: true  },
    doordash: { text: 'Mostly chains',      good: null  },
    ubereats: { text: 'Mostly chains',      good: null  },
  },
  {
    feature: 'Subscription required',
    feedme:   { text: 'Never needed',       good: true  },
    doordash: { text: 'DashPass for perks', good: null  },
    ubereats: { text: 'Uber One for perks', good: null  },
  },
  {
    feature: 'Hidden service fees',
    feedme:   { text: 'Zero hidden fees',   good: true  },
    doordash: { text: 'Service fee added',  good: false },
    ubereats: { text: 'Service fee added',  good: false },
  },
  {
    feature: 'Customer support',
    feedme:   { text: '7 days a week',      good: true  },
    doordash: { text: 'Limited hours',      good: null  },
    ubereats: { text: 'Limited hours',      good: null  },
  },
]

const WINS = [
  { stat: '30%',   label: 'cheaper average fees than DoorDash' },
  { stat: '12 min', label: 'faster delivery than the competition' },
  { stat: '3×',    label: 'more local restaurants in your area' },
]

function CellIcon({ good }) {
  if (good === true)
    return <span className="inline-flex w-6 h-6 rounded-full bg-green-100 text-green-600 items-center justify-center text-sm font-bold shrink-0" aria-hidden="true">✓</span>
  if (good === false)
    return <span className="inline-flex w-6 h-6 rounded-full bg-red-100 text-red-500 items-center justify-center text-sm font-bold shrink-0" aria-hidden="true">✗</span>
  return <span className="inline-flex w-6 h-6 rounded-full bg-gray-100 text-gray-400 items-center justify-center text-xs font-bold shrink-0" aria-hidden="true">~</span>
}

export default function CompetitiveAdvantage() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-24 bg-[#1d1d1f] relative overflow-hidden"
      aria-labelledby="compare-heading"
    >
      {/* Subtle red glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-[#E8001D]/15 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-[#E8001D] font-semibold text-sm uppercase tracking-widest mb-3">
            The smarter choice
          </p>
          <h2 id="compare-heading" className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Why choose FeedMe over the rest?
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            We built FeedMe to fix everything that frustrates you about other delivery apps —
            the fees, the waits, the nasty surprises at checkout.
          </p>
        </motion.div>

        {/* Quick-win stat row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          {WINS.map((w, i) => (
            <div
              key={w.label}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-center"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-[#E8001D] mb-1">{w.stat}</p>
              <p className="text-white/50 text-sm leading-snug">{w.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl overflow-hidden border border-white/10"
          role="region"
          aria-label="Feature comparison table"
        >
          {/* Table header */}
          <div className="grid grid-cols-4 text-sm font-bold">
            <div className="bg-white/5 px-5 py-4 text-white/40 uppercase tracking-wider text-xs">
              Feature
            </div>
            {/* FeedMe column — highlighted */}
            <div className="bg-[#E8001D] px-5 py-4 text-white text-center flex items-center justify-center gap-2">
              <span aria-hidden="true">🍔</span>
              <span>FeedMe</span>
              <span className="text-white/70 text-xs font-normal bg-white/20 px-2 py-0.5 rounded-full">us</span>
            </div>
            <div className="bg-white/5 px-5 py-4 text-white/50 text-center text-xs uppercase tracking-wider flex items-center justify-center">
              DoorDash
            </div>
            <div className="bg-white/5 px-5 py-4 text-white/50 text-center text-xs uppercase tracking-wider flex items-center justify-center">
              Uber Eats
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 text-sm border-t border-white/8 ${
                i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'
              }`}
            >
              {/* Feature label */}
              <div className="px-5 py-4 text-white/70 font-medium flex items-center">
                {row.feature}
              </div>

              {/* FeedMe cell — highlighted */}
              <div className="px-5 py-4 bg-[#E8001D]/10 border-x border-[#E8001D]/20 flex items-center gap-2 justify-center font-semibold text-white">
                <CellIcon good={row.feedme.good} />
                <span className="text-center text-xs sm:text-sm leading-tight">{row.feedme.text}</span>
              </div>

              {/* DoorDash cell */}
              <div className="px-5 py-4 flex items-center gap-2 justify-center text-white/45 text-xs sm:text-sm text-center leading-tight">
                <CellIcon good={row.doordash.good} />
                {row.doordash.text}
              </div>

              {/* Uber Eats cell */}
              <div className="px-5 py-4 flex items-center gap-2 justify-center text-white/45 text-xs sm:text-sm text-center leading-tight">
                <CellIcon good={row.ubereats.good} />
                {row.ubereats.text}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-white/40 text-sm mt-8"
        >
          Still not convinced?{' '}
          <a href="#download" className="text-[#E8001D] font-semibold hover:underline">
            Try your first 3 orders free — no card needed.
          </a>
        </motion.p>
      </div>
    </section>
  )
}
