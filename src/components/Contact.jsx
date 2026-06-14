import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiCheckCircle,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiSend,
  FiUser,
} from 'react-icons/fi'

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionForm = motion.form
const MotionButton = motion.button

const ACCESS_KEY = '0feef4bd-f59e-4c3c-8f7d-f231b5d5450f'

const sectionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const infoItems = [
  {
    icon: FiMail,
    title: 'Email-friendly submission',
    text: 'Every message is delivered directly to our inbox, ensuring your inquiry reaches us without delay.',
  },
  {
    icon: FiPhone,
    title: 'Phone number included',
    text: 'Include your phone number so we can reach out directly when needed.',
  },
  {
    icon: FiMessageSquare,
    title: 'Quick conversation start',
    text: "Whether it's a podcast inquiry, collaboration, or general question, we're always open to hearing from you.",
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const payload = new FormData()
      payload.append('access_key', ACCESS_KEY)
      payload.append('subject', 'New Contact Submission - The Pukhraj Show')
      payload.append('from_name', 'The Pukhraj Show Website')
      payload.append('name', formData.name)
      payload.append('email', formData.email)
      payload.append('phone', formData.phone)
      payload.append('message', formData.message)
      payload.append('botcheck', '')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      })

      const result = await response.json()

      if (result?.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully. We will get back to you soon.',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
        formRef.current?.reset()
        return
      }

      setStatus({
        type: 'error',
        message:
          result?.message ||
          result?.body?.message ||
          'Message send nahi ho paaya. Please try again.',
      })
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setStatus({
        type: 'error',
        message: 'Network issue ki wajah se form submit nahi ho paaya.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <MotionSection
      id='contact'
      className='relative z-10 py-20'
      variants={sectionVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <MotionDiv variants={fadeUp} className='mb-12 text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-neo-secondary/80'>
            Contact us
          </p>
          <h2 className='text-3xl sm:text-4xl font-bold'>
            <span className='gradient-text'>Let&apos;s connect</span>
          </h2>
          <p className='mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/70'>
            Every great conversation starts with a message. Let's build something meaningful together.
          </p>
        </MotionDiv>

        <div className='grid gap-8 lg:grid-cols-2 items-stretch'>
          <MotionDiv
            variants={fadeUp}
            className='glass h-full rounded-2xl border border-white/10 p-5 sm:p-6'
          >
            <div className='flex items-center gap-3'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-neo-secondary'>
                <FiMail className='h-5 w-5' />
              </div>
              <div>

                <h3 className='text-xl font-bold'>Direct message box</h3>
              </div>
            </div>

            <p className='mt-5 text-white/70 leading-7'>
              Your message is sent directly to our inbox, allowing us
               to review and respond as quickly as possible.
            </p>

            <div className='mt-6 space-y-4'>
              {infoItems.map((item) => {
                const Icon = item.icon

                return (
                  <MotionDiv
                    key={item.title}
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    className='rounded-xl border border-white/10 bg-white/5 p-4'
                  >
                    <div className='flex items-start gap-3'>
                      <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-neo-secondary'>
                        <Icon className='h-4 w-4' />
                      </div>
                      <div>
                        <h4 className='font-semibold'>{item.title}</h4>
                        <p className='mt-1 text-sm leading-6 text-white/65'>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </MotionDiv>
                )
              })}
            </div>
          </MotionDiv>

          <MotionForm
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeUp}
            className='glass h-full rounded-2xl border border-white/10 p-5 sm:p-6'
          >
            <div className='grid gap-5 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label htmlFor='name' className='text-sm font-semibold text-white/80'>
                  Name
                </label>
                <div className='relative'>
                  <FiUser className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40' />
                  <input
                    id='name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete='name'
                    required
                    placeholder='Your name'
                    className='h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-white outline-none transition placeholder:text-white/35 focus:border-neo-secondary/50 focus:bg-white/10'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label htmlFor='email' className='text-sm font-semibold text-white/80'>
                  Email
                </label>
                <div className='relative'>
                  <FiMail className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40' />
                  <input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete='email'
                    required
                    placeholder='you@example.com'
                    className='h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-white outline-none transition placeholder:text-white/35 focus:border-neo-secondary/50 focus:bg-white/10'
                  />
                </div>
              </div>

              <div className='space-y-2 sm:col-span-2'>
                <label
                  htmlFor='phone'
                  className='text-sm font-semibold text-white/80'
                >
                  Phone Number
                </label>
                <div className='relative'>
                  <FiPhone className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40' />
                  <input
                    id='phone'
                    name='phone'
                    type='tel'
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete='tel'
                    placeholder='Your phone number'
                    className='h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-white outline-none transition placeholder:text-white/35 focus:border-neo-secondary/50 focus:bg-white/10'
                  />
                </div>
              </div>

              <div className='space-y-2 sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='text-sm font-semibold text-white/80'
                >
                  Message
                </label>
                <div className='relative'>
                  <FiMessageSquare className='pointer-events-none absolute left-4 top-4 h-4 w-4 text-white/40' />
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows='6'
                    placeholder='Write your message here...'
                    className='w-full rounded-xl border border-white/10 bg-white/5 px-11 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-neo-secondary/50 focus:bg-white/10'
                  />
                </div>
              </div>
            </div>

            <input type='hidden' name='access_key' value={ACCESS_KEY} />
            <input type='hidden' name='subject' value='New Contact Submission - The Pukhraj Show' />
            <input type='hidden' name='from_name' value='The Pukhraj Show Website' />
            <input type='checkbox' name='botcheck' className='hidden' aria-hidden='true' />

            {status.message && (
              <MotionDiv
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-5 rounded-xl border p-4 text-sm leading-6 ${
                  status.type === 'success'
                    ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200'
                    : 'border-rose-400/30 bg-rose-400/10 text-rose-200'
                }`}
                aria-live='polite'
              >
                <div className='flex items-start gap-3'>
                  <FiCheckCircle className='mt-0.5 h-4 w-4 shrink-0' />
                  <p>{status.message}</p>
                </div>
              </MotionDiv>
            )}

            <MotionButton
              type='submit'
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className='mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-neo-primary px-6 font-semibold text-white transition hover:bg-neo-primary/90 disabled:cursor-not-allowed disabled:opacity-70'
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FiSend className='h-4 w-4' />
            </MotionButton>
          </MotionForm>
        </div>
      </div>
    </MotionSection>
  )
}
