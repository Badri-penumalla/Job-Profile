import React from 'react'

const SkeletonLoaders = () => {
  return (
    <div className='h-70 w-100 min-w-100 max-sm:min-w-0 max-sm:w-full max-sm:h-90 bg-white rounded-2xl shadow-2xl p-5 flex flex-col gap-5 relative'>
            
            <div className='text-2xl font-bold w-full bg-gray-200 h-8 animate-pulse'>
              <span></span>
            </div>

            <div className='flex gap-2 overflow-x-scroll bg-gray-200 h-7 animate-pulse'>
              <span className='p-1.5 text-sm rounded-xl'></span>
            </div>

            <div className='flex gap-2 overflow-x-scroll bg-gray-200 h-7 animate-pulse'>
              <span className='p-1.5 text-sm rounded-xl'></span>
            </div>

            <div className='w-full flex gap-1 max-sm:flex-col bg-gray-200 h-6 animate-pulse'>
                <div className='grow flex items-center font-bold'>
                    <span className='pr-1'></span>
                    <span></span>
                </div>

                <div className='grow font-bold max-sm:flex max-sm:flex-col animate-pulse'>
                    <span></span>
                    <span className='text-red-500'></span>
                </div>
            </div>

            <div className='w-full h-10 bg-slate-200 rounded-2xl animate-pulse'>
              <button className='size-full flex justify-center items-center text-white font-bold'></button>
            </div>
    </div>
  )
}

export default SkeletonLoaders