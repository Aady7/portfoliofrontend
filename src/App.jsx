import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Aboutme from './components/about'
import TechStacks from './components/techStacks'
import Experience from './components/experience'
import ButtonComponent from './components/button'
import Chatbot from './components/chatbot'
import useChatbot from './hooks/usechatbot'


import './App.css'

function App() {


  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-400 selection:text-cyan-900 mar ">
   
    <div className="fixed top-0 -z-10 h-full w-full ml-0">
    <div class="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

    </div>
    
    </div>
    
     <div className="container px-8  ">
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <TechStacks/>
      <Experience/>
      <Chatbot/>
   
     </div>
     </div>
    
     
    
  )
}

export default App
