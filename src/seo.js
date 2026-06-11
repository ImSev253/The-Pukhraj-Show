const SITE_URL = 'https://thepukhrajshow.in'
const DEFAULT_IMAGE = `${SITE_URL}/TPS.png`

const HOME_TITLE = 'The Pukhraj Show (TPS Hindi) | Hindi Podcast India'
const HOME_DESCRIPTION =
  'The Pukhraj Show (TPS Hindi) features inspiring conversations with entrepreneurs, politicians, influencers, artists and changemakers from Rajasthan and India. Explore self-improvement, business, spirituality, finance, technology, health, history and success stories in Hindi.'
const HOME_KEYWORDS =
  'The Pukhraj Show, TPS Hindi, Hindi Podcast, Best Hindi Podcast, Indian Podcast, Rajasthan Podcast, Hindi Interview Podcast, Business Podcast Hindi, Self Improvement Podcast Hindi, Spirituality Podcast Hindi, Success Stories Podcast'

const HOME_ALIASES = new Set(['/', '/guest', '/podcast', '/about', '/contact'])

const SOCIAL_URLS = [
  'https://www.youtube.com/@ThePukhrajShow/featured',
  'https://www.instagram.com/thepukhrajshow/',
  'https://www.instagram.com/pukhraj_deora/?hl=en',
  'https://www.facebook.com/share/1CzNrye9hS/',
  'https://www.facebook.com/share/1L6BLdMyrM/',
  'https://open.spotify.com/show/6kGDen9mKTebLVosAzsMRh?si=17cda88107334b25',
  'https://www.jiosaavn.com/shows/the-pukhraj-show/2/L1nVZXYpTYw_',
  'https://podcasts.apple.com/us/podcast/the-pukhraj-show/id1894464546',
  'https://amzn.asia/d/08c7QVTz',
]

const PODCAST_SERIES_JSON = {
  '@context': 'https://schema.org',
  '@type': 'PodcastSeries',
  name: 'The Pukhraj Show',
  alternateName: 'TPS Hindi',
  description:
    'Hindi podcast featuring conversations with entrepreneurs, influencers, politicians, artists and changemakers.',
  inLanguage: 'hi',
  url: SITE_URL,
  creator: {
    '@type': 'Person',
    name: 'Pukhraj Deora',
  },
}

const ORGANIZATION_JSON = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Pukhraj Show',
  founder: {
    '@type': 'Person',
    name: 'Pukhraj Deora',
  },
  url: SITE_URL,
  sameAs: SOCIAL_URLS,
}

const HANDLES_SEO = {
  title: 'The Pukhraj Show Handles | Official Social Links',
  description:
    'Find the official social links and listening platforms for The Pukhraj Show across YouTube, Instagram, Facebook, Spotify, JioSaavn, Apple Podcasts and Amazon Music.',
  canonical: `${SITE_URL}/handles`,
  keywords:
    'The Pukhraj Show, The Pukhraj Show Handles, Official Social Links, YouTube, Instagram, Facebook, Spotify, JioSaavn, Apple Podcasts, Amazon Music',
}

function normalizePathname(pathname) {
  const cleaned = String(pathname || '/').replace(/\/+$/, '')
  return cleaned || '/'
}

function getSeoConfig(pathname) {
  const normalizedPath = normalizePathname(pathname)

  if (normalizedPath === '/handles') {
    return {
      ...HANDLES_SEO,
      pathname: normalizedPath,
      ogUrl: `${SITE_URL}/handles`,
      keywords: '',
      shouldUseHomeCanonical: false,
    }
  }

  return {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    canonical: `${SITE_URL}/`,
    keywords: HOME_KEYWORDS,
    pathname: normalizedPath,
    ogUrl: `${SITE_URL}/`,
    shouldUseHomeCanonical: HOME_ALIASES.has(normalizedPath),
  }
}

function ensureMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => {
      if (value != null && key !== 'content') {
        element.setAttribute(key, value)
      }
    })
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value == null) return
    element.setAttribute(key, value)
  })

  return element
}

function ensureLink(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value == null) return
    element.setAttribute(key, value)
  })

  return element
}

function ensureJsonLd(id, value) {
  let element = document.head.querySelector(`script#seo-${id}`)

  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.id = `seo-${id}`
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(value)
}

export function updateSeo(pathname) {
  if (typeof document === 'undefined') return

  const seo = getSeoConfig(pathname)

  document.title = seo.title

  ensureMeta('meta[name="description"]', {
    name: 'description',
    content: seo.description,
  })

  ensureMeta('meta[name="keywords"]', {
    name: 'keywords',
    content: seo.keywords || HOME_KEYWORDS,
  })

  ensureMeta('meta[name="robots"]', {
    name: 'robots',
    content: 'index,follow,max-image-preview:large',
  })

  ensureMeta('meta[property="og:title"]', {
    property: 'og:title',
    content: seo.title,
  })

  ensureMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: seo.description,
  })

  ensureMeta('meta[property="og:type"]', {
    property: 'og:type',
    content: 'website',
  })

  ensureMeta('meta[property="og:url"]', {
    property: 'og:url',
    content: seo.ogUrl,
  })

  ensureMeta('meta[property="og:image"]', {
    property: 'og:image',
    content: DEFAULT_IMAGE,
  })

  ensureMeta('meta[property="og:image:alt"]', {
    property: 'og:image:alt',
    content: 'The Pukhraj Show podcast branding',
  })

  ensureMeta('meta[property="og:site_name"]', {
    property: 'og:site_name',
    content: 'The Pukhraj Show',
  })

  ensureMeta('meta[name="twitter:card"]', {
    name: 'twitter:card',
    content: 'summary_large_image',
  })

  ensureMeta('meta[name="twitter:title"]', {
    name: 'twitter:title',
    content: seo.title,
  })

  ensureMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: seo.description,
  })

  ensureMeta('meta[name="twitter:image"]', {
    name: 'twitter:image',
    content: DEFAULT_IMAGE,
  })

  ensureMeta('meta[name="twitter:image:alt"]', {
    name: 'twitter:image:alt',
    content: 'The Pukhraj Show podcast branding',
  })

  ensureLink('link[rel="canonical"]', {
    rel: 'canonical',
    href: seo.shouldUseHomeCanonical ? `${SITE_URL}/` : seo.canonical,
  })

  ensureJsonLd('podcast-series', PODCAST_SERIES_JSON)
  ensureJsonLd('organization', ORGANIZATION_JSON)
}
