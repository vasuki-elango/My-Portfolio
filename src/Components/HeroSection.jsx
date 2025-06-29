import bgMe from '../assets/Me.jpg'
import pdf from '../assets/Vasuki.pdf'
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BiImport } from "react-icons/bi";


export const HeroSection = () => {
  return (
    <section className='w-screen max-w-[75rem] mx-auto overflow-hidden relative' id='intro'>
      <div className="lg:w-1/2 p-8 h-screen w-full flex flex-col justify-center">
        <span className='text-3xl font-bold'>Hello,</span>
        <span className='block text-3xl'>I'm <span className='text-yellow-400 font-bold text-5xl'>Vasuki</span></span>
        <p className='text-2xl font-semibold pt-2'>MERN Stack Enthusiast | UI/UX Designer</p>
        <p className='pt-2'>I’m a passionate Computer Science student at AAA College, focused on tackling challenges and exploring new technologies. I thrive on turning ideas into functional, user-centered solutions while continuously expanding my skills.</p>

        {/* social links */}
        <div className='flex justify-between items-center w-2/12 pt-2 text-3xl gap-3 '>
          <a href="mailto:vasukie96@gmail.com" target='__blank'><SiGmail className='hover:text-amber-300'/></a>
          <a href="https://github.com/vasuki-elango" target='__blank'><FaGithub className='hover:text-amber-300'/></a>
          <a href="https://leetcode.com/u/VasukiElango/" target='__blank'><SiLeetcode className='hover:text-amber-300'/></a>
          <a href="https://www.linkedin.com/in/vasuki-e-b76441246/" target='__blank'><BsLinkedin className='hover:text-amber-300'/></a>
        </div>

        {/* hire btn */}
        <div >
          <button className='flex items-center justify-center gap-2 rounded-full py-1.5 px-3 bg-white transition-all hover:bg-yellow-300 text-black mt-2'>
            <BiImport className='bx bx-import'/>
            <a download="vasuki" href={pdf}>Hire Me</a>
          </button>
        </div>
      </div>

      <div className='absolute top-[-0rem] right-0 z-[-1] w-full lg:w-auto h-screen'>
        <img src={bgMe} alt="Profile" className="h-screen object-cover w-full shadow-lg" />
      </div>
    </section>
  )
}
