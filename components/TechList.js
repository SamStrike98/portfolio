import React from 'react'
import TechItem from './TechItem'

const TechList = ({techList}) => {
  return (
    <div className='flex flex-row justify-between gap-5 flex-wrap w-[80%] lg:w-1/2 bg-gray-800 bg-opacity-45 border border-white border-opacity-30 p-5 rounded-md mt-10'>
        {techList.map(item => (
            <TechItem key={item.id} {...item}/>
        ))}
    </div>
  )
}

export default TechList