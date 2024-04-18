'use client'

import { useState } from 'react'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import TechItem from './TechItem';
import Link from 'next/link';

const navItems = [
    {
        id: 1,
        title: 'Home',
        link: '#home'
    },
    {
        id: 2,
        title: 'About',
        link: '#about'
    },
    {
        id: 3,
        title: 'Projects',
        link: '#projects'
    },
    {
        id: 4,
        title: 'Experience',
        link: '#experience'
    },
    {
        id: 5,
        title: 'Tech',
        link: '#tech'
    },
]

const Navbar = () => {
    const scrollPosition = useScrollPosition()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`w-full ${scrollPosition > 32 ? 'fixed' : 'absolute'} transition-all z-10 flex flex-col justify-center`}>
    <div className={`flex flex-row justify-around items-center w-[80%] max-container bg-gray-800  border border-white border-opacity-30  rounded-md transition-all mt-8 ${scrollPosition > 32 ? 'p-3 bg-opacity-85' : 'p-6 bg-opacity-45'}`}>
        <h1 className={`cursor-pointer mx-auto lg:mx-0 text-white ${scrollPosition > 32 ? 'text-xl' : 'text-md md:text-2xl'} transition-all`}><span className='text-green-600'>{'<'}</span> Sam Strike <span className='text-green-600'> {'/>'} </span></h1>
        <nav className=''>
            <ul className={`hidden lg:flex flex-row justify-evenly gap-3 text-white ${scrollPosition > 32 ? 'text-xl' : 'text-2xl'}`}>
                {navItems.map(item => (
                    <li className='cursor-pointer hover:text-green-600 transition-colors' key={item.id}><Link href={item.link}>{item.title}</Link></li>
                ))}
            </ul>
        </nav>
        <div className='order-first cursor-pointer flex lg:hidden flex-col'>
                {isMenuOpen ? <RxCross1 color='white' size={42} onClick={()  => setIsMenuOpen(!isMenuOpen)}/> : <RxHamburgerMenu color='white' size={42} onClick={()  => setIsMenuOpen(!isMenuOpen)}/>}
        </div>
        {/* <span className='order-last cursor-pointer bg-green-600 hover:bg-green-800 rounded-md py-1 px-6 text-white transition-colors'>CV</span> */}
    </div>
   {isMenuOpen ? <nav>
            <ul className={`rounded-md bg-gray-800 border border-white border-opacity-30 w-[80%] max-container flex lg:hidden flex-col justify-evenly gap-3 text-white ${scrollPosition > 32 ? 'text-xl' : 'text-2xl'}`}>
                <li className='w-full rounded-t-md p-5 cursor-pointer hover:bg-gray-600'>Home</li>
                <li className='w-full p-5 cursor-pointer hover:bg-gray-600'>Projects</li>
                <li className='w-full p-5 cursor-pointer hover:bg-gray-600'>Experience</li>
                <li className='w-full rounded-b-md p-5 cursor-pointer hover:bg-gray-600'>About</li>
            </ul>
        </nav> :
        ''
   }
        
    </header>
    
  )
}

export default Navbar