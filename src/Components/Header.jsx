import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-scroll'
import menu from '../assets/menu.png'

export const Header = () => {
  const[showMenu,setshowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <h2 className="logo">Vasuki</h2>
      <div className='desktopMenu'>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopItem">Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className="desktopItem">About</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopItem">Skills</Link>
          <Link activeClass='active' to='services' spy={true} smooth={true} offset={-50} duration={500} className="desktopItem">Service</Link>
          <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className="desktopItem">Project</Link>
      </div>
      <button className="btn" onClick={()=>{
            document.getElementById("contact").scrollIntoView();
          }}>
          <i class='bx bxs-message'></i>Contact Me
      </button>
      <img src={menu} alt="menu" className='mbmenu'  onClick={()=>setshowMenu(!showMenu)}/>
      <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>About</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Skills</Link>
          <Link activeClass='active' to='services' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Service</Link>
          <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Project</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Contact</Link>
      </div>
        
    </nav>
  )
}
