import React, { useState } from 'react';
import InputField from '../register/InputField';
import { MdOutlineMail } from 'react-icons/md';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import userServices from '../../service/userServices';
import useUserContext from '../hooks/useUserContext';
import SpinnerLoader from '../../loaders/SpinnerLoader';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate();

  const {globalState, setGlobalState} = useUserContext();
  console.log(globalState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShowPass = () =>{
        setShowPass(!showPass)
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    
    console.log("Logging in with:", formData);
    
    setGlobalState((prev)=>({...prev,isLoading: true}))
    
    try{
      let {data, status} = await userServices.loginUser(formData);
      console.log(data);
      setGlobalState((prev)=>({...prev,isLoading: false}))
      if(status == '200'){
        toast.success(`${data.message}`);
        setGlobalState((prev)=>({...prev, "user": data.user, "token": data.token}))
          navigate("/home")
      }
    }catch(error){
      console.log(error);
      setGlobalState((prev)=>({...prev,isLoading: false}))
      toast.error("something went wrong");
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-50'>
      <div className='w-1/3 rounded-2xl p-10 shadow-2xl max-md:w-1/2 max-sm:w-11/12 bg-white'>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          
          <div className='w-full flex justify-center items-center'>
            <h1 className='text-2xl font-bold'>Login</h1>
          </div>

          <InputField 
            type="email" 
            name="email" 
            value={formData.email} 
            handleChange={handleChange}
          >
            <MdOutlineMail />
          </InputField>

          <div>
            <InputField 
              type={showPass?"text":"password"} 
              name="password" 
              value={formData.password} 
              handleChange={handleChange}
            >
              <span onClick={handleShowPass}>{!showPass?<VscEyeClosed />:<VscEye />}</span>
            </InputField>
          </div>

          <button 
            type='submit' 
            className='bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors flex justify-center items-center gap-4'
            disabled={globalState.isLoading}
          >
            {globalState.isLoading?<>
            <span>Signing in...</span>
            <span><SpinnerLoader></SpinnerLoader></span>
          </>:"Login"}
          </button>

          <div className='text-center text-sm'>
            <span>Don't have an account? </span>
            <span 
              className='text-blue-600 cursor-pointer font-semibold'
              onClick={() => navigate('/')}
            >
              Register
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;