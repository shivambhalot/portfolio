import React from 'react'
import About_Img from "../assets/about_pic.png"
import { motion } from "framer-motion"

function About() {
    return (
        <div className="border-b border-neutral-800 pb-4">
            <h2 className='my-20 text-center text-4xl '>About 
            <span className='text-neutral-500'> Me</span>
            </h2>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-2/5 lg:p-8">
                    <motion.div
                    whileInView = {{x:0 , opacity:1}} 
                    initial = {{x:-100 , opacity:0}}
                    transition = {{duration : 0.5}}
                    className='flex items-center justify-center'>
                        <img className='rounded-2xl' src={About_Img} alt="About Image" />
                    </motion.div>
                </div>
                <div className="w-full lg:w-3/5 lg:px-8">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p 
                        whileInView = {{x:0 , opacity:1}} 
                        initial = {{x:100 , opacity:0}}
                        transition = {{duration : 0.5}}
                        className='my-2 max-w-xl py-6'>
                        I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.
                         I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL,
                        and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I 
                        continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to 
                        deliver high-quality solutions.Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
