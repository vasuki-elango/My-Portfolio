import React, { useState } from 'react'
import { Link } from 'react-scroll'
import menu from '../assets/menu.png'

export const Header = () => {
  const[showMenu,setshowMenu] = useState(false);
  return (
    <nav className="w-full bg-zinc-800 flex items-center justify-between px-6 md:px-16 py-4 fixed top-0 z-10">
      {/* Logo */}
      <h2 className='text-4xl text-yellow-500 font-bold'>Vasuki</h2>

      {/* Navbar */}
      <div className='text-white text-xl hidden lg:flex'>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='mx-4 cursor-pointer'>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className='mx-4 cursor-pointer'>About</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="mx-4 cursor-pointer">Skills</Link>
          <Link activeClass='active' to='services' spy={true} smooth={true} offset={-50} duration={500} className="mx-4 cursor-pointer">Service</Link>
          <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className="mx-4 cursor-pointer">Project</Link>
      </div>

      {/* Contact btn */}
      <button className="lg:flex items-center justify-center gap-2 rounded-full px-2 py-2 bg-white transition-all hover:bg-yellow-300 hidden text-black" onClick={()=>{
            document.getElementById("contact").scrollIntoView();
          }}>
          <i className='bx bxs-message'></i>Contact Me
      </button>

      {/* menu icon */}
      <img src={menu} alt="menu" className='lg:hidden w-12'  onClick={()=>setshowMenu(!showMenu)}/>

      {/* mobile navbar */}
      <div className='bg-zinc-700 absolute top-[5.5rem] right-16 flex flex-col w-1/2' style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="px-5 py-2 text-xl text-white" onClick={()=>setshowMenu(false)}>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className="px-5 py-2 text-xl text-white" onClick={()=>setshowMenu(false)}>About</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="px-5 py-2 text-xl text-white" onClick={()=>setshowMenu(false)}>Skills</Link>
          <Link activeClass='active' to='services' spy={true} smooth={true} offset={-50} duration={500} className="px-5 py-2 text-xl text-white" onClick={()=>setshowMenu(false)}>Service</Link>
          <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className="px-5 py-2 text-xl text-white" onClick={()=>setshowMenu(false)}>Project</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="px-5 py-2 text-xl text-white" onClick={()=>setshowMenu(false)}>Contact</Link>
      </div>
        
    </nav>
  )
}
