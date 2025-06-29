import { FaFile } from "react-icons/fa";
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
                        I'm Vasuki, a Computer Science student at AAA College with a strong interest in full-stack development, UI/UX design, and software development. I enjoy building clean, responsive web apps using the MERN stack, React, Tailwind CSS, and Figma for intuitive design.I have a solid foundation in programming languages like Java, JavaScript, and Python, and I'm actively learning Data Structures and Algorithms to strengthen my problem-solving skills. I've gained practical experience through internships and real-world projects.Always eager to explore new technologies and collaborate on meaningful projects, I'm currently seeking opportunities as a full-stack developer, software developer, or UI/UX designer.
                    </p>

                    {/* download btn */}
                    <button className='flex items-center justify-center gap-2 rounded-full px-4 py-2 bg-white transition-all hover:bg-yellow-300 text-black mt-3'>
                        <FaFile/>
                        <a download="vasuki" href={pdf} >Download Cv</a>
                    </button>
                </div>
            </div>
        </section>
    )
}
