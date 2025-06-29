import React from 'react'
import { serviceData } from '../assets/Data'

export const Service = () => {
  return (
    <section className='mx-auto max-w-[55rem] p-5' id='services'>
      <p className='sectionTitle'>What I do</p>
      
      {/* service content */}
      <span className="block py-4 text-center mb-4">Offering comprehensive services in MERN stack development, UI/UX design, and front-end development, I specialize in building dynamic, responsive web applications with a focus on user-centered design and seamless functionality.</span>

      {/* my services */}
      <div className="flex flex-col gap-5 justify-center w-full md:w-3/4 mx-auto"> 
        {
          serviceData.map((data)=>{
            return  <div className="flex items-center justify-center gap-4 bg-zinc-800 rounded-xl p-5 px-8 " key={data._id}>
            <img src={data.img} alt={data.title} className='w-14 h-14 object-cover'/>
            <div className="">
              <h2 className='text-[1.5rem] font-bold'>{data.title}</h2>
              <p className='text-[0.8rem]'>{data.content}</p>
            </div>
          </div>
          })
        }
      </div>
    </section>
  )
}
