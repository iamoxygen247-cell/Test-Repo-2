import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FEATURES = [
  {
    emoji: '⚡',
    title: 'Lightning Fast Delivery',
    description:
      'Most orders delivered in under 30 minutes. We partner with the fastest local couriers so your food arrives hot, every time.',
    bg: 'bg-red-50',
  },
  {
    emoji: '📍',
    title: 'Live Order Tracking',
    description:
      'Watch your delivery move in real time on a live map. Know exactly when your food will arrive — down to the minute.',
    bg: 'bg-sky-50',
  },
  {
    emoji: '🛒',
    title: 'One-Tap Checkout',
    description:
      'Save your payment details and delivery address once. Checkout in seconds — fewer taps, more eating.',
    bg: 'bg-emerald-50',
  },
  {
    emoji: '🔄',
    title: 'Reorder in Seconds',
    description:
      'Loved last night\'s order? Reorder your favourites with a single tap. Your food history is always right there.',
    bg: 'bg-violet-50',
  },
]

export default function Features() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" className="py-24 bg-white" ref={ref} aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-[#E8001D] font-semibold text-sm uppercase tracking-widest mb-3">
            Why FeedMe
          </p>
          <h2 id="features-heading" className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] mb-4">
            Built for the way you eat{' '}
            <span aria-hidden="true">🍽️</span>
          </h2>
          <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
            Every feature designed to get great food to you faster, easier, and more reliably.
          </p>
        </motion.div>

        {/* Cards grid */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0">
          {FEATURES.map((f, i) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`${f.bg} rounded-3xl p-8`}
            >
              <span className="text-5xl block mb-5" aria-hidden="true">{f.emoji}</span>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">{f.title}</h3>
              <p className="text-[#1d1d1f]/60 text-sm leading-relaxed">{f.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
