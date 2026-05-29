import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { trackEvent, Events } from '../utils/analytics'

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    role: 'Busy mum of two',
    avatar: '👩',
    rating: 5,
    quote:
      "FeedMe has completely changed our dinner routine. I can order for the whole family in under a minute and track everything live. The reorder feature alone is worth it — we use it every Friday night! 🙌",
    highlight: 'Reorder feature',
  },
  {
    name: 'James K.',
    role: 'Software engineer',
    avatar: '👨🏽‍💻',
    rating: 5,
    quote:
      "Live tracking is genuinely insane. I open the app, place my order, and watch the little courier icon move through the streets in real time. I've never had a cold meal delivered. That says everything.",
    highlight: 'Live tracking',
  },
  {
    name: 'Priya S.',
    role: 'Freelance designer',
    avatar: '👩🏽‍🎨',
    rating: 5,
    quote:
      "I work long hours and FeedMe is a lifesaver. The app is beautiful, checkout is buttery smooth, and customer support actually responds fast. Five stars isn't enough. 🌟",
    highlight: 'Smooth checkout',
  },
]

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 mb-4" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="text-[#E8001D] text-lg" aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (inView) trackEvent(Events.TESTIMONIAL_VIEW)
  }, [inView])

  return (
    <section
      id="testimonials"
      className="py-24 bg-white"
      ref={ref}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-[#E8001D] font-semibold text-sm uppercase tracking-widest mb-3">
            Real people, real meals
          </p>
          <h2 id="testimonials-heading" className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] mb-4">
            Don't just take our word for it{' '}
            <span aria-hidden="true">😍</span>
          </h2>
          <p className="text-xl text-[#1d1d1f]/50 max-w-xl mx-auto">
            120,000+ customers have made FeedMe their go-to food app.
          </p>
        </motion.div>

        {/* Cards */}
        <ul className="grid md:grid-cols-3 gap-8 list-none p-0">
          {TESTIMONIALS.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#f5f5f7] rounded-3xl p-8 relative flex flex-col"
            >
              {/* Decorative quote mark */}
              <span className="text-7xl text-[#E8001D]/15 font-serif leading-none absolute top-3 left-5 select-none" aria-hidden="true">"</span>

              <Stars n={t.rating} />

              <blockquote className="text-[#1d1d1f]/70 leading-relaxed mb-6 relative z-10 flex-1">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E8001D]/10 flex items-center justify-center text-2xl" aria-hidden="true">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-[#1d1d1f]">{t.name}</p>
                  <p className="text-sm text-[#1d1d1f]/50">{t.role}</p>
                </div>
              </div>

              <span className="mt-4 self-start text-xs font-semibold text-[#E8001D] bg-[#E8001D]/10 px-3 py-1 rounded-full">
                Loves: {t.highlight}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
