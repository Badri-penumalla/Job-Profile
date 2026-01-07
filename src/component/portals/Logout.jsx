import React from 'react'
import { createPortal } from 'react-dom'
import useUserContext from '../hooks/useUserContext'

const Logout = ({setShowPortal}) => {
    let {globalState, setGlobalState} = useUserContext()
    const handleClickNo = (e) =>{
        e.stopPropagation()     // Prevents clicks passing through
        setShowPortal(false)    // Tells SideNav to hide this component
    }
    const handleClickYes = () =>{
        setGlobalState({
            user: null,         // Wipes user data
            token: null,        // Destroys the auth token
            isLoading: false,
            companies:[]        // Clears data
        })
    }

  return createPortal(<div className='bg-black/20 h-screen w-screen fixed left-0 top-0 flex justify-center items-center'>
    <div className='size-1/2 bg-black/80 flex justify-center items-center flex-col gap-40 p-20 rounded-2xl'>
        <div className='text-4xl font-bold text-white'>
            <h1>Are you sure you want to logout?</h1>
        </div>
        <div className='flex w-full h-10 gap-10'>
            <button className='grow text-2xl text-white rounded-sm bg-red-500' onClick={handleClickYes}>Yes</button>
            <button className='grow text-2xl text-white rounded-sm bg-lime-500' onClick={handleClickNo}>No</button>
        </div>
    </div>
  </div>, document.getElementById('logout'))
}

export default Logout