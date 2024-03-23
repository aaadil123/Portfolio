import React from 'react';
// import weather_app from '../images/weather_app.png';

const ProjectCard = ({project}) => {
    function clickHandler() {
        window.open('`{project.url}`');
    }
    
  return (
    <div>
        {/* Card */}
        <div className='project-card w-[350px] h-[560px] bg-[#171721] cursor-pointer rounded-xl overflow-hidden transition-all px-[26px] py-[20px] flex flex-col gap-[14px]'>
            <img src={project.image}
            className='w-[100%] h-[180px] rounded-xl object-cover shadow-lg ' />

            {/* tags */}
            <div className='flex flex-wrap mx-[8px] my-[0px]'>
                {
                    project.tags.map( (tag) => (
                        <div className='text-[14px] font-medium text-[#854CE6] mx-[4px] my-[8px] px-[4px] py-[4px] rounded bg-[#27193e] '>
                            {tag}
                        </div>
                    ))
                }       
            </div>

            {/* Name and Desc */}
            <div>
                <h1 className='text-[28px] font-medium text-[#c3c4c5] mx-[6px] my-[8px] '>{project.title}</h1>
                <p className='text-[16px] font-normal text-[#c3c4c5] mx-[8px] my-[6px] overflow-y-clip'>{project.description}</p>
            </div>


            

            {/* <div className='flex justify-center'>
                <button className='text-[#c3c4c5] text-xl font-medium bg-[#7538de] rounded px-8 py-1 mt-5 hover:bg-[#5a26b4] transition-all'
                onClick={clickHandler}>
                    Live Demo
                </button>
            </div> */}
        </div>        

    </div>
    
  )
}

export default ProjectCard