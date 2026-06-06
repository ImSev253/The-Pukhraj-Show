import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { client, urlFor } from '../sanityClient'

const MotionArticle = motion.article
const MotionDiv = motion.div

export default function Guests() {
  const [guests, setGuests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    client
      .fetch(`*[_type == "guest"] | order(_createdAt desc){
        _id,
        name,
        photo,
        episodeLink
      }`)
      .then((data) => {
        if (!isMounted) return
        setGuests(Array.isArray(data) ? data : [])
      })
      .catch((err) => {
        if (!isMounted) return
        console.error('Guests fetch failed:', err)
        setError('Guests load nahi ho pa rahe hain.')
      })
      .finally(() => {
        if (!isMounted) return
        setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const sliderGuests = useMemo(() => {
    if (!guests.length) return []

    const repeatCount = Math.max(6, Math.ceil(14 / guests.length))
    return Array.from({ length: repeatCount }, () => guests).flat()
  }, [guests])

  const GuestCard = ({ guest }) => {
    const imageUrl = guest?.photo
      ? urlFor(guest.photo).width(700).height(850).fit('crop').url()
      : ''

    const card = (
      <MotionArticle
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className='w-56 sm:w-64 md:w-72 shrink-0 overflow-hidden rounded-xl glass'
      >
        <div className='aspect-[4/5] bg-white/10'>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={guest?.name || 'Guest'}
              className='h-full w-full object-cover'
              loading='lazy'
            />
          ) : (
            <div className='flex h-full w-full items-center justify-center text-5xl font-bold opacity-70'>
              {(guest?.name || 'G').slice(0, 1)}
            </div>
          )}
        </div>

        <div className='p-4 text-center'>
          <h3 className='text-lg font-bold leading-tight'>
            {guest?.name || 'Guest'}
          </h3>
        </div>
      </MotionArticle>
    )

    if (!guest?.episodeLink) return card

    return (
      <a href={guest.episodeLink} target='_blank' rel='noreferrer'>
        {card}
      </a>
    )
  }

  return (
    <section id='guests' className='relative z-10 py-20 overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='mb-10 text-center'
        >
          <h2 className='text-3xl sm:text-4xl font-bold'>
            <span className='gradient-text'>Guests</span>
          </h2>
        </MotionDiv>

        {loading && (
          <div className='glass rounded-xl p-6 text-center'>
            Guests loading...
          </div>
        )}

        {!loading && error && (
          <div className='glass rounded-xl p-6 text-center'>{error}</div>
        )}

        {!loading && !error && guests.length === 0 && (
          <div className='glass rounded-xl p-6 text-center'>
            Abhi koi guest publish nahi hua.
          </div>
        )}

        {!loading && !error && guests.length > 0 && (
          <div className='relative overflow-hidden rounded-xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl dark:bg-white/5'>
            <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white/70 to-transparent backdrop-blur-[1px] dark:from-[#0A0A1A]/80' />
            <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white/70 to-transparent backdrop-blur-[1px] dark:from-[#0A0A1A]/80' />

            <MotionDiv
              className='flex w-max'
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: Math.max(36, sliderGuests.length * 3),
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              <div className='flex gap-5 pr-5'>
                {sliderGuests.map((guest, index) => (
                  <GuestCard key={`${guest._id}-slide-${index}`} guest={guest} />
                ))}
              </div>

              <div className='flex gap-5 pr-5' aria-hidden='true'>
                {sliderGuests.map((guest, index) => (
                  <GuestCard key={`${guest._id}-copy-${index}`} guest={guest} />
                ))}
              </div>
            </MotionDiv>
          </div>
        )}
      </div>
    </section>
  )
}
