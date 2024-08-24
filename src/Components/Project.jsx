import React from 'react'
import './Project.css'
import Library from '../assets/library.png'
import Quizapp from '../assets/quiz.png'
import gym from '../assets/gym.png'
import organic from '../assets/organic.png'
import recipe from '../assets/recipefinder.jpeg'
import anime from '../assets/anime.png'
import flower from '../assets/flower.png'

export const Project = () => {
  return (
    <section id="project">
        <h2 className="sectionTitle">My Portfolio</h2>
        <span className="sectionsubtitle">Creating dynamic and engaging fronnd-end experiences with modern web technologies,developing robust Java applications,and desiging intuitive UI/UX interfaces.My Projects blend functionality and aesthetics to deliver seamless,user-cenrric solutions that address real-world challenges and drive impactful results.</span>
        <div className="workings">
          <div className="projects-field">
            <h3>Library Management</h3>
            <img src={Library} alt="" />
            <a href="https://vasuki-elango.github.io/LibraryManagement/" target='__blank'>Live Demo</a>
          </div>
          <div className="projects-field">
            <h3>Organic Site</h3>
            <img src={organic} alt="" />
            <a href="https://vasuki-organic-site.netlify.app/" target='__blank'>Live Demo</a>
          </div>
          <div className="projects-field">
            <h3>Flower Shop</h3>
            <img src={flower} alt="" />
            <a href="https://vasuki-floweshop.netlify.app/">Live Demo</a>
          </div>
          <div className="projects-field">
            <h3>Quiz App</h3>
            <img src={Quizapp} alt="" />
            <a href="https://vasuki-elango.github.io/LibraryManagement/" target='__blank'>Live Demo</a>
          </div>
          <div className="projects-field">
            <h3>Recipe Finder</h3>
            <img src={recipe} alt="" />
            <a href="https://vasuki-elango.github.io/Recipe-Finder/">Live Demo</a>
          </div>
          <div className="projects-field">
            <h3>Gym Website</h3>
            <img src={gym} alt="" />
            <a href="https://www.figma.com/design/tjhq4D06q6o6kJOUiA3Tp7/GYM-WEBSITE?node-id=0-1&t=fXWU6cH5GSMyZMFg-1" target='__blank'>Live Demo</a>
          </div>
          <div className="projects-field">
            <h3>Anime Website</h3>
            <img src={anime} alt="" />
            <a href="https://www.figma.com/design/KS88bXjpcoQKAeDWm2Bvwm/anime?node-id=0-1&t=yvnmqPYMzAbbN574-1" target='__blank'>Live Demo</a>
          </div>
        </div>
    </section>
  )
}
