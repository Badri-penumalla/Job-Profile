import React from 'react'
import { GoVerified, GoUnverified  } from "react-icons/go";
import useUserContext from '../../component/hooks/useUserContext';

const SideNav = () => {
    const {globalState} = useUserContext();
    
    let {user:{email, name, mobile, yearOfPassout, isVerified, positionApplyingFor, college, skills, instituteName, joinedInstitute, appliedCompanies}} = globalState
    
  return (
    <div className='w-full h-full rounded-2xl shadow-[0px_0px_25px_1px_#0005] p-5 bg-white flex flex-col gap-5'>
        <div className='flex gap-5 items-center font-extrabold capitalize'>
            <div className='size-20 bg-gray-400 rounded-2xl text-6xl font-extrabold text-white flex justify-center items-center p-10'>
                {name.slice(0,1)}
            </div>
            
            <div>
                <div>{name}</div>
                <div className='text-sm font-semibold text-gray-600'>{mobile}</div>
                <div className='text-xs text-gray-500 font-medium'>Batch: {yearOfPassout}</div>
            </div>
        </div>

        <hr className="border-gray-100" />
        
        <div className='flex flex-col gap-2 text-sm text-gray-700'>
            <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase font-bold">Email</span>
                <span>{email}</span>
            </div>
                
            <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase font-bold">Position</span>
                <span className='capitalize text-blue-600 font-semibold'>{positionApplyingFor}</span>
            </div>

            <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase font-bold">College name</span>
                <span className='uppercase'>{college}</span>
            </div>

            {joinedInstitute && (
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase font-bold">Institute name</span>
                    <span className='uppercase'>{instituteName}</span>
                </div>
            )}
        </div>

        <div className='flex flex-wrap flex-col gap-1'>
            <span className="text-xs text-gray-400 uppercase font-bold">Skills</span>
            <div className='flex flex-row gap-3'>
            {
                skills.map((skill, index)=><div key={index} className='bg-green-50 rounded-xl border-green-500 p-1.5 border-2'>
                    <span>{skill}</span>
                </div>
                )
            }
            </div>
        </div>
        
        <div className='flex flex-row h-30 w-100%'></div>
        <hr className="border-gray-100" />

        <div className='grow items-center justify-end flex flex-col'>
            <div className='flex justify-center text-[10px] font-bold'>TOTAL NO OF COMPANIES APPLIED</div>
            <div className='flex justify-center text-5xl'>{appliedCompanies.length}</div>
        </div>
    </div>
  )
}

export default SideNav