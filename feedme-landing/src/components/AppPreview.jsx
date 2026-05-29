import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SCREENS = [
  { label: 'Home Feed',     gradient: 'from-[#E8001D] to-[#FF2D44]', emoji: '🏠', offset: 40 },
  { label: 'Live Tracking', gradient: 'from-blue-500 to-cyan-400',   emoji: '📍', offset: 0  },
  { label: 'Order History', gradient: 'from-violet-500 to-pink-500', emoji: '📋', offset: 70 },
]

const BULLETS = [
  '🏪 Personalised restaurant recommendations',
  '💳 Secure one-tap checkout',
  '🗺️ Real-time GPS courier tracking',
  '🔔 Smart delivery push notifications',
]

export default function AppPreview() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-gradient-to-br from-[#FFF0F1] to-white" ref={ref} aria-labelledby="preview-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#E8001D] font-semibold text-sm uppercase tracking-widest mb-3">
              See it in action
            </p>
            <h2 id="preview-heading" className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] mb-6">
              Your whole food journey in one app{' '}
              <span aria-hidden="true">📱</span>
            </h2>
            <p className="text-xl text-[#1d1d1f]/50 mb-8 leading-relaxed">
              Browse, order, and track — all from a clean, intuitive interface that gets out of the way
              and lets you focus on what matters: eating.
            </p>
            <ul className="space-y-4">
              {BULLETS.map(b => (
                <li key={b} className="flex items-center gap-3 text-[#1d1d1f]/70 font-medium">
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Phone screens */}
          <div
            className="flex justify-center items-end gap-4"
            aria-label="App screenshots: home feed, live tracking, order history"
          >
            {SCREENS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                style={{ marginBottom: s.offset }}
              >
                <div className="w-32 h-64 bg-[#1d1d1f] rounded-[32px] shadow-xl overflow-hidden">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${s.gradient} flex flex-col items-center justify-center gap-3`}
                    aria-label={s.label}
                  >
                    <span className="text-4xl" aria-hidden="true">{s.emoji}</span>
                    <span className="text-white text-xs font-bold bg-white/20 px-3 py-1 rounded-full">
                      {s.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
