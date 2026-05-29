import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: '120K+',   label: 'Happy customers'     },
  { value: '4.8 ★',  label: 'App Store rating'     },
  { value: '500+',   label: 'Restaurant partners'  },
  { value: '~28 min', label: 'Avg. delivery time'  },
]

const RESTAURANTS = [
  { name: 'The Burger Co.',  emoji: '🍔', bg: 'bg-amber-100'  },
  { name: 'Sakura Sushi',    emoji: '🍣', bg: 'bg-pink-100'   },
  { name: 'Mama Pasta',      emoji: '🍝', bg: 'bg-yellow-100' },
  { name: 'Taco Fiesta',     emoji: '🌮', bg: 'bg-orange-100' },
  { name: 'Green Bowl',      emoji: '🥗', bg: 'bg-green-100'  },
  { name: 'Slice & Dice',    emoji: '🍕', bg: 'bg-red-100'    },
]

export default function SocialProof() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 bg-[#f5f5f7]" ref={ref} aria-label="Social proof">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats */}
        <dl className="flex flex-wrap justify-center gap-10 sm:gap-16 mb-14 text-center">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-4xl font-extrabold text-[#E8001D] mb-1">{s.value}</dd>
              <p className="text-sm text-[#1d1d1f]/55 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </dl>

        {/* Partner logos */}
        <p className="text-center text-xs font-semibold text-[#1d1d1f]/35 uppercase tracking-[0.18em] mb-7">
          Partnered with your favourite local spots
        </p>
        <ul
          className="flex flex-wrap justify-center gap-3"
          aria-label="Partner restaurants"
        >
          {RESTAURANTS.map((r, i) => (
            <motion.li
              key={r.name}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              className={`${r.bg} flex items-center gap-2 px-5 py-3 rounded-2xl`}
            >
              <span className="text-xl" aria-hidden="true">{r.emoji}</span>
              <span className="font-semibold text-[#1d1d1f] text-sm">{r.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
