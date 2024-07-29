import React from 'react'
import './Service.css'
import uiux from '../assets/uiux.png'
import web from '../assets/web.png'
import prog from '../assets/prog.png'

export const Service = () => {
  return (
    <section id='services'>
      <span className='sectionTitle'>What I do</span>
      <span className="sectionsubtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae adipisci consequuntur recusandae eius ratione corrupti beatae illo? Delectus, accusantium. Ad vel nesciunt nihil vitae distinctio dolores eveniet adipisci laudantium!</span>
      <div className="serviceBars">
        <div className="serviceBar">
          <img src={uiux} alt="UI/UX" />
          <div className="serviceBarText">
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere quo, sint consequuntur maiores quisquam.</p>
          </div>
        </div>
        <div className="serviceBar">
          <img src={web} alt="Web" />
          <div className="serviceBarText">
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere quo, sint consequuntur maiores quisquam.</p>
          </div>
        </div>
        <div className="serviceBar">
          <img src={prog} alt="Web" />
          <div className="serviceBarText">
            <h2>Software Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere quo, sint consequuntur maiores quisquam.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
