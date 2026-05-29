import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { trackEvent, Events } from '../utils/analytics'

const FAQS = [
  {
    q: 'How fast is delivery?',
    a: 'Most orders are delivered in 25–35 minutes depending on your location and the restaurant\'s prep time. You\'ll see a live estimated delivery time in the app before you place your order — no surprises.',
  },
  {
    q: 'Are there delivery fees?',
    a: 'Delivery fees vary by restaurant and distance, typically between £0.99 and £2.99. Your first 3 orders are completely fee-free! We\'re always transparent — the full cost breakdown is shown at checkout before you confirm.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We currently serve 50+ cities across the UK and Ireland. Just type your postcode in the app to instantly see which restaurants deliver to your exact address. We\'re expanding fast — check back if your area isn\'t live yet!',
  },
  {
    q: 'Which devices are supported?',
    a: 'FeedMe works on iOS 15+ and Android 9+. We also have a fully responsive web app at feedme.app for any modern browser — no download required.',
  },
  {
    q: 'How do I track my order?',
    a: 'Once a restaurant confirms your order, you get a live tracking screen with a real-time map showing your courier\'s exact location. You\'ll also receive push notifications when your order is confirmed, picked up, and nearly at your door.',
  },
  {
    q: "What if there's an issue with my order?",
    a: 'Our support team is available 7 days a week. In the app, go to Order History → tap the order → "Get Help". Most issues are resolved in minutes. We offer refunds or credits for any genuine problems — no fuss.',
  },
]

function FAQItem({ q, a, index, inView }) {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    const next = !open
    setOpen(next)
    if (next) trackEvent(Events.FAQ_OPEN, { question: q })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-[#1d1d1f]/8 last:border-none"
    >
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="w-full flex justify-between items-center py-5 text-left gap-4 group"
      >
        <span className="text-[#1d1d1f] font-semibold text-lg group-hover:text-[#E8001D] transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#E8001D] text-2xl font-light shrink-0 leading-none"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#1d1d1f]/60 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="py-24 bg-[#f5f5f7]" ref={ref} aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-[#E8001D] font-semibold text-sm uppercase tracking-widest mb-3">
            Got questions?
          </p>
          <h2 id="faq-heading" className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] mb-4">
            We've got answers{' '}
            <span aria-hidden="true">🙋</span>
          </h2>
          <p className="text-xl text-[#1d1d1f]/50">
            Everything you need to know about FeedMe.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="bg-white rounded-3xl px-8 py-2 shadow-sm" role="list">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
