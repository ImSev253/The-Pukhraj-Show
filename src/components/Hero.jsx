import React from 'react';
import { motion } from 'framer-motion';
import pukhsa from "../assets/pukhsa.png";
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Motion = motion

const Hero = () => {
  return (
    <section id='home' className='min-h-screen relativez-10 flex items-center pt-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/*Left part */}

          <div className='order-2 lg:order-1 text-center lg:text-left'>
            <Motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className='inline-block px-4 py-2 glass dark:glass rounded-full text-neo-secondary font-medium mb-4'>

              Mr. PUKHRAJ DEORA
            </Motion.span>
            <Motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'
            >
              <span className='gradient-text'>The Pukhraj Show</span>
              <span className='block'>Podcast</span>
            </Motion.h1>
            <Motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className='text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8'>
              The Pukhraj Show एक ऐसा Channel है जहाँ आप देख सकते हैं The Pukhraj Show हिंदी (TPS हिंदी) — एक thought-provoking और value-driven Hindi Podcast।
            </Motion.p>

            {/*Button */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>

              <Motion.a
                whileHover={{scale:1.06}}
                whileTap={{scale:0.95}}
                href='https://www.youtube.com/@ThePukhrajShow'
                className='neo-btn px-8 py-4 rounded-full font-bold flex items-center cursor-pointer'>
                Youtube
                <FaYoutube className='ml-2' />
              </Motion.a>

              <Motion.a
                whileHover={{scale:1.06}}
                whileTap={{scale:0.95}}
                href='https://www.instagram.com/thepukhrajshow/'
                className='px-8 py-4 rounded-full font-bold border-2 border-neo-primary flex items-center
               hover:bg-neo-primary/20 cursor-pointer' >
                Instagram
                <FaInstagram className='ml-2' />
              </Motion.a>

            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className='mt-6 flex gap-5 justify-center lg:justify-start'>
              <Motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href='#'
                className='text-2xl text-neo-primary hover:text-neo-secondary cursor-pointer'>
                <FaFacebook />
              </Motion.a>
              <Motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href='https://www.instagram.com/thepukhrajshow/'
                className='text-2xl text-neo-primary hover:text-neo-secondary cursor-pointer'>
                <FaInstagram />
              </Motion.a>
              <Motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href='#'
                className='text-2xl text-neo-primary hover:text-neo-secondary cursor-pointer'>
                <FaTwitter />
              </Motion.a>
            </Motion.div>




          </div>

          {/*Right part */}
          <div className='order-1 lg:order-2 flex justify-center lg:justify-end'>
            <Motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className='relative w-72 sm:w-80 lg:w-[420px] aspect-square overflow-hidden rounded-2xl border border-neo-primary/20 glass dark:glass'
            >
              <Motion.img
                initial={{ filter: "blur(0px)", opacity: 0 }}
                whileInView={{ filter: "blur(20px)", opacity: 0.25 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.3 }}
                src={pukhsa}
                alt=''
                aria-hidden='true'
                className='absolute inset-0 h-full w-full object-cover scale-110'
              />
              <Motion.img
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.4 }}
                src={pukhsa}
                alt='Host'
                className='relative z-10 h-full w-full object-cover'
              />
            </Motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
