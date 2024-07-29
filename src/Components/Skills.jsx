import React from 'react'
import './Skills.css'

export const Skills = () => {
  return (
    <section id='skills'>
        <h2 className='sectionTitle'>My Skills</h2>
        <div className="skill-container"> 
            <div className="skill-content">
                <h3 className="skill-title">Languages</h3>
                <div className="skill-group">
                    <div className="skill-data">
                        <h3 className="skill-name">Java</h3>
                        <span className="skill-level">Advances</span>
                    </div>
                    <div className="skill-data">
                        <h3 className="skill-name">My SQL</h3>
                        <span className="skill-level">Advances</span>
                    </div>
                    <div className="skill-data">
                        <h3 className="skill-name">HTML&CSS</h3>
                        <span className="skill-level">Advances</span>
                    </div>
                    <div className="skill-data">
                        <h3 className="skill-name">Java Script</h3>
                        <span className="skill-level">Advances</span>
                    </div>
                    <div className="skill-data">
                        <h3 className="skill-name">React js</h3>
                        <span className="skill-level">Advances</span>
                    </div>
                </div>
            </div>
            <div className="skill-content">
                <h3 className="skill-title">Tools</h3>
                <div className="skill-group">
                    <div className="skill-data">
                        <h3 className="skill-name">Figma</h3>
                        <span className="skill-level">Advances</span>
                    </div>
                    <div className="skill-data">
                        <h3 className="skill-name">GitHub</h3>
                        <span className="skill-level">Advances</span>
                    </div>
                    <div className="skill-data">
                        <h3 className="skill-name">Adobe XD</h3>
                        <span className="skill-level">Advances</span>
                    </div>
                    <div className="skill-data">
                        <h3 className="skill-name">Canva</h3>
                        <span className="skill-level">Advances</span>
                    </div>
                    <div className="skill-data">
                        <h3 className="skill-name">Word Press</h3>
                        <span className="skill-level">Advances</span>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}
