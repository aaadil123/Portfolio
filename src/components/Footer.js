import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='flex justify-center items-center mt-16 mb-4'>
        <div className='w-full max-w-[1200px] flex flex-col justify-center items-center p-[1rem] text-[#F2F3F4] mt-8 gap-y-4'>

            <div className='text-2xl font-medium text-[#854CE6] '>
                Mohd Aadil
            </div>

            <nav className='w-full max-w-[800px] flex justify-center items-center gap-8 mb-2'>

                <a className='text-lg text-[#F2F3F4] hover:text-[#854CE6] transition-all '
                href="#about">About</a>

                <a className='text-lg text-[#F2F3F4] hover:text-[#854CE6]  transition-all'
                href="#skills">Skills</a>

                <a className='text-lg text-[#F2F3F4] hover:text-[#854CE6]  transition-all'
                href="#projects">Projects</a>

            </nav>

            {/* Icons */}
            <div className='flex'>
                <AiFillFacebook className='inline-block text-2xl text-[#F2F3F4] mx-6 hover:text-[#854CE6]  transition-all' />
                <AiFillTwitterSquare className='inline-block text-2xl text-[#F2F3F4] mx-6 hover:text-[#854CE6]  transition-all'/>
                <AiFillLinkedin className='inline-block text-2xl text-[#F2F3F4] mx-6 hover:text-[#854CE6]  transition-all'/>
                <AiFillGithub className='inline-block text-2xl text-[#F2F3F4] mx-6 hover:text-[#854CE6]  transition-all'/>
                <AiFillInstagram className='inline-block text-2xl text-[#F2F3F4] mx-6 hover:text-[#854CE6]  transition-all'/>
            </div>

            <p className='mt-8 text-sm text-center '>&copy; 2024 Mohd Aadil. All rights reserved</p>

        </div>
    </div>
  )
}

export default Footer