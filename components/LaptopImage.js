import React from 'react'
import laptop from '@/public/laptop.svg'
import Image from 'next/image'

const LaptopImage = () => {
  return (
    <div>
        <Image src={laptop} height={700} width={700}/>
    </div>
  )
}

export default LaptopImage