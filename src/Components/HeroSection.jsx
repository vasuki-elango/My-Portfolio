import React from 'react'
import './HeroSection.css'
import bgMe from '../assets/Me.jpg'

export const HeroSection = () => {
  return (
    <section id='intro'>
        <div className="intro-content">
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Vasuki</span><br/>Website Designer</span>
          <p className='introPara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, necessita<br/>tibus?Lorem ipsum dolor, si. Sed, necessitatibus? </p>
          <div className="social-links">
            <a href="mailto:vasukie96@gmail.com"><i class='bx bxl-gmail'></i></a>
            <a href="https://github.com/vasuki-elango"><i class='bx bxl-github'></i></a>
            <a href="https://wa.me/+91 8903183013"><i class='bx bxl-whatsapp'></i></a>
            <a href="https://www.linkedin.com/in/vasuki-e-b76441246/"><i  class='bx bxl-linkedin'></i></a>
          </div>
          <div>
            <button className='btn'>
              <i class='bx bx-import'></i>
              Hire Me
            </button>

          </div>
        </div>
          <img src={bgMe} alt="Profile" className='bg' />
    </section>
  )
}
