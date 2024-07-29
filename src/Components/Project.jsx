import React from 'react'
import './Project.css'
import bgMe from '../assets/Me.jpg'

export const Project = () => {
  return (
    <section id="project">
        <h2 className="sectionTitle">My Portfolio</h2>
        <span className="sectionsubtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam quod alias vitae possimus, beatae officia aut ad ipsa nisi nihil, reiciendis blanditiis odit illum nostrum culpa suscipit ut quos.</span>
        <div className="workings">
            <img src={bgMe} alt="" />
            <img src={bgMe} alt="" />
            <img src={bgMe} alt="" />
            <img src={bgMe} alt="" />
            <img src={bgMe} alt="" />
            <img src={bgMe} alt="" />
        </div>
        <button className="workBtn">
            See More
        </button>
    </section>
  )
}
