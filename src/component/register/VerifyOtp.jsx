import React from 'react'
import InputField from './InputField'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

const VerifyOtp = () => {
  let {state:{email}} = useLocation();
  console.log(location);
  
  return (
    <>
        <div className='size-full flex justify-center items-center bg-gray-50'>
            <div className='w-1/3 h-5/12 rounded-2xl p-10 shadow-2xl max-md:w-1/2 max-sm:w-9/10'>
                <form action="" className='size-full flex flex-col gap-5'>
      
                    <div className='w-full h-10 flex justify-center items-center'>
                      <h1 className='text-2xl font-bold'>Verify OTP</h1>
                    </div>

                    <div>
                        <span>Email: </span>
                        <span>{email}</span>
                    </div>

                    <div>
                      <InputField type="text" name="OTP">
                        <MdOutlineDriveFileRenameOutline />
                      </InputField>
                    </div>

                    <button type='submit' className='bg-black text-white py-2 rounded-lg'>Register</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default VerifyOtp