import React from 'react'
import project1 from "../assets/projects/project1.png"
import project2 from "../assets/projects/project2.png"
import { motion } from "framer-motion"


function Project() {
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <motion.h2 
              whileInView = {{y:0 , opacity:1}} 
              initial = {{y:-100 , opacity:0}}
              transition = {{duration : 1}}
              className='my-20 text-center text-4xl'>
            Projects</motion.h2>
            <div >
                <div className='mb-12 flex flex-wrap lg:justify-center'>
                    <motion.div
                      whileInView = {{x:0 , opacity:1}} 
                      initial = {{x:-100 , opacity:0}}
                      transition = {{duration : 1}} 
                      className='w-full lg:w-1/4'>
                        <img
                        src={project2} 
                        alt='password generator'
                        width={160}
                        height={160} 
                        className='m-6 rounded-lg'
                        />
                    </motion.div>

                    <motion.div 
                      whileInView = {{x:0 , opacity:1}} 
                      initial = {{x:100 , opacity:0}}
                      transition = {{duration : 1}} 
                      className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>Currency Convertor</h6>
                        <p className='mb-4 text-neutral-400'>
                        The SecurePassGen project aims to create a robust and user-friendly password generator application.
                        This application will provide users with the capability to generate strong, random passwords that 
                        adhere to various security policies and complexity requirements. The generated passwords will be 
                        suitable for different use cases, from personal accounts to corporate systems.
                        </p>
                        <span className='mr-2 rounded bg-violet-500 hover:bg-violet-600 px-3 py-2 text-small font-medium text-white'><a href="https://www.google.com">DEMO</a></span>
                        <span className='mr-2 rounded bg-violet-500 hover:bg-violet-600 px-3 py-2 text-small font-medium text-white '><a href="https://www.google.com">CODE</a></span>
                    </motion.div>
                </div>


                <div className='mb-12 flex flex-wrap lg:justify-center'>
                    <motion.div
                      whileInView = {{x:0 , opacity:1}} 
                      initial = {{x:-100 , opacity:0}}
                      transition = {{duration : 1}} 
                      className='w-full lg:w-1/4'>
                        <img
                        src={project1} 
                        alt='password generator'
                        width={160}
                        height={160} 
                        className='m-6 rounded-lg'
                        />
                    </motion.div>

                    <motion.div 
                      whileInView = {{x:0 , opacity:1}} 
                      initial = {{x:100 , opacity:0}}
                      transition = {{duration : 1}}
                      className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>PassWord Generator</h6>
                        <p className='mb-4 text-neutral-400'>
                        The GlobalCurrency project aims to create a dynamic and user-friendly currency converter application.
                        This application will provide users with the ability to convert between various currencies using real-time
                        exchange rates. The goal is to offer a reliable and convenient tool for travelers, businesses, and anyone 
                        needing quick access to up-to-date currency conversions.
                        </p>
                        <span className='mr-2 rounded bg-violet-500 hover:bg-violet-600 px-3 py-2 text-small font-medium text-white'><a href="https://www.google.com">DEMO</a></span>
                        <span className='mr-2 rounded bg-violet-500 hover:bg-violet-600 px-3 py-2 text-small font-medium text-white '><a href="https://www.google.com">CODE</a></span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Project
