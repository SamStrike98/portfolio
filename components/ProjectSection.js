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
    description: 'This was the first website I built whilst learning NextJS - the official LFC website has a fairly simple design but with some interesting features to recreate.'
  },
    {
    id: 5,
    title: 'Weather App',
    image: '/weather_app.png',
    techUsed: ['HTML', 'CSS', 'JavaScript', 'WeatherAPI'],
    description: 'This was the first website I built whilst learning NextJS - the official LFC website has a fairly simple design but with some interesting features to recreate.'
  },
  {
    id: 6,
    title: 'Blog Website',
    image: '/blog.png',
    techUsed: ['ReactJS', 'NextJS', 'NodeJS', 'Strapi'],
    description: 'This was the first website I built whilst learning NextJS - the official LFC website has a fairly simple design but with some interesting features to recreate.'
  },
  {
    id: 7,
    title: 'The Trainer Experts',
    image: '/the_trainer_experts.png',
    techUsed: ['HTML', 'CSS', 'JavaScript'],
    description: 'This was the first website I built whilst learning NextJS - the official LFC website has a fairly simple design but with some interesting features to recreate.'
  },
  // {
  //   id: 8,
  //   title: 'Races Near Me',
  //   image: '/harmonford_marathon_pc.png',
  //   techUsed: ['NextJS', 'ReactJS', 'NodeJS', 'TailwindCSS', 'Strapi'],
  //   description: 'This was the first website I built whilst learning NextJS - the official LFC website has a fairly simple design but with some interesting features to recreate. This was the first website I built whilst learning NextJS - the official LFC website has a fairly simple design but with some interesting features to recreate.'
  // },
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