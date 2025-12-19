import React from 'react'

const SelectField = ({position_applying, handleChange}) => {
  return (
    <div className={`w-full h-10 flex justify-center items-center relative p-2 group focus-within:border-2 focus-within:rounded-sm ${position_applying?"border-2 rounded-sm":"border-b-2"}`}>
        <label htmlFor="position_applying" className={`absolute capitalize duration-200 left-3 group-focus-within:-top-3.5 group-focus-within:bg-white group-focus-within:text-[12px] p-1 ${position_applying?"-top-3.5 bg-white text-[12px]":"top-1 left-3"}`}>Position Applying </label>
            <select className='w-full h-9.5 outline-0' name="position_applying" id="position_applying" value={position_applying} onChange={handleChange}>
                <option disabled></option>
                <option>Development</option>
                <option>Testing</option>
                <option>Research</option>
                <option>Management</option>
            </select>
    </div>
  )
}

export default SelectField