import React from 'react'
import { langu, Tools } from '../assets/Data'

export const Skills = () => {   
  return (
    <section className='mx-auto max-w-[55rem] p-5' id='skills'>
        <h2 className='sectionTitle'>My Skills</h2>
        <div className="grid my-5 sm:grid-cols-2 gap-5">
            {/* techincal skills */}
            <div className="bg-zinc-800 rounded-2xl p-5">
                <h3 className="text-xl font-bold text-center py-2">Languages</h3>
                <div className="grid grid-cols-2">
                    {
                        langu.map((lang)=>{
                            return <div className="p-4" key={lang._id}>
                            <h3 className="text-xl font-bold">{lang.name}</h3>
                            <span className="text-[0.8rem] font-semibold">{lang.level}</span>
                        </div>
                        })
                    }
                </div>
            </div>

            {/* tools */}
            <div className="bg-zinc-800 rounded-2xl p-5">
                <h3 className="text-xl font-bold text-center py-2">Tools</h3>
                <div className="grid grid-cols-2">  
                    {
                        Tools.map((tool)=>{
                            return <div className="p-4" key={tool._id}>
                            <h3 className="text-xl font-bold">{tool.name}</h3>
                            <span className="text-[0.8rem] font-semibold">{tool.level}</span>
                        </div>
                        })
                    }
                </div>
            </div>
            
        </div>
    </section>
  )
}
