"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const ProjectModal = ({ project, otherProjects }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(project)
  const [currentOtherProjects, setCurrentOtherProjects] = useState(otherProjects)
  const modalRef = useRef(null)

  const handleOtherProjectClick = (p, allProjects) => {
    setCurrentProject(p)
    setCurrentOtherProjects(allProjects.filter(op => op.name !== p.name))
    if (modalRef.current) {
      modalRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div onClick={() => { setIsOpen(true); setCurrentProject(project); setCurrentOtherProjects(otherProjects) }} className='flex flex-col gap-[12px] group text-left cursor-pointer'>
        <div className='relative w-full aspect-video rounded-lg shadow-md overflow-hidden'>
          <div className='w-full h-full bg-[#E0E0E0]'></div>
          <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200'></div>
          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
            <div className='bg-white text-black font-medium text-[16px] px-[32px] py-[14px] rounded-lg'>View Details</div>
          </div>
        </div>
        <p className='font-medium text-[16px]'>{project.name}</p>
      </div>

      {isOpen && (
        <>
          <div
            className='fixed inset-0 z-40 bg-black opacity-50'
            onClick={() => setIsOpen(false)}>
          </div>

          <div
            ref={modalRef}
            className='fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-[20px] px-[16px] md:py-[40px] md:px-[40px]'
            onClick={() => setIsOpen(false)}>
            <div
              className='relative bg-white rounded-lg w-full max-w-[760px] p-[20px] md:p-[40px] my-auto'
              onClick={(e) => e.stopPropagation()}>

              <div className='flex items-center gap-[6px] mb-[20px]'>
                <Image src="/home.svg" alt="home" width={14} height={14} />
                <Link href="/" className="text-normal text-[12px] text-[#797979] hover:text-black" onClick={() => setIsOpen(false)}>Home</Link>
                <span>›</span>
                <span className='text-semibold text-[12px] underline'>{currentProject.name}</span>
              </div>

              <button
                className='absolute top-[20px] right-[20px] md:top-[40px] md:right-[40px] hover:cursor-pointer'
                onClick={() => setIsOpen(false)}>
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </button>

              <h2 className='font-semibold text-[24px] mb-[5px]'>{currentProject.name}</h2>
              <div className='flex items-center gap-[10px] mb-[20px] md:mb-[40px]'>
                <img src="/profile.svg" alt="avatar" width={20} height={20} className='rounded-full' />
                <p className='font-normal text-[16px]'>by Theojohn Sosa</p>
              </div>

              <div className='w-full aspect-video bg-[#E0E0E0] rounded-lg mb-[20px] md:mb-[40px]'></div>

              <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-[40px] md:mb-[80px] gap-[20px]'>
                <div className='flex flex-col'>
                  <p className='font-normal text-[16px] mb-[20px] md:mr-[10px]'>{currentProject.description}</p>
                  <div className='flex flex-wrap gap-[10px]'>
                    {currentProject.tags.map((tag) => (
                      <span key={tag} className='bg-[#222222] text-white text-[14px] md:text-[16px] font-normal px-[12px] py-[5px] rounded-md'>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className='flex flex-col md:flex-row gap-[12px] md:gap-[20px] shrink-0'>
                  <a
                    href={currentProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center justify-center gap-[8px] bg-[#006EF4] text-white text-[14px] md:text-[16px] font-medium px-[20px] md:px-[30px] py-[12px] md:py-[14px] rounded-lg hover:bg-[#4599FF] transition-colors duration-100'>
                    Live Demo
                    <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
                      <path d='M2 10L10 2M10 2H4M10 2V8' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                  </a>
                  <a
                    href={currentProject.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center justify-center gap-[8px] bg-[#222222] text-white text-[14px] font-medium px-[20px] md:px-[30px] py-[12px] md:py-[14px] rounded-lg hover:bg-[#303030] transition-colors duration-100'>
                    Source Code
                  </a>
                </div>
              </div>

              <p className='font-semibold text-[16px] mb-[20px]'>More Projects by Theojohn Sosa</p>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-[16px]'>
                {currentOtherProjects.map((p) => (
                  <div
                    key={p.name}
                    className='flex flex-col gap-[12px] group cursor-pointer'
                    onClick={() => handleOtherProjectClick(p, [...currentOtherProjects, currentProject])}>
                    <div className='relative w-full aspect-video bg-[#E0E0E0] rounded-lg overflow-hidden'>
                      <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200'></div>
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                        <div className='bg-white text-black font-medium text-[14px] md:text-[16px] px-[16px] md:px-[32px] py-[10px] md:py-[14px] rounded-lg'>View Details</div>
                      </div>
                    </div>
                    <p className='font-semibold text-[14px] md:text-[16px]'>{p.name}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ProjectModal