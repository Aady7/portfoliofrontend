import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/images/logo.png";




export default function Navbar() {
    return(
        <nav className="mb-20 flex items-cnter justify-between py-6 top-0">
        

            <div className="flex items-center flext-shrink-0 text-2xl mx-0  ">
          <img src={logo} alt="logo" className="h-10 w-10 lg:h-20 lg:w-20 rounded-full " />
           </div>
            <div className='flex items-center justify-between gap-4 lg:gap-8 text-2xl' >
            <FaLinkedin className='lg:h-15 lg:w-15 '/>
            <FaGithub className='lg:h-15 lg:w-15'/>  
            </div>
    
    
           
        </nav>
        
    )

}
