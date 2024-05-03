import Navbar from "@/components/Navbar"
import ParticlesBackground from "@/components/ParticlesBackground"
import Image from "next/image"
import profilePhoto from '@/public/professionalPhoto.png'
import runningPhoto from '@/public/running.jpg'
import HeadingBtn from "@/components/HeadingBtn"
import ProjectSection from "@/components/ProjectSection"
import TechList from "@/components/TechList"
import ToggleBox from "@/components/ToggleBox"
import Footer from "@/components/Footer"
import Box from "@/components/Box"


const techList = [
  {
    id: 1,
    title: 'GitHub',
    img: '/github.svg',
    alt: 'GitHub'
  },
  {
    id: 2,
    title: 'JavaScript',
    img: '/javascript.svg',
    alt: 'JavaScript'
  },
  {
    id: 3,
    title: 'React',
    img: '/react.svg',
    alt: 'React'
  },
  {
    id: 4,
    title: 'NextJS',
    img: '/nextjs.svg',
    alt: 'NextJS'
  },
  {
    id: 5,
    title: 'NodeJS',
    img: '/nodejs.svg',
    alt: 'NodeJS'
  },
  {
    id: 6,
    title: 'TailwindCSS',
    img: '/tailwind.svg',
    alt: 'TailwindCSS'
  },
  {
    id: 7,
    title: 'Bootstrap',
    img: '/bootstrap.svg',
    alt: 'Bootstrap'
  },
  {
    id: 8,
    title: 'WordPress',
    img: '/wordpress.svg',
    alt: 'WordPress'
  },
  
]

const experience = [
  {
    id: 1,
    title: 'University of East Anglia',
    dates: '2016-2019',
    skills: "I studied Maths for 3 years at University, graduating with a 2:1. I learned a range of topics from Number Theory to Fluid Dynamics; however, the module I gained the most from was problem-solving. The actual Maths concepts were simpler than other modules, but it required an element of planning and lateral thinking."
  },
  {
    id: 2,
    title: 'Rose Builders',
    dates: '2019-2022',
    skills: "Having finished University, my first job was at Rose Builders, working in the accounts team. Working to strict monthly and yearly deadlines, I also assisted with the introduction of new technology into the company to help speed up a number of processes."
  },
  {
    id: 3,
    title: 'Essex Carers Network',
    dates: '2022-',
    skills: "At Essex Carers Network, I've worked on a variety of tasks, from helping to populate and keep their website up to date to building bespoke spreadsheets to increase efficiency and addressing general IT issues."
  },
]

const text = 'Box'

export default function Home() {

  return (
    <main className="bg-black w-full overflow-hidden">

      <Navbar />
    
      <section className='mt-20 w-full bg-black bg-opacity-75 flex flex-col items-center'>

      
        
        {/* <ParticlesBackground />  */}
        <div className="w-[80%] max-container h-full mt-20 mx-auto flex xl:flex-row flex-col justify-center items-center xl:justify-between">

            <Image alt="profile image" src={profilePhoto} width={500} height={500} className="max-w-1/2 bg-gray-800 bg-opacity-45 rounded-lg ring-1 ring-green-600 drop-shadow-glow animate-fade-down animate-once"/>

        <div className="group text-center mt-10">
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl"> <span className='text-green-600 group-hover:text-white'>{'<'}</span><span className='group-hover:text-green-600'>Sam</span> Strike<span className='text-green-600 group-hover:text-white'>{' />'}</span></h1>
          <p className="text-4xl mt-5 text-white text-center group-hover:text-green-600 transition-colors"><span className="text-green-600 group-hover:text-white">Frontend</span> Web Developer</p>
        </div>
        
          
        </div>
      </section>

      <section className="max-container ml-auto mt-20 pt-[95px]" id="about" >
        {/* <h1 className="text-white">About</h1> */}
        <HeadingBtn text='About'/>
        <Box />

        {/* <div className="w-5/6 p-2 rounded-md flex flex-row bg-gradient-to-r from-gray-600 via-green-500 to-green-600"> */}
        <div className="w-5/6 p-2 rounded-md flex justify-center">
          {/* <Image src={runningPhoto} width={300} height={300}/> */}
          <div className=" p-3 rounded-md w-4/5">
            <h3 className="text-white text-3xl">Aspiring <span className="text-green-600 font-semibold">Web Dev</span></h3>
            <p className="text-white text-xl">
              {"My journey into building websites started during lockdown with the aim of challenging myself to learn something new. Having thoroughly enjoyed learning frontend website development in my spare time, I'm now looking to turn it into a career."}
            </p>
          </div>
        </div>
        
        
      </section>

      <section className="max-container mt-20 pt-[95px]  max-h-max" id="projects">
        <HeadingBtn text='Projects'/>
        <ProjectSection />
      </section>

      <section className="max-container flex flex-col items-center mt-20 pt-[95px]" id="experience">
        <div className="flex flex-row gap-2">
          <HeadingBtn text='Education'/>
          <HeadingBtn text='Experience'/>
        </div>

        <div className="flex flex-col justify-between  gap-5 w-[80%] lg:w-[50%]">
          {
            experience.map(item => (
              <ToggleBox key={item.id} {...item} />
            ))
          }
        </div>

        
      </section>

      <section className="max-container flex flex-col items-center mt-20 pt-[95px]" id="tech">
        <HeadingBtn text='Tech'/>
        <p className="text-green-600 w-1/2 text-3xl">These are some of the <span className="text-white font-semibold">Technologies</span> that I have used:</p>
        <TechList techList={techList}/>
      </section>

      
    <Footer />
    </main>
  )
}
