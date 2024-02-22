import React from 'react'
import Typewriter from 'typewriter-effect';
import wave from '../images/wave.png';


const Intro = () => {
  const bio = ['Programmer', 'Frontend Developer']
  
  return (
    <div id='about' className='intro-container flex items-center bg-[#191924] pb-20'>

      {/* Main Container */}
      <div className='flex w-11/12 max-w-[980px] justify-between py-12 gap-x-12 gap-y-0 mx-auto'>

        {/* Left part */}
        <div className='flex flex-col w-1/2'>
          {/* Title */}
          <div className='text-[#F2F3F4] text-5xl font-bold leading-relaxed'>
            Hi, I am <br />
            Mohd Aadil
          </div>
          
  
          <div className='flex text-3xl leading-normal font-normal text-[#F2F3F4] gap-3'>
            I am a
            <span className='text-[#854CE6] cursor-pointer flex'>
            <Typewriter
              options={{
                strings: bio,
                autoStart: true,
                loop: true,
              }}
            />
            </span>
          </div>
  
          <p className='text-xl font-normal text-[#5b636b] leading-8 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius dolores provident ducimus expedita ipsam autem delectus omnis nihil facilis?</p>

          {/* Resume button */}
          <a href="https://drive.google.com/file/d/1ZUwP8S3ldHF4y7UTELAS9TBSuvJ0sPr8/view?usp=sharing">
            <button className='resume-btn'>
              Check Resume
              </button>
            </a>
  
        </div>
  
        {/* Right part */}
        <div className='w-1/2 flex justify-center items-center relative bg-gradient-to-b from-teal-500 rounded-full mx-auto overflow-hidden'>
          <img src={wave} alt="Emoji" />
        </div>
      </div>
      
      
    </div>
  )
}

export default Intro