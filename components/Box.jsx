'use client'

import React from 'react'
import { useState } from 'react'
import { FaRegPaste, FaPaintbrush, FaMinus, FaRegSquare, FaPlus } from "react-icons/fa6";
import { FaFont, FaMicrophone, FaToggleOn, FaRegSave, FaUndo, FaRedo } from "react-icons/fa";
import { ImParagraphCenter } from "react-icons/im";
import { SlMagnifier } from "react-icons/sl";
import { SiMicrosoftword } from "react-icons/si";



const Box = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
  
    <div className='ml-4'>
        <div className={`bg-green-400 flex cursor-pointer ring ring-gray-300 ring-opacity-30  no-scrollbar z-10 ${isOpen ? 'h-[95%] bg-gray-300 lg:w-[70%] md:w-[80%] w-[90%] box rounded-md flex-col overflow-y-auto' : 'w-10 h-10 overflow-hidden box_reverse rounded-[100px] flex-row justify-center items-center hover:drop-shadow-glow'} fixed bottom-6 right-6`} onClick={() => { if (!isOpen) setIsOpen(true) }}>
            
            {isOpen ? 
            <div>
              <div className='flex flex-col sticky top-0 w-full bg-gray-300'>
               <section className='h-9 w-full bg-blue-700 px-2'>
                <ul className='h-full flex flex-row justify-between items-center text-white'>
                  <li><SiMicrosoftword /></li>
                  <li className='flex flex-row items-center gap-2'>Auto Save <FaToggleOn /></li>
                  <li><FaRegSave /></li>
                  <li><FaUndo /></li>
                  <li><FaRedo /></li>
                  <li><SlMagnifier /></li>
                  <li><FaMinus /></li>
                  <li><FaRegSquare /></li>
                  <li className='h-full flex p-2 flex-col justify-center hover:bg-red-500' onClick={() => setIsOpen(false)}><FaPlus className='rotate-45'/></li>
                </ul>
               </section>
               <section className='h-5 my-2'>
                  <ul className='ml-2 h-full flex flex-row gap-2 items-center font-semibold text-sm md:text-md overflow-y-scroll'>
                    <li>File</li>
                    <li>Home</li>
                    <li>Insert</li>
                    <li>Draw</li>
                    <li>Design</li>
                    <li>Layout</li>
                    <li>View</li>
                    <li>Help</li>
                  </ul>
               </section>
               <section className='h-16 bg-white w-[98%] mx-auto rounded-md border border-black border-opacity-30 shadow-md'>
                <ul className='flex flex-row justify-evenly items-center h-full'>
                  <li className='flex flex-col items-center'>Paste <FaRegPaste /></li>
                  <li className='flex flex-col items-center'>Font <FaFont /></li>
                  <li className='flex flex-col items-center'>Paragraph <ImParagraphCenter /></li>
                  <li className='flex flex-col items-center'>Styles <FaPaintbrush /></li>
                  <li className='flex flex-col items-center'>Editing <SlMagnifier /></li>
                  <li className='flex flex-col items-center'><a href={'/lfc_clone.png'} download="cv">Dictate <FaMicrophone /></a> </li>
                </ul>
               </section>
              </div>
            
            <div className='min-h-[920px] h-fit  w-full py-2  bg-gray-300'>
              <div className='bg-white min-h-[900px] h-fit  lg:w-[80%] md:w-[90%] w-[95%] max-w-[700px] mx-auto p-4 border border-opacity-35 border-black'>
              <section className='my-4'>
                <h2 className='font-extrabold text-2xl text-center'>Samuel Strike</h2>
                <div className='mt-2 mr-3 text-right text-xs'>
                  <p className=''>Home address: 22 Constable Close, Lawford, Manningtree, Essex, CO112LD</p>
                  <p className=''>Telephone: 01206390118</p>
                  <p className=''>Mobile: 07895139154</p>
                  <p className=''>E-mail: <span className='text-blue-700'>sam.strike1@btinternet.com</span></p>
                  <p className=''>DOB: 02/01/1998</p>
                </div>
              </section>

              <section className='my-4 p-4'>
                <h2 className='text-lg font-bold border-b-2 border-black w-[90%]'>Professional Profile</h2>
                <p className='text-sm w-[90%] my-2'>As a diligent and versatile Mathematics graduate, I possess a strong work ethic and excellent organisational skills. I approach tasks with confidence and attention to detail, ensuring that deadlines are met and projects are completed to the highest standard. I take pride in my punctuality and professional appearance, and am eager to continue learning and growing both personally and professionally.</p>
              </section>

              <section className='my-4 p-4'>
                <h2 className='text-lg font-bold border-b-2 border-black w-[90%]'>Core Skills and Achievements</h2>
                <ul className='list-disc text-sm p-4'>
                  <li>GCSE Physics award for highest overall score</li>
                  <li>Excellent IT skills including Excel, Outlook and Word</li>
                  <li>Comprehensive knowledge of the internet and social media platforms</li>
                  <li>3<sup>rd</sup> highest GCSE results at High School</li>
                </ul>
              </section>

              <section className='my-4 p-4'>
                <h2 className='text-lg font-bold border-b-2 border-black w-[90%]'>Education</h2>
                <h4 className='font-bold mt-2'>BSc (2:1) Mathematics, University of East Anglia: 2016-2019</h4>
                <h4 className='font-bold'>A-Levels, Colchester Sixth Form: 2014-2016</h4>
                <ul className='list-disc text-sm p-4 w-[90%]'>
                  <li className='my-2'><span className='font-bold'>A2</span> Mathematics (A), Further Mathematics (D), Physics (C), Chemistry (D) and Extended Project Qualification (B)</li>
                  <li className='my-2'><span className='font-bold'>AS</span> Mathematics (A), Further Mathematics (C), Further Mathematics (C), Physics (C), Chemistry (C)</li>
                </ul>
                <h4 className='font-bold'>GCSEs, Manningtree High School: 2009-2014</h4>
                <ul className='list-disc text-sm p-4 mb-1'>
                  <li><span className='font-bold'>3 A* grades -</span> Mathematics, Physics & Chemistry</li>
                  <li><span className='font-bold'>5 A grades -</span> Statistics, English Literature, Geography, History, Biology</li>
                  <li><span className='font-bold'>2 B grades -</span> English Language, IT</li>
                </ul>
                <p className='text-sm w-[90%]'>Including Decision Maths, working with algorithms, specifically Graph Theory, Network problems and Linear Programming.</p>
              </section>
              </div>
            </div>

            <div className='min-h-[920px] h-fit  w-full py-2  bg-gray-300'>
            <div className='bg-white min-h-[900px] h-fit  lg:w-[80%] md:w-[90%] w-[95%] max-w-[700px] mx-auto p-4 border border-opacity-35 border-black'>
            <section className='my-4 p-4'>
              <h2 className='text-lg font-bold border-b-2 border-black w-[90%]'>Work Experience</h2>
              <ul className='list-disc text-sm p-4 w-[90%]'>
                <li className='my-2'>
                  <h4 className='font-bold text-md'>Essex Carers Network -</h4>
                  <p className='text-sm'>WordPress website – updated information, created new pages as requested, helped with training and managed updates of both WordPress & plugins.</p>
                </li>
                <li className='my-2'>
                    <h4 className='font-bold'>Rose Builders -</h4>
                    <p className='text-sm'>Accounts Assistant						
                      Working mainly on the purchase ledger side, ensuring invoices are paid on time, I have gained a comprehensive knowledge of accounting and general office duties. I have also supported software upgrades within the accounts systems and often solved IT queries from colleagues.
                    </p>
                </li>

                <h3 className='font-bold mt-2 text-lg underline'>Student Jobs 2014-2019</h3>
                <li className='my-2'>
                  <h4 className='font-bold'>Tasty Tubs -</h4>
                  <p className='text-sm'>Factory operative
                      Working in a small team completing a variety of roles to strict deadlines.
                  </p>
                </li>
                <li className='my-2'>
                  <h4 className='font-bold'>East of England Cooperative Society -</h4>
                  <p className='text-sm'>General assistant
                      Working as a general assistant, dealing with customer needs and ensuring product presentation was to a high standard.
                  </p>
                </li>
                <li className='my-2'>
                  <h4 className='font-bold'>Gateway Charity -</h4>
                  <p className='text-sm'>Volunteer for Gateway charity for adults with learning disabilities supporting them to access social activities.</p>
                </li>
              </ul>
            </section>

            <section className='my-4 p-4'>
              <h2 className='text-lg font-bold border-b-2 border-black w-[90%]'>IT Skills</h2>
              <ul class="list-disc text-sm p-4 w-[90%]">
                <li className='my-2'>Proficient in front-end technologies including HTML, CSS, JavaScript and ReactJS, and back-end technologies such as PHP, Python and NodeJS</li>
                <li className='my-2'>Completed several courses in programming languages</li>
                <li className='my-2'>Currently learning WordPress Theme & Plugin development</li>
                <li className='my-2'>Experienced in working with popular WordPress plugins such as Elementor, WooCommerce, and Advanced Custom Fields, and integrating custom functionality with them</li>
                <li className='my-2'>Knowledgeable in SEO best practices and have implemented various optimisation techniques.</li>
              </ul>
            </section>

            <section className='my-4 p-4'>
              <h2 className='text-lg font-bold border-b-2 border-black w-[90%]'>Personal Profile</h2>
              <p className='text-sm w-[90%] my-2'>I am deeply passionate about sports, and have participated in competitive and recreational activities such as football, powerlifting, and running. In addition to sports, I also find great pleasure in reading and challenging myself to expand my knowledge in emerging technologies.</p>
            </section>
            </div>
            </div>
            </div> :
            
             <h1 className='text-center'>CV</h1>}
        </div>
        
    </div>
  )
}

export default Box