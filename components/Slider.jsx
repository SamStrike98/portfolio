'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useScrollPosition } from '@/hooks/useScrollPosition'

import sliderImg1 from '@/public/slider_img1.jpg'
import sliderImg2 from '@/public/slider_img2.jpg'




const Slider = () => {
const scrollPosition = useScrollPosition()
const imgArr = [sliderImg1, sliderImg2]

// const [img, setImg] = useState(0)
const [counter, setCounter] = useState(0)


      useEffect(() => {

        if(scrollPosition < 100){
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1)
    }, 4000);


    return () => clearInterval(interval);
}
  }, []);




  return (
    <div className='overflow-hidden min-h-[400px] md:max-h-[500px]  object-cover object-center flex flex-row justify-center'>
        <Image placeholder='blur' src={imgArr[(counter % imgArr.length)]} height={800} width={1400} alt='kitchen' className='transition-all duration-300'/>
    </div>
  )
}

export default Slider