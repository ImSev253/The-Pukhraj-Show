import { motion } from 'framer-motion'
import {
  FaAmazon,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaMusic,
  FaPodcast,
  FaSpotify,
  FaYoutube,
} from 'react-icons/fa'

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionUl = motion.ul
const MotionA = motion.a

const platforms = [
  {
    id: 'youtube',
    name: 'YouTube',
    href: 'https://example.com/the-pukhraj-show/youtube',
    icon: FaYoutube,
  },
  {
    id: 'instagram-1',
    name: 'Instagram',
    href: 'https://example.com/the-pukhraj-show/instagram-1',
    icon: FaInstagram,
  },
  {
    id: 'instagram-2',
    name: 'Instagram',
    href: 'https://example.com/the-pukhraj-show/instagram-2',
    icon: FaInstagram,
  },
  {
    id: 'facebook-1',
    name: 'Facebook',
    href: 'https://example.com/the-pukhraj-show/facebook-1',
    icon: FaFacebook,
  },
  {
    id: 'facebook-2',
    name: 'Facebook',
    href: 'https://example.com/the-pukhraj-show/facebook-2',
    icon: FaFacebook,
  },
  {
    id: 'spotify',
    name: 'Spotify',
    href: 'https://example.com/the-pukhraj-show/spotify',
    icon: FaSpotify,
  },
  {
    id: 'jiosaavn',
    name: 'JioSaavn',
    href: 'https://example.com/the-pukhraj-show/jiosaavn',
    icon: FaMusic,
  },
  {
    id: 'apple-podcasts',
    name: 'Apple Podcasts',
    href: 'https://example.com/the-pukhraj-show/apple-podcasts',
    icon: FaPodcast,
  },
  {
    id: 'amazon-music',
    name: 'Amazon Music',
    href: 'https://example.com/the-pukhraj-show/amazon-music',
    icon: FaAmazon,
  },
  {
    id: 'website',
    name: 'Self Website',
    href: 'https://example.com/the-pukhraj-show',
    icon: FaGlobe,
  },
]

const sectionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

export default function HandlesPage() {
  return (
    <MotionSection
      id='handles'
      className='relative z-10 min-h-screen pt-28 pb-20'
      variants={sectionVariants}
      initial='hidden'
      animate='show'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <MotionDiv variants={itemVariants} className='mb-12 text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-neo-secondary/80'>
            Handles
          </p>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
            <span className='gradient-text'>Find us everywhere</span>
          </h1>
          <p className='mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/70'>
            Explore official platforms and open each profile in a new tab.
          </p>
        </MotionDiv>

        <MotionUl
          variants={sectionVariants}
          className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
        >
          {platforms.map((platform) => {
            const Icon = platform.icon

            return (
              <motion.li key={platform.id} variants={itemVariants} className='h-full'>
                <MotionA
                  href={platform.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`${platform.name} opens in a new tab`}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className='group flex h-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-md transition hover:border-neo-secondary/30 hover:bg-white/10'
                >
                  <div className='flex min-w-0 items-center gap-4'>
                    <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-neo-secondary'>
                      <Icon className='h-5 w-5' />
                    </span>
                    <span className='min-w-0'>
                      <span className='block truncate text-lg font-semibold text-slate-900 dark:text-white'>
                        {platform.name}
                      </span>
                      <span className='block text-sm text-slate-600 dark:text-white/55'>
                        Open official link
                      </span>
                    </span>
                  </div>
                  <span className='text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-white/35 transition group-hover:text-neo-secondary'>
                    Link
                  </span>
                </MotionA>
              </motion.li>
            )
          })}
        </MotionUl>
      </div>
    </MotionSection>
  )
}
