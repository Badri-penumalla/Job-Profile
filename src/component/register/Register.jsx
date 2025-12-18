import React from 'react'
import { MdOutlineMail } from "react-icons/md";

const Register = () => {
  return (
    <div className='size-full flex justify-center items-center'>
      <div className='w-1/3 h-9/10 rounded-2xl p-10 shadow-2xl'>
        <form action="" className='size-full'>
          <div className='w-full h-10 flex justify-center items-center'>
            <h1 className='text-2xl font-bold'>Register</h1>
          </div>

          <div className='w-full h-10 flex justify-center items-center relative border-b-2 p-2 group focus-within:border-2 focus-within:rounded-sm'>
            <input type="email" name="" id="email" className='size-full outline-0'/>
            <label htmlFor="email" className='absolute duration-200 top-1 left-3 group-focus-within:-top-3.5 group-focus-within:bg-white group-focus-within:text-[12px] p-1'>Email</label>
            <MdOutlineMail />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register