'use client'

import { useState } from 'react'


import { FaAngleDown } from "react-icons/fa6";

const ToggleBox = ({ title, dates, skills  }) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`w-full border border-white border-opacity-30 bg-gray-800 rounded-md px-2 py-2 text-white text-center text-lg bg-opacity-45`}>
        <div className='flex flex-row items-center justify-between'>
            <div className={`w-full flex flex-row justify-between items-center`}>
            <h3 className='text-white font-extrabold'>{title} - {dates}</h3>
            

            <div className='hover:border-green-400 transition-all border border-green-600 rounded-md p-1'>{<FaAngleDown color='#43a047' className={`cursor-pointer transition-transform transform duration-500 ${!isOpen ? 'rotate-0' : 'rotate-180'}`} onClick={() => setIsOpen(!isOpen)}/>}</div>
        </div>
        </div>
        <div className={`${isOpen ? 'max-h-96' : 'max-h-0'}  px-3  ease-linear transition-[max-height] duration-500 flex flex-row justify-start mt-2 overflow-hidden font-light`}>{skills}</div>
    </div>
  )
}
 
export default ToggleBox