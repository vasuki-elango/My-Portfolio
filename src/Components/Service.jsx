import React from 'react'
import './Service.css'
import uiux from '../assets/uiux.png'
import web from '../assets/web.png'
import prog from '../assets/prog.png'

export const Service = () => {
  return (
    <section id='services'>
      <span className='sectionTitle'>What I do</span>
      <span className="sectionsubtitle">I specialize in software development,focusing on creating responsive and user-friendly web applications.With a strong foundation in programming languages like Java and JavaScript,I build efficient and scalable solutions.My expertise extends to frond-end frameworks like React.js, Where i craft dynamic interfaces that enhance user experience.</span>
      <div className="serviceBars">
        <div className="serviceBar">
          <img src={uiux} alt="UI/UX" />
          <div className="serviceBarText">
            <h2>UI/UX Design</h2>
            <p>Desgining intutive,visually appealing interfaces that priorotize user experience through thoughtful layouts,responsive designs and seamless interaction.</p>
          </div>
        </div>
        <div className="serviceBar">
          <img src={web} alt="Web" />
          <div className="serviceBarText">
            <h2>Web Design</h2>
            <p>Create clean,responsive websites that are visually appealing and user-friendly,ensuring seamless experiences across all devices and platforms.</p>
          </div>
        </div>
        <div className="serviceBar">
          <img src={prog} alt="Web" />
          <div className="serviceBarText">
            <h2>Software Developer</h2>
            <p>Building robust,effcient java applicatons with a focus on clean code,scalability, and seamless integration for diverse software development</p>
          </div>
        </div>
      </div>
    </section>
  )
}
