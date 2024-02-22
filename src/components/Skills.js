import React from 'react'
import { skills } from '../data/constants'

const Skills = () => {  
  return (
    <div id="skills" className='relative flex flex-col justify-center items-center w-full gap-3 pt-[25px] pb-24'>

      {/* Heading */}
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-5xl font-semibold mt-[20px] text-[#F2F3F4] '>Skills</h1>

        <p className='text-center text-[18px] max-w-[600px] text-[#b1b2b3] '>Here are some of my skills on whick i have been working on for the past 2 years.</p>
      </div>

      {/* Cards */}
      <div className='w-[100%] flex flex-wrap  mt-[30px] justify-center gap-[30px]'>
        {
          skills.map( (item) => (
            // Card
            <div className='skills-card w-[100%] max-w-[500px] bg-[#171721] border border-[#854CE6] rounded-[16px] px-[18px] py-[36px]'>

              <h1 className='text-[28px] font-semibold  text-[#b1b2b3] mt-[20px] text-center'>{item.title}</h1>
              <div className='flex justify-center flex-wrap gap-[12px] mt-[20px]'>
                {
                  item._skills.map( (skill) => (
                    <div className='text-[16px] font-medium text-[#54585c] rounded-lg border-[2px] border-[#54585c] flex justify-center items-center px-[12px] py-[16px] gap-[8px] '>
                      <img className='w-[24px] h-[24px]' src={skill.image} alt="" />
                      {skill.name}
                    </div>
                  ))
                }
              </div>

            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Skills


{/* // {
        //   skills.map( (item) => (
        //     <Card key={item.id} title={item.title}></Card>
        //   ))
        // } */}