import { motion } from 'framer-motion'
import { FiArrowRight, FiMic, FiPlay, FiUsers } from 'react-icons/fi'
import pukhsa from '../assets/pukhsa.png'

const MotionDiv = motion.div
const MotionA = motion.a
const MotionSection = motion.section

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const highlights = [
  {
    icon: FiMic,
    title: 'Hosted by Pukhraj Deora',
    text: 'A warm, conversational podcast channel built around real ideas and real voices.',
  },
  {
    icon: FiUsers,
    title: 'Guest-driven episodes',
    text: 'Stories, experiences, and perspectives from people with something worth hearing.',
  },
  {
    icon: FiPlay,
    title: 'Thoughtful format',
    text: 'Simple, clear, and easy to scan while still feeling personal and premium.',
  },
]

export default function About() {
  return (
    <MotionSection
      id='about'
      className='relative z-10 py-20'
      variants={containerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <MotionDiv
          variants={fadeUp}
          className='mb-12 text-center'
        >
          <motion.p
            variants={fadeUp}
            className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-neo-secondary/80'
          >
            About the channel
          </motion.p>
          <motion.h2 variants={fadeUp} className='text-3xl sm:text-4xl font-bold'>
            <span className='gradient-text'>The Pukhraj Show</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className='mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/70'
          >
         This Podcast Self-Improvement, Health & Wellness, Spirituality, History & Culture, Science,
          Technology, Entrepreneurship, Finance, Geopolitics, Global Affairs, Law, Entertainment, Relationships,
           Lifestyle, Sports, Adventure, Army and Success Stories.      It covers a wide range of topics such as.
          </motion.p>
        </MotionDiv>

        <div className='grid gap-8 lg:grid-cols-2 items-stretch'>
          <MotionDiv
            variants={{
              hidden: { opacity: 0, x: -28 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: 'easeOut' },
              },
            }}
            className='glass h-full rounded-2xl border border-white/10 p-5 sm:p-6'
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              className='relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5'
            >
              <motion.img
                src={pukhsa}
                alt='Pukhraj Deora'
                className='h-full w-full object-cover'
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className='absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent'
              />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className='absolute left-4 bottom-4 right-4 flex flex-wrap items-center gap-2'
              >
                <span className='rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md'>
                  Pukhraj Deora
                </span>
                <span className='rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md'>
                  Podcast Channel
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className='mt-5 space-y-4'
            >
              <h3 className='text-2xl font-bold'>Mr Pukhraj Deora</h3>
              <p className='text-white/70 leading-7'>
               Discover inspiring stories, practical insights, and thought-provoking conversations with remarkable guests.
              </p>

              <div className='flex flex-wrap gap-2'>
                {['Hindi Podcast', 'Guest Conversations', 'Thoughtful Stories'].map(
                  (item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -2, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                      className='rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75'
                    >
                      {item}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>
          </MotionDiv>

          <div className='h-full space-y-5'>
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <MotionDiv
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.55, ease: 'easeOut' },
                    },
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  className='rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl'
                >
                  <div className='flex items-start gap-4'>
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.06 }}
                      className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-neo-secondary'
                    >
                      <Icon className='h-5 w-5' />
                    </motion.div>

                    <div className='min-w-0'>
                      <h4 className='text-lg font-semibold'>{item.title}</h4>
                      <p className='mt-2 text-white/70 leading-7'>{item.text}</p>
                    </div>
                  </div>
                </MotionDiv>
              )
            })}

            <MotionDiv
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: 'easeOut' },
                },
              }}
              className='rounded-2xl border border-dashed border-white/15 bg-white/5 p-5 sm:p-6'
            >
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <p className='text-sm font-semibold uppercase tracking-[0.2em] text-white/50'>
                    About The Podcast
                  </p>
                  <p className='mt-2 text-white/70 leading-7'>
                    The Pukhraj Show brings together remarkable people, powerful stories, and meaningful conversations that inspire growth, learning, and new perspectives.
                  </p>
                </div>

                <MotionA
                  href='#podcast'
                  whileHover={{ scale: 1.04, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className='inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/15'
                >
                  Podcast
                  <FiArrowRight className='h-4 w-4' />
                </MotionA>
              </div>

              <div className='mt-5 space-y-4'>
                <motion.div
                  whileHover={{ y: -2 }}
                  className='rounded-xl border border-white/10 bg-black/10 p-4'
                >
                  <p className='text-sm font-semibold text-white/60'>

                  </p>
                  <p className='mt-2 text-white/50'>
                   TPS हिंदी में India की महान हस्तियों को फीचर किया जाता है, जहाँ गहराई से बातचीत के ज़रिए ज्ञान, अनुभव और प्रेरणा साझा की जाती है। यह पॉडकास्ट Self-Improvement, Health & Wellness, Spirituality, History & Culture, Science, Technology, Entrepreneurship, Finance, Geopolitics, Global Affairs, Law, Entertainment, Relationships, Lifestyle, Sports, Adventure, Army और Success Stories जैसे विविध विषयों को कवर करता है।
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className='rounded-xl border border-white/10 bg-black/10 p-4'
                >
                  <p className='text-sm font-semibold text-white/60'>

                  </p>
                  <p className='mt-2 text-white/50'>
                    हमारा उद्देश्य है दर्शकों को सही जानकारी, नई सोच और जीवन में आगे बढ़ने की प्रेरणा देना।
                  </p>
                </motion.div>


              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
