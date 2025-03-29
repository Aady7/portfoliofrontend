import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/images/logo.png";




export default function Navbar() {
    return(
        <nav className="mb-20 flex items-cnter justify-between py-6 top-0">
        

            <div className="flex items-center flext-shrink-0 text-2xl mx-0  ">
            <a href='/' target='_blank' rel='noopener noreferrer'>
            <img src={logo} alt="logo" className="h-10 w-10 lg:h-20 lg:w-20 rounded-full  " />
            </a> 
           </div>
            <div className='flex items-center justify-between gap-4 lg:gap-8 text-2xl' >
            <a href='https://www.linkedin.com/in/aditya-pratap-singh-427211216/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin  className='lg:h-15 lg:w-15   '/>
            </a>
            <a href='https://github.com/Aady7?tab=overview&from=2023-12-01&to=2023-12-31' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='lg:h-15 lg:w-15'/>  

            </a>
            
            </div>
    
    
           
        </nav>
        
    )

}
