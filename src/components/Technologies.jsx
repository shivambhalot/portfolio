import React from 'react'
import {RiHtml5Fill , RiReactjsFill , RiJavascriptFill , RiTailwindCssFill} from 'react-icons/ri'
//import { TbBrandFramerMotion } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { motion } from "framer-motion"
import { LiaNode } from "react-icons/lia";
import { SiMysql , SiExpress , SiMongodb} from "react-icons/si";
import { FaDatabase , FaJava } from "react-icons/fa6";
//import { BiLogoMongodb } from "react-icons/bi";


const iconVariants = (duration) => ({
    hidden: {y: -10},
    visible: {
      y: [10, -10 , 10],
      transition: {
        duration : duration,
        ease:"linear",
        repeat:Infinity,
        repeatType: "reverse",
        },
    },
});


function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-10 ">
            <motion.h2 
              whileInView = {{y:0 , opacity:1}} 
              initial = {{y:-100 , opacity:0}}
              transition = {{duration : 1.5}}
              className='my-20 text-center text-4xl '>
            Technologies</motion.h2>

            
            <motion.div 
            whileInView = {{x:0 , opacity:1}} 
            initial = {{x:-100 , opacity:0}}
            transition = {{duration : 1.5}}
            className="item-center justify-center gap-4">
                
                <div className='flex  flex-column flex-wrap items-center justify-center gap-8 mb-10'>
                <motion.div
                variants = {iconVariants(5)}
                initial = "hidden"
                animate = "visible"
                >
                    <div className='rounded-2xl border-4 border-neutral-800 p-3 bg-white'>
                    <RiHtml5Fill className='text-7xl text-orange-700'/>
                    </div>
                    <h4 className='text-center'>HTML</h4>
                </motion.div>
                
                <motion.div
                variants = {iconVariants(5)}
                initial = "hidden"
                animate = "visible"
                >
                    <div className='rounded-2xl border-4 border-neutral-800 p-3 bg-white'>
                    <DiCss3 className='text-7xl text-blue-800'/>
                    </div>
                    <h4 className='text-center'>CSS</h4>
                </motion.div>

                <motion.div
                variants = {iconVariants(5)}
                initial = "hidden"
                animate = "visible"
                >
                    <div className='rounded-2xl border-4 border-neutral-800 p-3 bg-white'>
                    <RiJavascriptFill className='text-7xl text-yellow-500'/>
                    </div>
                    <h4 className='text-center'>JS</h4>
                </motion.div>

                <motion.div
                variants = {iconVariants(5)}
                initial = "hidden"
                animate = "visible">
                    <div className='rounded-2xl border-4 border-neutral-800 p-3 bg-white'>
                    <RiReactjsFill className='text-7xl text-cyan-500'/>
                    </div>
                    <h4 className='text-center'>ReactJS</h4>
                </motion.div>

                <motion.div
                variants = {iconVariants(5)}
                initial = "hidden"
                animate = "visible">
                    <div className='rounded-2xl border-4 border-neutral-800 p-3 bg-white '>
                    <RiTailwindCssFill className='text-7xl text-cyan-500'/>
                    </div>
                    <h4 className='text-center'>Tailwind CSS</h4>
                </motion.div>
                </div>


                <div className='flex  flex-column flex-wrap items-center justify-center gap-8 mb-10'>
                <motion.div
                variants = {iconVariants(5)}
                initial = "hidden"
                animate = "visible">
                    <div className='rounded-2xl border-4 border-neutral-800 p-3 bg-white '>
                    <LiaNode className='text-7xl text-green-600'/>
                    </div>
                    <h4 className='text-center'>Nodejs</h4>
                </motion.div>

                <motion.div
                variants = {iconVariants(5)}
                initial = "hidden"
                animate = "visible">
                    <div className='rounded-2xl border-4 border-neutral-800 p-3 bg-white '>
                    <SiExpress className='text-7xl text-black'/>
                    </div>
                    <h4 className='text-center'>Expressjs</h4>
                </motion.div>

                <motion.div
                variants = {iconVariants(5)}
                initial = "hidden"
                animate = "visible">
                    <div className='rounded-2xl border-4 border-neutral-800 p-3 bg-white '>
                    <SiMongodb className='text-7xl text-green-800'/>
                    </div>
                    <h4 className='text-center'>MongoDB</h4>
                </motion.div>

                <motion.div
                variants = {iconVariants(5)}
                initial = "hidden"
                animate = "visible">
                    <div className='rounded-2xl border-4 border-neutral-800 p-3 bg-white '>
                    <FaDatabase className='text-7xl text-sky-600'/>
                    </div>
                    <h4 className='text-center'>DBMS</h4>
                </motion.div>

                <motion.div
                variants = {iconVariants(5)}
                initial = "hidden"
                animate = "visible">
                    <div className='rounded-2xl border-4 border-neutral-800 p-3 bg-white '>
                    <SiMysql className='text-7xl text-sky-600'/>
                    </div>
                    <h4 className='text-center'>MySQL</h4>
                </motion.div>

                <motion.div
                variants = {iconVariants(5)}
                initial = "hidden"
                animate = "visible">
                    <div className='rounded-2xl border-4 border-neutral-800 p-3 bg-white '>
                    <FaJava className='text-7xl text-black'/>
                    </div>
                    <h4 className='text-center'>Java</h4>
                </motion.div>
                </div>

            </motion.div>
        </div>
    )
}

export default Technologies
