import React from 'react'
import mobile from '@/public/mobile.svg'
import Image from 'next/image'

const MobileImage = () => {
  return (
    <div>
        <Image alt='mobile image' src={mobile} height={700} width={700}/>
    </div>
  )
}

export default MobileImage