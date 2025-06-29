import { TbBrandGithubFilled } from "react-icons/tb";
import { LuSquareArrowOutUpRight } from "react-icons/lu";


export const ProjectCard = ({ data }) => {
    return (
       <div className="flex flex-col bg-white/5  border-gray-700 shadow-lg shadow-gray-700/10 rounded-xl gap-5 p-4  transition-all w-full h-full hover:scale-105" key={data._id}>
            <h3 className='font-semibold text-xl text-center'>{data.title}</h3>
            <div className='relative'>

                <img src={data.pic} alt="" className='h-[240px] lg:h-[200px]  w-full object-cover rounded-xl ' />

                <div className="flex items-center justify-end gap-4 pt-2 text-sm absolute bottom-2 right-2">
                    <a href={data.link} target='__blank' className='bg-amber-300 p-2 rounded-full text-black  hover:bg-amber-400 '>
                        <TbBrandGithubFilled />
                    </a>
                    <a href={data.demo} target='__blank' className='bg-amber-300 p-2 rounded-full text-black  hover:bg-amber-400 '>
                        <LuSquareArrowOutUpRight />
                    </a>
                </div>
            </div>

            <div className='flex items-center gap-2 flex-wrap text-xs'>
                {
                    data.tech.map((tech, index) => (
                        <span key={index}
                            className="bg-white/10 px-3.5 py-1.5 rounded-full"
                        >{tech}</span>
                    ))
                }
            </div>
            <p className='text-sm text-gray-400'>{data.description}</p>

        </div>
    )
}
