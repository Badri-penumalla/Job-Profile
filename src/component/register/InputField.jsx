import React from 'react'

const InputField = ({type = 'text', name, value, handleChange, children}) => {
  return (
    <div className={`w-full h-10 flex justify-center items-center relative p-2 group focus-within:border-2 focus-within:rounded-sm ${value?"border-2 rounded-sm":"border-b-2"}`}>
    
            <input type={type} id={name} className='size-full outline-0' value={value} name={name} onChange={handleChange}/>
    
            <label htmlFor={name} className={`absolute capitalize duration-200 left-3 group-focus-within:-top-3.5 group-focus-within:bg-white group-focus-within:text-[12px] p-1 ${value?"-top-3.5 bg-white text-[12px]":"top-1 left-3"}`}>{name}</label>
    
            {children}
    </div>
  )
}

export default InputField