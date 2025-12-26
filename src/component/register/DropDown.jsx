import { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const DropDown = ({dropDownOpt, nameofEle, selectedEle, setFormData, singleSelect = false}) => {
    const [ShowDrop, setShowDrop] = useState(false)
    // console.log(nameofEle);
    console.log(selectedEle);
    const handleDrop = (e) => {
        setShowDrop(!ShowDrop)
    }
    const [dd, SetDd] = useState(dropDownOpt)
    const handleSelect=(e, val)=>{
        e.stopPropagation()

        if(singleSelect){
            setFormData((prev)=>({...prev,[nameofEle]: val}))
            SetDd(dd.filter((opt)=>opt!==val))
            setShowDrop(false)
        }else{
            if(selectedEle.includes(val)) return;
            setFormData((prev)=>({...prev,[nameofEle]:[...prev[nameofEle], val]}))
            SetDd(dd.filter((opt)=>opt!==val))
        }
    }
    const handleDelete=(e, val)=>{
        e.stopPropagation()
        setFormData((prev)=>({...prev,[nameofEle]: singleSelect? "" :prev[nameofEle].filter((ele)=>ele!==val)}))
        SetDd([...dd, val])
    }

    const isEmpty = singleSelect ? !selectedEle : selectedEle.length === 0;
    const selectedArray = singleSelect ? (selectedEle ? [selectedEle] : []) : selectedEle;
  return (
    <div className='border-b-2 min-h-10 w-full relative py-2' onClick={handleDrop}>
        <div className='size-full flex justify-between items-center px-3 cursor-pointer'>
            <div className='overflow-x-scroll'>
                {isEmpty ? (
                    <span className='capitalize'>{nameofEle}</span> 
                ) : (
                    <div className='flex flex-nowrap items-center gap-2'>
                        {
                            selectedArray.map((ele,index)=>
                                <span key={index} className='w-full flex items-center gap-2 uppercase text-nowrap min-w-fit bg-gray-200 rounded-2xl p-2 mb-2'>
                                    {ele}<RxCross1 className='text-red-300 flex items-center' onClick={(e)=>{
                                        handleDelete(e,ele)
                                    }}/>
                                </span>
                            )
                        }
                    </div>
                )}
            </div>

            <span className={`duration-100 ${ShowDrop?"rotate-180":"rotate-0"}`}><IoMdArrowDropdown /></span>
        </div>
        
        <div>
            {ShowDrop && <div className='absolute z-50 shadow-lg border-gray-300 bg-gray-100 rounded-br-2xl rounded-bl-2xl border-2 w-full top-9.5 max-h-60 overflow-y-scroll'>
                {
                    dd.map((opt, index)=>(
                    <div key={index} className='w-full min-h-3 p-3 hover:bg-gray-300 cursor-pointer' onClick={(e)=>{
                        handleSelect(e, opt)}
                        }>
                            <span className='uppercase font-medium text-sm'>
                                {opt}    
                            </span>    
                        </div>
                    ))
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