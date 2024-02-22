import React from 'react'
import { DiCssdeck } from "react-icons/di";

const Navbar = () => {
  return (
    <div className='bg-[#191924] w-full h-20 flex justify-center items-center font-medium pt-0 z-1 transition-all sticky z-10'>
      
      <div className='flex items-center justify-between w-full h-16 overflow-hidden'>

        {/* Logo */}
        <div className='flex justify-center w-[80%] px-0 py-6 cursor-pointer items-center decoration-0 '>
          <a className='flex justify-center items-center text-white text-4xl cursor-pointer '>
            <DiCssdeck/>
            <span className='px-0 py-2 font-bold text-lg'>
              Portfolio
            </span>
          </a>
        </div>
        

        {/* Navbar */}
        <nav className='mx-auto'>
          <ul className='flex justify-center items-center gap-x-6 '>
            <li>
              <a className='text-[#F2F3F4] cursor-pointer transition-all hover:text-[#854CE6] font-medium '
              href="#about">About</a>
            </li>
            <li>
              <a className='text-[#F2F3F4] cursor-pointer transition-all hover:text-[#854CE6] font-medium'
              href="#skills">Skills</a>
            </li>
            <li>
              <a className='text-[#F2F3F4] cursor-pointer transition-all hover:text-[#854CE6] font-medium'
              href="#projects">Projects</a>
            </li>
          </ul>
        </nav>

        {/* Github button */}
        <div className='flex justify-center items-center px-0 py-6 h-full w-[80%]'>
            <button className='bg-transparent border-y-2 border-[#854CE6] text-[#854CE6] flex justify-center items-center px-3 py-[20px] cursor-pointer h-[70%] rounded-full hover:bg-[#854CE6] hover:text-white '>
              <a href="https://github.com/aaadil123">
              Github Profile
              </a>
            </button>
        </div>
        
      </div>      
      
    </div>
  )
}

export default Navbar