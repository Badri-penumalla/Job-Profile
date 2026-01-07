import React, { useState } from 'react'
import useUserContext from '../component/hooks/useUserContext';
import SideNav from './sideNav/SideNav';
import DashBoard from './dashboard/DashBoard';

const Home = () => {
  const {globalState} = useUserContext();
  // console.log(globalState);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseIn = () =>{
    setIsOpen(true)
  }
  const handleMouseOut = () =>{
    setIsOpen(false)
  }
  const handleClick = () =>{
    if(!isOpen){            //If it's closed, Open it. 
        setIsOpen(true)     //If it's already Open, DO NOTHING.
    }
  }
  return (
    <div className='size-full'>
      {isOpen && (
        <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40 sm:hidden"
            onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div className={`w-80 h-full fixed -left-72 duration-150 p-5 z-50 ${isOpen?"left-0":"-left-72"}`} onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} onClick={handleClick}>

        <SideNav closeSideNav={() => setIsOpen(false)}/>

      </div>
      <div className={`duration-100 ${isOpen ? "ml-82" : "ml-10"} ${isOpen? "max-sm:hidden" : ""}`}>
        <DashBoard/>
      </div>
    </div>
  )
}

export default Home