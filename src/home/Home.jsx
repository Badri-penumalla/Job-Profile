import React, { useState } from 'react'
import useUserContext from '../component/hooks/useUserContext';
import SideNav from './sideNav/SideNav';
import DashBoard from './dashboard/DashBoard';

const Home = () => {
  const {globalState} = useUserContext();
  console.log(globalState);
  
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseIn = () =>{
    setIsOpen(true)
  }
  const handleMouseOut = () =>{
    setIsOpen(false)
  }
  const handleClick = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='size-full'>
      <div className={`w-80 h-full fixed -left-72 hover:left-0 duration-150 p-5 ${isOpen?"left-0":"-left-72"}`} onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} onClick={handleClick}>
        <SideNav/>
      </div>
      <div className={`duration-100 ${isOpen ? "ml-82" : "ml-10"} ${isOpen? "max-sm:hidden" : ""}`}>
        <DashBoard/>
      </div>
    </div>
  )
}

export default Home