import React, { useState } from 'react'
import InputField from './InputField'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import userServices from '../../service/userServices'
import toast from 'react-hot-toast'

const VerifyOtp = () => {
  let {state:{email, userId}} = useLocation();
  console.log(location);

  const [formData, setFormData] = useState({
    userId: userId,
    otp: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    let {name, value} = e.target;
    setFormData((preVal)=>({...preVal, [name]: value}))
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try{
      let {data, status} = await userServices.verifyUser(formData);
      if(status == '200'){
        toast.success(`${data.message}`);
          navigate("/login")
        }else{
          toast.error("something went wrong");
        }
      } catch(error){
          toast.error("something went wrong");
      }
  }
  return (
    <>
        <div className='size-full flex justify-center items-center bg-gray-50'>
            <div className='w-1/3 h-5/12 bg-white rounded-2xl p-10 shadow-2xl max-md:w-1/2 max-sm:w-9/10'>
                <form action="" className='size-full flex flex-col gap-5' onSubmit={handleSubmit}>
      
                    <div className='w-full h-10 flex justify-center items-center'>
                      <h1 className='text-2xl font-bold'>Verify OTP</h1>
                    </div>

                    <div>
                        <span>Email: </span>
                        <span>{email}</span>
                    </div>

                    <div>
                      <InputField type="text" name="otp" value={formData.otp} handleChange={handleChange}>
                        <MdOutlineDriveFileRenameOutline />
                      </InputField>
                    </div>

                    <button type='submit' className='bg-black text-white py-2 rounded-lg'>Verify & Login</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default VerifyOtp