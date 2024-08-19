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
            <a href="https://vasuki-elango.github.io/LibraryManagement/" target='__blank'><img src={Library} alt="" /></a>
            <a href="https://vasuki-organic-site.netlify.app/" target='__blank'><img src={organic} alt="" /></a>
            <a href="https://vasuki-elango.github.io/QuizApplication/" target='__blank'><img src={Quizapp} alt="" /></a>
            <a href="https://www.figma.com/design/tjhq4D06q6o6kJOUiA3Tp7/GYM-WEBSITE?node-id=0-1&t=fXWU6cH5GSMyZMFg-1" target='__blank'><img src={gym} alt="" /></a>
            <a href="https://vasuki-floweshop.netlify.app/"><img src={flower} alt="" /></a>
            <a href="https://vasuki-floweshop.netlify.app/"><img src={recipe} alt="" /></a>
            <a href="https://www.figma.com/design/KS88bXjpcoQKAeDWm2Bvwm/anime?node-id=0-1&t=yvnmqPYMzAbbN574-1" target='__blank'><img src={anime} alt="" /></a>
        </div>
    </section>
  )
}
