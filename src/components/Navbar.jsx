import React from 'react'
import { FaLinkedin ,FaFacebook , FaGithub , FaInstagramSquare , FaTwitterSquare, FaCode , FaLaptopHouse} from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

function Navbar() {
    return (
       <nav className=" mb-16 flex  items-center justify-between py-0">
            <div className=" m-9 flex  flex-shrink-0 items-center  text-4xl">
                <FaLaptopHouse />
                {/* logos ko piche krne k liye ye div use kiya */}
            </div>
            <div className='m-9 flex flex-center justify-center gap-4 text-4xl'>
                <FaLinkedin />
                <FaInstagramSquare />
                <FaGithub />
                <FaTwitterSquare />
                <FaFacebook />
            </div>

       </nav>
    )
}

export default Navbar
