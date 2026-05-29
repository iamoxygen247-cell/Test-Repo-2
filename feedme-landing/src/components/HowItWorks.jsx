import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STEPS = [
  {
    n: '1',
    emoji: '🔍',
    title: 'Browse Restaurants',
    description:
      'Explore 500+ local restaurants — filter by cuisine, rating, price, or how fast they can get food to your door.',
  },
  {
    n: '2',
    emoji: '📦',
    title: 'Place Your Order',
    description:
      'Add items, customise your meal, and check out in seconds. Saved cards and addresses mean zero friction.',
  },
  {
    n: '3',
    emoji: '🚴',
    title: 'Track Live Delivery',
    description:
      'Watch your courier on the map in real time. Push notifications keep you in the loop at every step.',
  },
]

export default function HowItWorks() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="how-it-works"
      className="py-24 bg-[#1d1d1f] relative overflow-hidden"
      ref={ref}
      aria-labelledby="hiw-heading"
    >
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E8001D]/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#E8001D]/5  blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-[#E8001D] font-semibold text-sm uppercase tracking-widest mb-3">
            Simple as 1-2-3
          </p>
          <h2 id="hiw-heading" className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            From craving to couch in minutes
          </h2>
          <p className="text-xl text-white/50 max-w-xl mx-auto">
            No complicated steps. No guesswork. Just great food, fast.
          </p>
        </motion.div>

        {/* Steps */}
        <ol className="grid md:grid-cols-3 gap-10 list-none p-0 relative">
          {/* Dashed connector line (desktop only) */}
          <li
            aria-hidden="true"
            className="hidden md:block absolute top-11 left-[calc(33%+1rem)] right-[calc(33%+1rem)] h-px border-t border-dashed border-[#E8001D]/30 pointer-events-none"
          />

          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div
                  className="w-24 h-24 rounded-3xl bg-white/10 flex items-center justify-center text-4xl mx-auto"
                  aria-hidden="true"
                >
                  {step.emoji}
                </div>
                <span
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#E8001D] text-white text-xs font-bold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {step.n}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                <span className="sr-only">Step {step.n}: </span>
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
