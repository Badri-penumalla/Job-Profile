import { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const DropDown = ({dropDownOpt, nameofEle, handleClickDrop, selectedEle, setFormData}) => {
    const [ShowDrop, setShowDrop] = useState(false)
    // console.log(nameofEle);
    console.log(selectedEle);
    const handleDrop = (e) => {
        setShowDrop(!ShowDrop)
    }
    const [dd, SetDd] = useState(dropDownOpt)
    const handleClick=(val)=>{
        SetDd(dd.filter((ele)=>ele!=val))
    }
    const handleDeleteClick=(e, val)=>{
        e.stopPropagation()
        SetDd([...dd, val])
        setFormData((preVal)=>({...preVal, [nameofEle]:preVal[nameofEle].filter((ele)=>ele!=val)}))
    }
  return (
    <div className='border-b-2 h-10 w-full relative py-2' onClick={handleDrop}>
        <div className='size-full flex justify-between items-center px-3'>
            <div className='overflow-x-scroll'>
                {
                    selectedEle.length==0?<span className='capitalize'>{nameofEle}</span>:<div className='flex gap-5'>
                        {
                            selectedEle.map((ele,index)=>
                                <span key={index} className='w-full flex items-center gap-2 uppercase text-nowrap min-w-fit bg-gray-200 rounded-2xl p-2 mb-2'>
                                    {ele}<RxCross1 className='text-red-300 flex items-center' onClick={(e)=>{
                                        handleDeleteClick(e,ele)
                                    }}/>
                                </span>
                            )
                        }
                    </div>
                }
            </div>
            <span className={`duration-100 ${ShowDrop?"rotate-180":"rotate-0"}`}><IoMdArrowDropdown /></span>
        </div>
        
        <div>
            {ShowDrop && <div className='absolute z-50 shadow-lg border-gray-300 bg-gray-100 rounded-br-2xl rounded-bl-2xl border-2 w-full top-9.5 max-h-60 overflow-y-scroll'>
                {
                    dd.map((opt, index)=><div key={index} className='w-full min-h-3 p-3 hover:bg-gray-300 cursor-pointer' onClick={(e)=>{
                        handleClickDrop(e, nameofEle, opt)
                        handleClick(opt)
                        }}>
                            <span className='uppercase font-medium text-sm'>
                                {opt}    
                            </span>    
                        </div>)
                }
            </div>
            }
        </div>
    </div>
  )
}

export default DropDown

{/* div*10{$} */}
{/* <div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>10</div> */}