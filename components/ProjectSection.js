import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Harmonford Marathon',
    image: '/harmonford_marathon_pc.png',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    description: "As a keen runner I've spent a fair amount of time on marathon & half marathon website, so I thought I'd have a go at building my own. After using ReactJS & Tailwind CSS it was refreshing to go back to the basics to build this project."
  },
  {
    id: 2,
    title: 'LFC Clone Website',
    image: '/lfc_clone.png',
    techUsed: ['NextJS', 'ReactJS', 'NodeJS', 'TailwindCSS'],
    description: 'This was the first website I built whilst learning NextJS - the official LFC website has a fairly simple design but with some interesting features to recreate.'
  },
    {
    id: 3,
    title: 'CSS Visualised',
    image: '/css_visualised.png',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    description: 'This website serves as a visual guide for understanding the flexbox and box shadow CSS properties, which are often challenging to grasp. Being able to toggle the values and observe the changes proved very helpful. Additionally, I added a drawing function (a basic version of paint). This was a result of me learning mouse events at the time, making the project a practical application of the concepts I was learning.'
  },
    {
    id: 4,
    title: 'Invoice Generator',
    image: '/invoice_generator.png',
    techUsed: ['HTML', 'CSS', 'JavaScript', 'PDFJS'],
    description: "While working for Essex Carers Network on a self-employed basis, I've needed to produce invoices. For the first few, I simply used online invoice generators but was always curious as to whether I could create my own. Overall, the project was quite simple; it just required some input fields and a way of generating a PDF. I wasn't familiar with how to do the second part, but Stack Overflow was very helpful and led me to find PDF.js, which had great documentation."
  },
    {
    id: 5,
    title: 'Weather App',
    image: '/weather_app.png',
    techUsed: ['HTML', 'CSS', 'JavaScript', 'WeatherAPI'],
    description: "This was the first project I built that consumes an API. In this case, it was a weather API that provided a three-day hourly forecast when given a Town, City, or Postcode of any location in the world. This project gave me a great understanding of fetching data and handling the JSON response."
  },
  {
    id: 6,
    title: 'Blog Website',
    image: '/football_blog.png',
    techUsed: ['ReactJS', 'NextJS', 'NodeJS', 'Strapi'],
    description: "For this project, I used Strapi (an open-source JavaScript-based headless CMS) as the 'backend'. This helped to further my experience with fetching, filtering, and displaying different types of data. On the frontend, I utilized Next.js, which allowed me to gain an understanding of Server-Side Rendering versus Client-Side Rendering and the effect this may have on performance."
  },
  {
    id: 7,
    title: 'The Trainer Experts',
    image: '/the_trainer_experts.png',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    description: "The main aim of this project was to plan out the design and structure before starting to build it. Additionally, I thought it would be interesting to develop an e-commerce-style project."
  },
  {
    id: 8,
    title: 'Harmonford Estates',
    image: '/harmonford_estates.png',
    techUsed: ['ReactJS', 'NextJS', 'Strapi', 'TailwindCSS', 'DaisyUI'],
    description: "Using Strapi as a headless CMS, this project allowed me to practice key skills such as fetching data, filtering data, pagination, and error handling."
  }
]

const ProjectSection = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full items-center lg:items-start lg:justify-evenly flex-wrap gap-4'>
        {projects.map(project => (
          <ProjectCard key={project.id} title={project.title} image={project.image} description={project.description} id={project.id} techUsed={project.techUsed}/>
        ))}
    </div>
  )
}

export default ProjectSection