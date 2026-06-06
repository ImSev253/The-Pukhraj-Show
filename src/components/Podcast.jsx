import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { client, urlFor } from '../sanityClient'

const MotionDiv = motion.div

function getYouTubeId(url) {
  if (!url) return ''
  const value = String(url).trim()

  // Common patterns: youtu.be/<id>, youtube.com/watch?v=<id>, /shorts/<id>, /embed/<id>
  const match =
    value.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/) ||
    value.match(/[?&]v=([A-Za-z0-9_-]{6,})/) ||
    value.match(/\/shorts\/([A-Za-z0-9_-]{6,})/) ||
    value.match(/\/embed\/([A-Za-z0-9_-]{6,})/)

  return match?.[1] || ''
}

function getYouTubeThumb(url) {
  const id = getYouTubeId(url)
  if (!id) return ''
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}

export default function Podcast() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    client
      .fetch(`*[_type == "youtube"] | order(_createdAt desc){
        _id,
        title,
        thumbnail,
        youtubeLink,
        youtube,
        "name": coalesce(name, title),
        "photo": coalesce(photo, thumbnail),
        "link": coalesce(link, youtubeLink, youtube)
      }`)
      .then((data) => {
        if (!isMounted) return
        setItems(Array.isArray(data) ? data : [])
      })
      .catch((err) => {
        if (!isMounted) return
        console.error('Podcast fetch failed:', err)
        setError('Podcast load nahi ho pa raha.')
      })
      .finally(() => {
        if (!isMounted) return
        setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const cards = useMemo(() => items.slice(0, 6), [items])

  return (
    <section id='podcast' className='relative z-10 py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='mb-10 text-center'
        >
          <h2 className='text-3xl sm:text-4xl font-bold'>
            <span className='gradient-text'>Podcast</span>
          </h2>
        </MotionDiv>

        {loading && (
          <div className='glass rounded-xl p-6 text-center'>
            Podcast loading...
          </div>
        )}

        {!loading && error && (
          <div className='glass rounded-xl p-6 text-center'>{error}</div>
        )}

        {!loading && !error && cards.length === 0 && (
          <div className='glass rounded-xl p-6 text-center'>
            Abhi koi podcast publish nahi hua.
          </div>
        )}

        {!loading && !error && cards.length > 0 && (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {cards.map((item) => {
              const href = item?.link || '#'
              const imageUrl = item?.photo
                ? urlFor(item.photo).width(1200).height(675).fit('crop').url()
                : getYouTubeThumb(href)

              return (
                <a
                  key={item._id}
                  href={href}
                  target={href && href !== '#' ? '_blank' : undefined}
                  rel={href && href !== '#' ? 'noreferrer' : undefined}
                  className='group overflow-hidden rounded-xl glass border border-white/10'
                >
                  <div className='relative aspect-video bg-white/10'>
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={item?.name || item?.title || 'Podcast'}
                        className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]'
                        loading='lazy'
                      />
                    ) : (
                      <div className='flex h-full w-full items-center justify-center text-5xl font-bold opacity-70'>
                        {(item?.name || item?.title || 'P').slice(0, 1)}
                      </div>
                    )}

                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90' />
                    <div className='pointer-events-none absolute left-4 bottom-4 flex items-center gap-2'>
                      <div className='h-10 w-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 grid place-items-center'>
                        <div className='ml-[2px] h-0 w-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-white/90' />
                      </div>
                      <div className='text-sm font-semibold text-white/90'>
                        Watch
                      </div>
                    </div>
                  </div>

                  <div className='p-4'>
                    <h3 className='text-lg font-bold leading-tight'>
                      {item?.name || item?.title || 'Podcast'}
                    </h3>
                  </div>
                </a>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
