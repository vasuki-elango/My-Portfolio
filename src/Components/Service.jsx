import React from 'react'
import './Service.css'
import { serviceData } from '../assets/Data'

export const Service = () => {
  return (
    <section id='services'>
      <span className='sectionTitle'>What I do</span>
      <span className="sectionsubtitle">I specialize in software development,focusing on creating responsive and user-friendly web applications.With a strong foundation in programming languages like Java and JavaScript,I build efficient and scalable solutions.My expertise extends to frond-end frameworks like React.js, Where i craft dynamic interfaces that enhance user experience.</span>
      <div className="serviceBars"> 
        {
          serviceData.map((data)=>{
            return  <div className="serviceBar" key={data._id}>
            <img src={data.img} alt={data.title} />
            <div className="serviceBarText">
              <h2>{data.title}</h2>
              <p>{data.content}</p>
            </div>
          </div>
          })
        }
      </div>
    </section>
  )
}
