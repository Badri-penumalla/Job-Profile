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
import { useNavigate } from 'react-router-dom';

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

  let navigate = useNavigate();

  let [errorMessage, setErrorMessage] = useState("");

  let {validateAll} = validatePassword(formData.password, 8)
  
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
    let {name, email, mobile, password, confirmPassword, positionApplyingFor, skills, yearOfPassout, joinedInstitute, instituteName, college} = formData;
    
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

    navigate("/verify-otp", {
      state: {
        email: formData.email
      }
    })
  }

  return (
    <div className='size-full flex justify-center items-center bg-gray-50'>
      <div className='w-1/3 h-9/10 rounded-2xl p-10 shadow-2xl overflow-y-scroll max-md:w-1/2 max-sm:w-9/10'>
        <form action="" className='w-full flex flex-col gap-5' onSubmit={handleSubmit}>
      
          <div className='w-full h-10 flex justify-center items-center'>
            <h1 className='text-2xl font-bold'>Register</h1>
          </div>

          <InputField type="text" name="name" value={formData.name} handleChange={handleChange}>
            <MdOutlineDriveFileRenameOutline />
          </InputField>

          <InputField type="email" name="email" value={formData.email} handleChange={handleChange}>
            <MdOutlineMail />
          </InputField>
          
          <InputField type="tel" name="mobile" value={formData.mobile} handleChange={handleChange}>
            <AiOutlineMobile />
          </InputField>
          
          <InputField type="password" name="password" value={formData.password} handleChange={handleChange}>
            <RiLockPasswordLine />
          </InputField>

          {
            errorMessage && !validateAll() && (<p className='text-red-500 text-sm'>{errorMessage}</p>)
          }

          <InputField type="password" name="confirmPassword" value={formData.confirmPassword} handleChange={handleChange}>
            <RiLockPasswordFill />
          </InputField>
          
          <DropDown dropDownOpt={['Frontend Developer','Backend Developer','Full Stack Developer','UI/UX Designer']} nameofEle="positionApplyingFor" selectedEle={formData.positionApplyingFor} setFormData={setFormData} singleSelect={true}></DropDown>

          <DropDown dropDownOpt={['html','css','js','java','advance java','react','sql','plsql']} nameofEle="skills" selectedEle={formData.skills} setFormData={setFormData}></DropDown>
          
          <InputField type="number" name="yearOfPassout" value={formData.yearOfPassout} handleChange={handleChange}>
            <LuGraduationCap />
          </InputField>

          <InputField type="text" name="college" value={formData.college} handleChange={handleChange}>
            <PiBuildings />
          </InputField>

          <label htmlFor="">
            <input type="checkbox" name="joinedInstitute" checked={formData.joinedInstitute} onChange={handleChange} />
            <span className="ml-2">Joined Institute</span>
          </label>

          {
            formData.joinedInstitute && (
            <InputField type="text" name="instituteName" value={formData.instituteName} handleChange={handleChange}>
              <HiOutlineBuildingLibrary />
            </InputField> )
          }


          <button type='submit' className='bg-black text-white py-2 rounded-lg'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register