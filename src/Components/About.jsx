import React from 'react'
import AboutImg from '../assets/about.jpg'
import pdf from '../assets/Vasuki.pdf'

export const About = () => {
    return (
        <section className='max-w-[65rem] mx-auto p-5' id='about'>
            <h2 className='sectionTitle text-center'>About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">

                {/* about img */}
                <div className='w-full  h-full sm:h-[500px] p-3'>
                    <img src={AboutImg} alt="AboutImage" className='w-full h-full rounded-xl object-cover' />
                </div>

                {/* about content */}
                <div>
                    {/* highlights */}
                    <div className="grid grid-cols-3 text-center gap-2 my-5 ">
                        <div className="bg-zinc-700 p-3 rounded-2xl">
                            <i className='bx bxs-graduation text-xl'></i>
                            <h3 className="text-md">BE.CSE</h3>
                            <span className="text-sm">2021-2025</span>
                        </div>
                        <div className="bg-zinc-700 p-3 rounded-2xl">
                            <i className='bx bxs-award text-xl'></i>
                            <h3 className="text-md">Internship</h3>
                            <span className="text-md">Pofi Technology</span>
                        </div>
                        <div className="bg-zinc-700 p-2 rounded-2xl">
                            <i className='bx bxs-award text-xl'></i>
                            <h3 className="text-md">Internship</h3>
                            <span className="text-sm">Indie Spirit Technology</span>
                        </div>
                    </div>

                    {/* intro */}
                    <p className="text-justify">
                        I'm Vasuki, a dedicated Computer Science student at AAA College with a passion for crafting clean, responsive, and user-friendly web applications. With a solid foundation in programming languages like Java and JavaScript, I’ve honed my skills through internships and real-world projects involving the MERN stack, React, and modern UI/UX design tools.
                        I enjoy solving challenges — whether it’s optimizing a backend flow, building an intuitive frontend, or designing smooth user experiences in Figma. My work reflects a blend of technical precision and creative vision.
                        I'm constantly learning, whether it’s diving into new frameworks or enhancing team collaboration through projects. I’m now actively seeking opportunities where I can contribute, grow, and bring value as a full-stack developer or UI/UX designer.
                    </p>

                    {/* download btn */}
                    <button className='flex items-center justify-center gap-2 rounded-full px-2 py-2 bg-white transition-all hover:bg-yellow-300 text-black mt-3'>
                        <i className='bx bxs-download' ></i>
                        <a download="vasuki" href={pdf} >Download Cv</a>
                    </button>
                </div>
            </div>
        </section>
    )
}
