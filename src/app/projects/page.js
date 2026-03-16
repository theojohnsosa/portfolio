import React from 'react'
import Sidebar from '../components/Sidebar'
import ProjectModal from '../components/ProjectModal'

const projects = [
  {
    name: "Checkmate",
    description: "A mobile-first attendance tracking application built with Android that streamlines classroom check-ins while maintaining security and accuracy.",
    tags: ["Java", "Firebase"],
    liveDemo: "#",
    sourceCode: "#"
  },
  {
    name: "Manila Classico",
    description: "A modern web application built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind"],
    liveDemo: "#",
    sourceCode: "#"
  },
  {
    name: "Marquee Cinemas",
    description: "A cinema booking platform built with React and Firebase.",
    tags: ["React", "Firebase"],
    liveDemo: "#",
    sourceCode: "#"
  },
  {
    name: "Unity",
    description: "A full-stack web application built with Next.js and Supabase.",
    tags: ["Next.js", "Supabase"],
    liveDemo: "#",
    sourceCode: "#"
  },
  {
    name: "Motion Studio",
    description: "A motion design portfolio built with React and Framer Motion.",
    tags: ["React", "Framer Motion"],
    liveDemo: "#",
    sourceCode: "#"
  },
  {
    name: "Polaris",
    description: "A navigation and wayfinding application built with Next.js.",
    tags: ["Next.js", "Tailwind"],
    liveDemo: "#",
    sourceCode: "#"
  }
]

const page = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div className='hidden md:block'>
          <Sidebar />
        </div>
        <main className='flex flex-col p-[40px] gap-[50px] flex-1'>

          <div className='flex flex-col w-full gap-[14px]'>
            <p className='font-semibold text-[16px]'>My Projects</p>
            <p className='font-normal text-[18px]'>My work spans web applications, Java desktop systems, and Android mobile apps. Each project focuses on building real, functional software with clean interfaces, structured architecture, and practical problem-solving—reflecting how I approach development across multiple platforms.</p>
          </div>

          <div className='flex flex-col w-full'>
            <div className='flex flex-col mb-[20px]'>
              <p className='font-semibold text-[16px] mb-[6px]'>Projects</p>
              <hr className='border-none h-[2px]' style={{background: 'linear-gradient(to right, black 62px, #E0E0E0 62px)'}} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
              {projects.map((project) => (
                <ProjectModal
                  key={project.name}
                  project={project}
                  otherProjects={projects.filter(p => p.name !== project.name)}
                />
              ))}
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default page