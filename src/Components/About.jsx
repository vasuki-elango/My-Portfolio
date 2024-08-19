import React from 'react'
import AboutImg from '../assets/Me.jpg'
import './About.css'
import pdf from '../assets/VASUKI-UI&UX.pdf'

export const About = () => {
  return (
    <section id='about'>
        <h2 className='sectionTitle'>About Me</h2>
        <div className="about-container">
        <img src={AboutImg} alt="AboutImage" className='aboutImg'/>   

            <div className="about-content">
                <div className="about-info">
                    <div className="info-box">
                        <i class='bx bxs-graduation about-icon'></i>
                        <h3 className="infoTitle">BE.CSE</h3>
                        <span className="infoSubtitle">2021-2025</span>
                    </div>
                    <div className="info-box">
                        <i class='bx bxs-award about-icon'></i>
                        <h3 className="infoTitle">Internship</h3>
                        <span className="infoSubtitle">Pofi Technology</span>
                    </div>
                    <div className="info-box">
                        <i class='bx bxs-award about-icon'></i>
                        <h3 className="infoTitle">Internship</h3>
                        <span className="infoSubtitle">Indie Spirit Technology</span>
                    </div>
                    
                </div>
                <p className="aboutDesc">
                    I am Vasuki,a montivated student at AAA College with a string passion for software developer and web technologies.I have developed a solid foundation in programming languages such as Java and JavaScript and have gained hands-on-experience with framework like React.js has allowed me to create dynamic and responsive web applications.
                    In addition to my technical abilities,I value teamwork and collaboration.Working on group projects has taught me the importance of effective coomunication and problem-solving within a team setting.I am always eagar to learn new things and adopt to challenges, which I belive are key qualities in the fast-evolving tech industry. 
                </p>
                <button className='aboutbtn btn'>
                <i class='bx bxs-download' ></i>
                    <a  download="vasuki" href={pdf} >Download Cv</a>
                </button>
            </div>
        </div>
    </section>
  )
}
