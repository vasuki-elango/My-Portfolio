import React from 'react'
import { Projectdata }from '../assets/Project'

export const Project = () => {
  return (
    <section className='mx-auto max-w-[65rem] p-5' id='project'>
        <h2 className="sectionTitle">My Portfolio</h2>

        {/* my project content */}
        <p className="py-3 text-center">Explore my diverse projects showcasing my expertise in the MERN stack, UI/UX design, and front-end development. From building responsive and user-centric web applications to creating seamless interfaces, each project highlights my dedication to crafting functional, scalable, and visually appealing solutions. These projects reflect my ability to integrate cutting-edge technologies with intuitive design, ensuring a smooth and engaging user experience.</p>

        {/* projects */}
        <div className="grid lg:grid-cols-3 place-items-center sm:grid-cols-2 gap-5 mt-3">
        {
          Projectdata.map((data)=>{
            return <div className="flex flex-col items-center border border-gray-700 rounded-md gap-5 p-3 px-8 hover:scale-105 transition-all" key={data._id}>
            <h3 className='font-semibold text-xl'>{data.title}</h3>
            <img src={data.pic} alt="" className='h-[140px] w-[250px] object-cover'/>
            <a href={data.link} target='__blank' className='bg-white px-3 py-2 rounded-full text-black transition-all hover:scale-110'>Live Demo</a>
          </div>
          })
        }
        </div>
    </section>
  )
}
