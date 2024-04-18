import React from 'react'
import Image from 'next/image'

const TechItem = ({img, title, alt}) => {
  return (
    <div className='rounded-md flex flex-col items-center mb-6 p-5'>
        <Image src={img}  width={50} height={50} alt={alt} className='text-white'/>
        <p className='text-white text-md'>{title}</p>
    </div>
  )
}

export default TechItem
