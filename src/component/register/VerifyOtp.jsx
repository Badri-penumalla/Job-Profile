import React, { useState } from 'react'
import InputField from './InputField'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import userServices from '../../service/userServices'
import toast from 'react-hot-toast'
import useUserContext from '../hooks/useUserContext'
import SpinnerLoader from '../../loaders/SpinnerLoader'

const VerifyOtp = () => {
  let {state:{email, userId}} = useLocation();
  console.log(location);

  const [formData, setFormData] = useState({
    userId: userId,
    otp: ""
  })

  const {globalState, setGlobalState} = useUserContext();
  console.log(globalState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    let {name, value} = e.target;
    setFormData((preVal)=>({...preVal, [name]: value}))
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    setGlobalState((prev)=>({...prev,isLoading: true}))

    try{
      let {data, status} = await userServices.verifyUser(formData);
      if(status == '200'){
        toast.success(`${data.message}`);
        setGlobalState((prev)=>({...prev,isLoading: false}))
          navigate("/login")
      }else{
        toast.error("something went wrong");
        setGlobalState((prev)=>({...prev,isLoading: false}))
      }
    }catch(error){
      toast.error("something went wrong");
      setGlobalState((prev)=>({...prev,isLoading: false}))
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

                    <button type='submit' className='bg-black text-white py-2 rounded-lg flex justify-center items-center gap-4' disabled={globalState.isLoading}>{globalState.isLoading?<>
                      <span>Verifying...</span>
                      <span><SpinnerLoader></SpinnerLoader></span>
                    </>: "Verify & Login"}</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default VerifyOtp