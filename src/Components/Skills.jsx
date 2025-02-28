import React from 'react'
import './Skills.css'
import { langu, Tools } from '../assets/Data'

export const Skills = () => {
   
  return (
    <section id='skills'>
        <h2 className='sectionTitle'>My Skills</h2>
        <div className="skill-container"> 
            <div className="skill-content">
                <h3 className="skill-title">Languages</h3>
                <div className="skill-group">
                    {
                        langu.map((lang)=>{
                            return <div className="skill-data" key={lang._id}>
                            <h3 className="skill-name">{lang.name}</h3>
                            <span className="skill-level">{lang.level}</span>
                        </div>
                        })
                    }
                </div>
            </div>
            <div className="skill-content">
                <h3 className="skill-title">Tools</h3>
                <div className="skill-group">  
                    {
                        Tools.map((tool)=>{
                            return <div className="skill-data" key={tool._id}>
                            <h3 className="skill-name">{tool.name}</h3>
                            <span className="skill-level">{tool.level}</span>
                        </div>
                        })
                    }
                </div>
            </div>
            
        </div>
    </section>
  )
}
