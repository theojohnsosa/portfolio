import React from 'react'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div className='hidden md:block'>
          <Sidebar />
        </div>

        <main className='flex flex-col p-[40px] gap-[50px]'>
          
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

              <Link href='#' className='flex flex-col gap-[12px] group text-left'>
                <div className='relative w-full aspect-video rounded-lg shadow-md overflow-hidden'>
                  <div className='w-full h-full bg-[#E0E0E0]'></div>
                  <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200'></div>
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <div className='bg-white text-black font-medium text-[16px] px-[32px] py-[14px] rounded-lg'>View Details</div>
                  </div>
                </div>
                <p className='font-medium text-[16px]'>Checkmate</p>
              </Link>

              <Link href='#' className='flex flex-col gap-[12px] group text-left'>
                <div className='relative w-full aspect-video rounded-lg shadow-md overflow-hidden'>
                  <div className='w-full h-full bg-[#E0E0E0]'></div>
                  <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200'></div>
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <div className='bg-white text-black font-medium text-[16px] px-[32px] py-[14px] rounded-lg'>View Details</div>
                  </div>
                </div>
                <p className='font-medium text-[16px]'>Manila Classico</p>
              </Link>

              <Link href='#' className='flex flex-col gap-[12px] group text-left'>
                <div className='relative w-full aspect-video rounded-lg shadow-md overflow-hidden'>
                  <div className='w-full h-full bg-[#E0E0E0]'></div>
                  <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200'></div>
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <div className='bg-white text-black font-medium text-[16px] px-[32px] py-[14px] rounded-lg'>View Details</div>
                  </div>
                </div>
                <p className='font-medium text-[16px]'>Marquee Cinemas</p>
              </Link>

              <Link href='#' className='flex flex-col gap-[12px] group text-left'>
                <div className='relative w-full aspect-video rounded-lg shadow-md overflow-hidden'>
                  <div className='w-full h-full bg-[#E0E0E0]'></div>
                  <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200'></div>
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <div className='bg-white text-black font-medium text-[16px] px-[32px] py-[14px] rounded-lg'>View Details</div>
                  </div>
                </div>
                <p className='font-medium text-[16px]'>Unity</p>
              </Link>

              <Link href='#' className='flex flex-col gap-[12px] group text-left'>
                <div className='relative w-full aspect-video rounded-lg shadow-md overflow-hidden'>
                  <div className='w-full h-full bg-[#E0E0E0]'></div>
                  <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200'></div>
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <div className='bg-white text-black font-medium text-[16px] px-[32px] py-[14px] rounded-lg'>View Details</div>
                  </div>
                </div>
                <p className='font-medium text-[16px]'>Motion Studio</p>
              </Link>

              <Link href='#' className='flex flex-col gap-[12px] group text-left'>
                <div className='relative w-full aspect-video rounded-lg shadow-md overflow-hidden'>
                  <div className='w-full h-full bg-[#E0E0E0]'></div>
                  <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200'></div>
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <div className='bg-white text-black font-medium text-[16px] px-[32px] py-[14px] rounded-lg'>View Details</div>
                  </div>
                </div>
                <p className='font-medium text-[16px]'>Polaris</p>
              </Link>

            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default page