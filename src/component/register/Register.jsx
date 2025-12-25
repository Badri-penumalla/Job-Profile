import { useState } from 'react'
import InputField from './InputField';
import DropDown from './DropDown';
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import { PiBuildings } from "react-icons/pi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { validatePassword } from 'val-pass';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      positionApplyingFor: "",
      skills: [],
      yearOfPassout: "",
      joinedInstitute: false,
      instituteName: "",
      college: ""
    }
  )

  const {name, email, mobile, password, confirmPassword, positionApplyingFor, skills, yearOfPassout, joinedInstitute, instituteName, college} = formData;

  let [errorMessage, setErrorMessage] = useState("");

  let {validateAll} = validatePassword(password, 8)
  
  const handleChange = (e) => {
    let {name, value, type, checked} = e.target;
    if(name == 'password'){
      let {getAllValidationErrorMessage} = validatePassword(value, 8);
      setErrorMessage(getAllValidationErrorMessage());
        if(value == ''){
          setErrorMessage("");
        } 
    }
    
    // setFormData((preVal)=>({...preVal, [name]:value}));
    setFormData((prev)=>({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // let {name, email, mobile, password, confirmPassword, positionApplyingFor, skills, yearOfPassout, joinedInstitute, instituteName, college} = formData;
    
    if(!name || !email || !mobile || !password || !confirmPassword || !positionApplyingFor || !skills.length || !yearOfPassout || !instituteName || !college){
      toast.error("Please fill all the fields")
      return;
    }

    if(password !== confirmPassword){
      toast.error("Password and Confirm Password should match")
      return;
    }

    if(joinedInstitute && !instituteName){
      toast.error("Please enter institute name")
      return;
    }

    toast.success("Registered Successfully")

    console.log(formData);
  }

  const handleClickDrop = (e, nameofEle, value) =>{
    // console.log(nameofEle, value)
    setFormData((preVal)=>({...preVal, [nameofEle]:[...preVal[nameofEle], value]}))
    e.stopPropagation()
  }
  return (
    <div className='size-full flex justify-center items-center'>
      <div className='w-1/3 h-9/10 rounded-2xl p-10 shadow-2xl overflow-y-scroll max-md:w-1/2 max-sm:w-9/10'>
        <form action="" className='size-full flex flex-col gap-5' onSubmit={handleSubmit}>
      
          <div className='w-full h-10 flex justify-center items-center'>
            <h1 className='text-2xl font-bold'>Register</h1>
          </div>

          <InputField type="text" name="name" value={formData.name} handleChange={handleChange}><MdOutlineDriveFileRenameOutline /></InputField>
          <InputField type="email" name="email" value={email} handleChange={handleChange}><MdOutlineMail /></InputField>
          <InputField type="tel" name="mobile" value={mobile} handleChange={handleChange}><AiOutlineMobile /></InputField>
          <InputField type="password" name="password" value={password} handleChange={handleChange}><RiLockPasswordLine /></InputField>

          {
            errorMessage && !validateAll() && (<p className='text-red-500 text-sm'>{errorMessage}</p>)
          }

          <InputField type="password" name="confirmPassword" value={confirmPassword} handleChange={handleChange}><RiLockPasswordFill /></InputField>
          
          <DropDown dropDownOpt={['Frontend Developer','Backend Developer','Full Stack Developer','UI/UX Designer']} nameofEle="positionApplyingFor" handleClickDrop={handleClickDrop} selectedEle={positionApplyingFor} setFormData={setFormData}></DropDown>
          <DropDown dropDownOpt={['html','css','js','java','advance java','react','sql','plsql']} nameofEle="skills" handleClickDrop={handleClickDrop} selectedEle={skills} setFormData={setFormData}></DropDown>
          
          <InputField type="number" name="yearOfPassout" value={yearOfPassout} handleChange={handleChange}><LuGraduationCap /></InputField>
          <InputField type="text" name="college" value={college} handleChange={handleChange}><PiBuildings /></InputField>

          <label htmlFor="">
            <input type="checkbox" name="joinedInstitute" checked={joinedInstitute} onChange={handleChange} />
            <span className="ml-2">Joined Institute</span>
          </label>

          {
            joinedInstitute && (
            <InputField type="text" name="instituteName" value={instituteName} handleChange={handleChange}><HiOutlineBuildingLibrary /></InputField> )
          }


          <button type='submit' className=''>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register