import React from 'react'
import { projects } from '../data/constants'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='projects' className='project-container flex flex-col justify-center items-center  gap-10 pt-2.5 pb-28'>

        {/* Title */}
        <div className='flex flex-col items-center justify-center gap-3'>
          <h1 className='text-5xl font-semibold mt-5 text-[#F2F3F4] '>Projects</h1>

          <p className='text-center text-lg max-w-[600px] text-[#b1b2b3] '>I have worked on a wide range of projects. Here some of my projects.</p>
        </div>

        {/* Cards */}
        <div className='flex flex-wrap justify-center items-center gap-8 max-w-[1200px]'>
          {
            projects.map( (project) => (
              <ProjectCard project={project} />
            ))
          }          
        </div>
    </div>
  )
}

export default Projects