import React from 'react'
import Profile_pic from "../assets/Profile_pic.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x:-100 , opacity:0},
    visible: {
    x:0,
    opacity:1,
    transition: {duration : 0.5 , delay : delay},
    },
});     

function Hero() {
    
    return (
       <div className='border-b border-neutral-800 pb-4 lg:mb-35'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-3/5 lg:px-8">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                          variants={container(0)}
                          initial="hidden"
                          animate="visible"
                          className='pb-16 text-6xl font-thin tracking-tight lg:mt-10 '>
                          Shivam Bhalot
                        </motion.h1>
                        <motion.span 
                          variants={container(0.5)}
                          initial="hidden"
                          animate="visible"
                          className='text-3xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text  tracking-tight '>
                        Web Developer
                        </motion.span>
                        <motion.p 
                          variants={container(1)}
                          initial="hidden"
                          animate="visible"
                          className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                          I am a passionate full stack developer with a knack for crafting robust and scalable web applications. 
                          I have honed my skills in front-end technologies like React ,as well as back-end technologies like Node.js, MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                        initial = {{x:100 , opacity:0}}
                        animate = {{x:0 , opacity:1}}
                        transition = {{duration : 1 , delay : 1.2}}
                        className='rounded-2xl' src={Profile_pic} alt="Shivam Bhalot" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
