import React, { useState } from 'react';
import InputField from '../register/InputField';
import { MdOutlineLock, MdOutlineMail } from 'react-icons/md';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { validatePassword } from 'val-pass';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Initialize password validation logic
  const { validateAll } = validatePassword(formData.password, 8);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Password validation logic similar to Register.jsx
    if (name === 'password') {
      const { getAllValidationErrorMessage } = validatePassword(value, 8);
      setErrorMessage(getAllValidationErrorMessage());
      if (value === '') {
        setErrorMessage("");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Basic Validation
    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    // You can add an API call here
    console.log("Logging in with:", formData);
    
    // Simulate successful login
    toast.success("Login Successful!");
    
    // Navigate to dashboard or home
    // navigate("/dashboard"); 
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
            placeholder="Email Address"
          >
            <MdOutlineMail />
          </InputField>

          <div>
            <InputField 
              type="password" 
              name="password" 
              value={formData.password} 
              handleChange={handleChange}
              placeholder="Password"
            >
              <MdOutlineLock />
            </InputField>
            {errorMessage && !validateAll() && (
              <p className='text-red-500 text-xs mt-1'>{errorMessage}</p>
            )}
          </div>

          <button 
            type='submit' 
            className='bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors'
          >
            Login
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