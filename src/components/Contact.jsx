import React from 'react'
import { motion } from "framer-motion"

function Contact() {
    return (
        <div className="border-b border-neutral-800 pb-20">
            <motion.h2  
              whileInView = {{y:0 , opacity:1}} 
              initial = {{y:-100 , opacity:0}}
              transition = {{duration : 0.5}}
              className='my-10 text-center text-4xl'>
            Get In Touch</motion.h2>

            <p className='text-center mb-10 text-xl tracking-tighter'>Feel free to reach out to me for any questions!</p>

            <div className="text-center ">
                <motion.p 
                  whileInView = {{x:0 , opacity:1}} 
                  initial = {{x:-100 , opacity:0}}
                  transition = {{duration : 0.5}} 
                  className='my-4 '>
                MANIT Bhopal</motion.p>

                <motion.p 
                  whileInView = {{x:0 , opacity:1}} 
                  initial = {{x:100 , opacity:0}}
                  transition = {{duration : 0.5}} 
                  className='my-4 '>
                7240829407</motion.p>

                <motion.a
                  whileInView = {{x:0 , opacity:1}} 
                  initial = {{x:-100 , opacity:0}}
                  transition = {{duration : 0.5}} 
                  href="#" className='border-b'>
                bhalotshivam@gmail.com</motion.a>
            </div>
        </div>
    )
}

export default Contact
