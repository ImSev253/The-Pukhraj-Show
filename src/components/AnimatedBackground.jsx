import {  } from 'framer-motion/client'
import React from 'react'

const animatedBackground = () => {
    return (
        <div className='fixed inset-0 overflow-hidden z-0 pointer-events-none'>
            <div className='absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-r from-neo-primary to-neo-accent opacity-20 filter blur-3xl animate-blob' ></div>
            <div className='absolute top-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-linear-to-r from-neo-secondary to-neo-accent opacity-15 filter blur-3xl animate-blob animation-delay-4000'></div>
            <div className='absolute bottom-1/4 left-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-liner-to-r from-neo-primary to-neo-secondary opacity-10 filter blur-3xl animate-blob animation-delay-8000'></div>
        </div>
    )
}

export default animatedBackground