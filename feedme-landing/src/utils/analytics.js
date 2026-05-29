/**
 * analytics.js — centralised event tracking for FeedMe landing page.
 *
 * All CTA clicks and key interactions flow through trackEvent() so you only
 * need to configure one file when wiring up GA4, Mixpanel, or PostHog.
 *
 * Setup:
 *  - GA4:     Add your gtag snippet to index.html, uncomment the block below.
 *  - Mixpanel: `npm install mixpanel-browser`, init in main.jsx, done.
 *  - PostHog:  `npm install posthog-js`, init in main.jsx, done.
 */

/**
 * Fire a named analytics event with optional properties.
 * @param {string} name  - Event name (use Events.* constants below)
 * @param {Object} props - Freeform key/value metadata
 */
export function trackEvent(name, props = {}) {
  // GA4
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, props)
  }

  // Mixpanel
  if (typeof window.mixpanel !== 'undefined') {
    window.mixpanel.track(name, props)
  }

  // PostHog
  if (typeof window.posthog !== 'undefined') {
    window.posthog.capture(name, props)
  }

  // Dev console output
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log(`[Analytics] %c${name}`, 'color:#E8001D;font-weight:bold', props)
  }
}

/**
 * Pre-defined event names — import these in components so you get autocomplete
 * and a single source of truth for the event catalogue.
 */
export const Events = {
  // CTAs
  APP_STORE_CLICK:    'app_store_click',
  PLAY_STORE_CLICK:   'play_store_click',
  SIGNUP_CLICK:       'signup_click',
  // Nav
  NAV_CTA_CLICK:      'nav_cta_click',
  NAV_LINK_CLICK:     'nav_link_click',
  // Sections
  HERO_CTA_CLICK:     'hero_cta_click',
  FINAL_CTA_CLICK:    'final_cta_click',
  // Engagement
  FAQ_OPEN:           'faq_question_opened',
  TESTIMONIAL_VIEW:   'testimonial_section_viewed',
}
