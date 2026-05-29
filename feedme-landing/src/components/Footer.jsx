const LINKS = {
  Product:  ['Features', 'How It Works', 'Pricing', 'Changelog'],
  Company:  ['About Us', 'Blog', 'Careers', 'Press'],
  Support:  ['Help Centre', 'Contact Us', 'Safety', 'Accessibility'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

const SOCIALS = [
  { label: 'Twitter / X', symbol: '𝕏',  href: '#' },
  { label: 'Instagram',   symbol: '📸', href: '#' },
  { label: 'TikTok',      symbol: '🎵', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1d1d1f] text-white/55" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4" aria-label="FeedMe home">
              <span className="text-2xl" aria-hidden="true">🍔</span>
              <span className="font-bold text-xl text-white">
                Feed<span className="text-[#E8001D]">Me</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Fast, reliable food delivery from your favourite local restaurants.
            </p>

            {/* Compact app badges */}
            <nav aria-label="App downloads" className="flex flex-col gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2.5 rounded-xl transition-colors"
                aria-label="Download on the App Store"
              >
                <span aria-hidden="true">🍎</span> App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2.5 rounded-xl transition-colors"
                aria-label="Get it on Google Play"
              >
                <span aria-hidden="true">▶️</span> Google Play
              </a>
            </nav>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <nav key={heading} aria-label={`${heading} links`}>
              <h2 className="text-white font-semibold text-sm mb-4">{heading}</h2>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {year} FeedMe, Inc. All rights reserved.</p>

          <div className="flex gap-3">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={`Follow FeedMe on ${s.label}`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-sm"
              >
                {s.symbol}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
