import React from 'react'
import AboutImg from '../assets/Me.jpg'
import './About.css'

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus cupiditate quidem voluptate blanditiis ipsa suscipit doloremque fugiat itaque omnis!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, sequi adipisci porro iusto iste praesentium inventore provident explicabo. Id error ipsam itaque reprehenderit non beatae numquam quas aliquam nostrum eligendi.</p>
                <button className='aboutbtn btn'>
                <i class='bx bxs-download' ></i>
                    <a  download="" href='https://wa/me' >Download Cv</a>
                </button>
            </div>
        </div>
    </section>
  )
}
