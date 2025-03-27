import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




export default function Navbar() {
    return(
        <nav className="mb-20 flex items-cnter justify-between py-6">
        

            <div className="flex items-center flext-shrink-0 text-2xl mx-0  ">
           <FaGithub/>
           </div>
            <div className='flex items-center justify-between gap-4 text-2xl' >
            <FaLinkedin/>
            <FaGithub/>
            <FaGithub/>
          
            </div>
    
    
           
        </nav>
        
    )

}
