import React, { useState } from 'react'
import InputField from './InputField';
import SelectField from './SelectField'
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { PiBuildings } from "react-icons/pi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

const Register = () => {
  const [formData, setFormData] = useState(
    {
      name:"",
      email:"",
      mobile_no:"",
      password:"",
      confirm_password:"",
      yop:"",
      institute_name:"",
      college:"",
      position_applying:""
    }
  )
  const {email, name, mobile_no, password, confirm_password, yop, institute_name, college, position_applying} = formData;
  const handleChange = (e) => {
    let {name, value} = e.target;
    setFormData((preVal)=>({...preVal, [name]:value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    
  }
  return (
    <div className='size-full flex justify-center items-center'>
      <div className='w-1/3 h-9/10 rounded-2xl p-10 shadow-2xl'>
        <form action="" className='size-full flex flex-col gap-3' onSubmit={handleSubmit}>
          <div className='w-full h-10 flex justify-center items-center'>
            <h1 className='text-2xl font-bold'>Register</h1>
          </div>

          <InputField type="text" name="name" value={name} handleChange={handleChange}><MdOutlineDriveFileRenameOutline /></InputField>
          <InputField type="email" name="email" value={email} handleChange={handleChange}><MdOutlineMail /></InputField>
          <InputField type="tel" name="mobile_no" value={mobile_no} handleChange={handleChange}><AiOutlineMobile /></InputField>
          <InputField type="password" name="password" value={password} handleChange={handleChange}><MdOutlinePassword /></InputField>
          <InputField type="password" name="confirm_password" value={confirm_password} handleChange={handleChange}><MdOutlinePassword /></InputField>
          <SelectField position_applying={position_applying} handleChange={handleChange} />
          <InputField type="number" name="yop" value={yop} handleChange={handleChange}><LuGraduationCap /></InputField>
          <InputField type="text" name="institute_name" value={institute_name} handleChange={handleChange}><HiOutlineBuildingLibrary /></InputField>
          <InputField type="text" name="college" value={college} handleChange={handleChange}><PiBuildings /></InputField>


          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register