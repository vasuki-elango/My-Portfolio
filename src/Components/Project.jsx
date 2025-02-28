import React from 'react'
import './Project.css'
import { Projectdata }from '../assets/Project'

export const Project = () => {
  return (
    <section id="project">
        <h2 className="sectionTitle">My Portfolio</h2>
        <span className="sectionsubtitle">Creating dynamic and engaging web applications using the MERN stack, developing robust Java applications, and designing intuitive UI/UX interfaces. My projects blend functionality and aesthetics to deliver seamless, user-centric solutions that address real-world challenges and drive impactful results. I specialize in building responsive apps, integrating RESTful APIs for real-time data processing, and implementing secure database solutions. Additionally, I focus on optimizing performance, ensuring cross-browser compatibility, and leveraging modern design principles to craft visually appealing and accessible interfaces.</span>
        <div className="workings">
        {
          Projectdata.map((data)=>{
            return <div className="projects-field" key={data._id}>
            <h3>{data.title}</h3>
            <img src={data.pic} alt="" />
            <a href={data.link} target='__blank'>Live Demo</a>
          </div>
          })
        }
        </div>
    </section>
  )
}
