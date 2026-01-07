import React from 'react'

const InputField = ({type = 'text', name, value, handleChange, children, isError}) => {
  return (
    <div className={`w-full h-10 flex justify-center items-center relative p-2 group focus-within:border-2 focus-within:rounded-sm ${value?"border-2 rounded-sm":"border-b-2"} ${isError ? "border-red-500 text-red-500" : "border-black"}`}>
    
            <input type={type} id={name} className={`size-full outline-0 ${isError ? "text-red-500" : "text-black"}`} value={value} name={name} onChange={handleChange}/>
    
            <label htmlFor={name} className={`absolute capitalize duration-200 left-3 p-1 group-focus-within:-top-3.5 group-focus-within:bg-white group-focus-within:text-[12px] ${value?"-top-3.5 bg-white text-[12px]":"top-1 left-3"} ${isError ? "text-red-500" : "group-focus-within:text-black"}`}>{name}</label>
    
            <div className={isError ? "text-red-500" : "text-black"}>
              {children}
            </div>
    </div>
  )
}

export default InputField