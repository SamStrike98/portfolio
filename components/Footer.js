import React from 'react'

const Footer = () => {
  return (
    <footer className=' mt-20 h-[200px] p-5  w-full'>
    <div className='max-container border-t border-white border-opacity-30 pt-5 h-full'>
        <div className='flex flex-col-reverse lg:flex-row items-center justify-evenly mx-auto h-full w-[80%]'>
            <h1 className={`cursor-pointer text-white text-3xl`}><span className='text-green-600'>{'<'}</span> Sam Strike <span className='text-green-600'> {'/>'} </span></h1>
            <span className='text-white text-xl'>sam.strike1@btinternet.com</span>
        </div>
        
    </div>
        
    </footer>
  )
}

export default Footer