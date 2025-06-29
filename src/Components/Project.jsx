import { Projectdata }from '../data/Project'
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <section className='mx-auto max-w-[70rem] p-12 md:p-5' id='project'>
        <h2 className="sectionTitle">My Portfolio</h2>

        {/* my project content */}
        <p className="py-3 text-center">Explore my projects that showcase skills in the MERN stack, UI/UX design, and front-end development. From responsive web apps to clean interfaces, each project reflects my focus on building functional, user-friendly, and visually appealing solutions using modern technologies.</p>

        {/* projects */}
        <div className="grid lg:grid-cols-3 place-items-center sm:grid-cols-2 gap-8 my-6">
        {
          Projectdata.map((data)=>{
            return <ProjectCard data={data} key={data._id}/>
          })
        }
        </div>
    </section>
  )
}
