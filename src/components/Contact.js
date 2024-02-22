import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";


function Contact() {
  return (
    <div className='relative'>

        <div className='flex flex-col items-center justify-center my-12'>
            <p className='text-center text-[14px] max-w-[600px] text-[#909294] '>Get In Touch</p>
            <h1 className='text-5xl font-semibold mt-[8px] mb-[30px] max-w-[600px] text-[#f2f3f4] '>Contact Me</h1>

            <div className='contact-card text-[16px] font-medium text-[#909294] rounded-3xl border-[2px] border-[#54585c] px-[18px] py-[15px] gap-[8px] flex flex-col gap-y-2'>
                {/* Email */}
                <div className='flex justify-center items-center gap-1 cursor-pointer '>
                    <MdOutlineMailOutline />
                    <p>aaadil98138@gmail.com</p>
                </div>

                {/* LinkedIn */}
                <div className='flex justify-center items-center gap-1 cursor-pointer '>
                    <FaLinkedin />
                    <p>https://www.linkedin.com/in/mohd-aadil-738b15213/</p>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Contact