'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { IoIosDesktop } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import MobileImage from './MobileImage';
import LaptopImage from './LaptopImage';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { BsInfoLg } from "react-icons/bs";
import Link from 'next/link';
import Slider from './Slider';

const ProjectCard = ({ title, image, description, mobileImage, techUsed}) => {
    const [view, setView] = useState('pc')
    const [isOpen, setIsOpen] = useState(false)
    const [imageHeight, setImageHeight] = useState(500)
    const id = title.trim() 

  return (

    <div id={id} className={`overflow-hidden ${isOpen ? 'h-[550px] w-[80%] project_card' : 'project_card_reverse h-[50px] w-1/2 lg:w-1/3'} border border-white border-opacity-30 bg-gray-800 bg-opacity-45 rounded-md p-4 flex flex-col items-center mb-8 `}>
        {/* <div className='w-5/6 h-[500px]'>{isMobile ? <MobileImage /> : <LaptopImage />}</div> */}
        <div className={`w-full flex flex-row justify-between mb-4 ${isOpen ? '' : 'h-full items-center'}`}>
            <div>{''}</div>

            <div className='flex flex-col justify-center items-center'>
              <h2 className={`transition-all duation-500 delay-1000 text-white font-extrabold ${isOpen ? 'text-2xl decoration-green-400 underline-offset-8' : 'text-lg lg:text-xl xl:text-2xl'}`}>{title}</h2>
              <div className={`border-b border-green-400 transition-[width] duration-500 delay-500  ${isOpen ? 'w-[80%]' : 'w-0'}`}>{''}</div>
            </div>
            
            <div className='text-white cursor-pointer' onClick={() => {setIsOpen(!isOpen) }}>{isOpen ? <ImCross color='red'/> : <GiHamburgerMenu color='#43a047'/>}</div>
        </div>

        <div className={`flex flex-col items-center`}>
            { view === 'pc' ? <div className='w-5/6 h-[400px] overflow-hidden rounded-md'><Image onLoad={(e) => setImageHeight(e.target.clientHeight)} src={image} width={1000} height={1000} className={`transform hover:transform ${imageHeight > 400 ? 'hover:-translate-y-[calc(100%-400px)]' : ''} transition-transform duration-[5000ms] ease-linear`}/></div> : ''}
            { view === 'mobile' ? <div className='w-5/6 h-[400px] overflow-hidden'><Slider /></div> : ''}
            { view === 'info' ? <div className='w-5/6 h-[400px]'>
                                  <h4 className='font-bold text-white mb-4 text-xl'>Tech Used:</h4>
                                  <ul className='flex flex-row justify-evenly text-white mb-4 flex-wrap gap-3'>
                                    {techUsed.map(item => (
                                      <li className='bg-opacity-45 ring-2 ring-inset p-3 rounded-md ring-green-400 ring-opacity-65 mb-4 text-xs md:text-md lg:text-lg'>{item}</li>
                                    ))}
                                  </ul>
                                  <h4 className='font-bold text-white mb-4 text-xl'>Description:</h4>
                                  <div className=''>
                                    <p className={`text-white text-sm leading-normal md:text-md md:leading-loose`}>{description}</p>
                                  </div>
                                  
                                </div> : ''}

            <div className='w-full flex flex-row justify-evenly mt-3'>
              <div className={`rounded-full bg-black ${view === 'pc' ? 'bg-opacity-45 ring-2 ring-inset ring-green-400 ring-opacity-65' : 'bg-opacity-0'} p-3 transition-opacity`}> <IoIosDesktop size={42} color='white' className='cursor-pointer' onClick={() => setView('pc')}/> </div> 
              {mobileImage ? <div className={`rounded-full bg-black ${view === 'mobile' ? 'bg-opacity-45 ring-2 ring-inset ring-green-400 ring-opacity-65' : 'bg-opacity-0'} p-3 transition-opacity`}> <FaMobileAlt size={42} color='white' className='cursor-pointer' onClick={() => setView('mobile')}/> </div> : ''}
              <div className={`rounded-full bg-black ${view === 'info' ? 'bg-opacity-45 ring-2 ring-inset ring-green-400 ring-opacity-65' : 'bg-opacity-0'} p-3 transition-opacity`}> <BsInfoLg size={42} color='white' className='cursor-pointer' onClick={() => setView('info')}/> </div>
            </div>
        </div> 
    </div>
  )
}

export default ProjectCard
