import React from 'react'
import bgMe from '../assets/Me.jpg'
import pdf from '../assets/Vasuki.pdf'

export const HeroSection = () => {
  return (
    <section className='w-screen max-w-[75rem] mx-auto overflow-hidden relative' id='intro'>
      <div className="lg:w-1/2 p-8 h-screen w-full flex flex-col justify-center">
        <span className='text-3xl font-bold'>Hello,</span>
        <span className='block text-3xl'>I'm <span className='text-yellow-400 font-bold text-5xl'>Vasuki</span></span>
        <p className='text-2xl font-semibold pt-2'>MERN Stack Enthusiast | UI/UX Designer</p>
        <p className='pt-2'>I’m a passionate Computer Science student at AAA College, focused on tackling challenges and exploring new technologies. I thrive on turning ideas into functional, user-centered solutions while continuously expanding my skills.</p>

        {/* social links */}
        <div className='flex justify-between w-2/12 pt-2 text-4xl gap-4'>
          <a href="mailto:vasukie96@gmail.com"><i className='bx bxl-gmail'></i></a>
          <a href="https://github.com/vasuki-elango"><i className='bx bxl-github'></i></a>
          <a href="https://wa.me/+91 8903183013"><i className='bx bxl-whatsapp'></i></a>
          <a href="https://www.linkedin.com/in/vasuki-e-b76441246/"><i className='bx bxl-linkedin'></i></a>
        </div>

        {/* hire btn */}
        <div>
          <button className='flex items-center justify-center gap-2 rounded-full px-5 py-2 bg-white transition-all hover:bg-yellow-300 text-black mt-2'>
            <i className='bx bx-import'></i>
            <a download="vasuki" href={pdf}>Hire Me</a>
          </button>
        </div>
      </div>

      <div className='absolute top-[-4rem] right-0 z-[-1] w-full lg:w-auto h-screen'>
        <img src={bgMe} alt="Profile" className="h-screen object-cover w-full shadow-lg" />
      </div>
    </section>
  )
}
