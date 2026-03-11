import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <>
        <aside className='w-[360px] min-h-screen flex flex-col gap-6 p-[40px] pt-[75px] pb-[20px] bg-[#F2F0EF] border-r border-[#E0E0E0]'>
            <div className='w-full flex flex-col'>
                <img
                    className='rounded-lg block mb-[10px]'
                    src="/profile.svg"
                    alt="profile"
                    width={80}
                    height={80} />
                <p className='font-medium text-[16px]'>@teej</p>
                <h1 className='font-semibold text-[30px]'>Theojohn Sosa</h1>
                <p className='font-semibold text-[16px] text-[#006EF4]'>Frontend Developer</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <div className='flex items-center gap-[12px] text-[16px] font-normal text-black'>
                    <Image 
                        src="/location.svg" 
                        alt="location" 
                        width={20} 
                        height={20} 
                    />
                    <p>Manila, Philippines</p>
                </div>
                <div className='flex items-center gap-[12px] text-[16px] font-normal text-black'>
                    <Image 
                        src="/globe.svg" 
                        alt="globe" 
                        width={20} 
                        height={20} 
                    />
                    <p>English, Filipino</p>
                </div>
                <div className='flex items-center gap-[12px] text-[16px] font-normal text-black'>
                    <Image 
                        src="/link.svg" 
                        alt="link" 
                        width={20} 
                        height={20} 
                    />
                    <a 
                        href="https://www.linkedin.com/in/theojohn-sosa-493053319/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-[#006EF4] hover:underline' >
                        Visit my LinkedIn
                    </a>
                </div>
            </div>
            <hr className="border-[#E0E0E0]" />
            <div className='flex flex-col gap-[20px] mb-[60px]'>
                <button className='w-full h-[50px] bg-[#006EF4] text-white text-[16px] font-medium rounded-lg hover:bg-[#4599FF] hover:shadow-lg transition-colors duration-100'>
                    Work with Me
                </button>
                <div className='flex items-center'>
                    <span className='w-[10px] h-[10px] bg-[#1FCD08] inline-block rounded-full mr-[20px]'></span>
                    <p>Accepting new projects</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold text-[16px] mb-[5px]'>Services Offered</p>
                <div className='flex items-center gap-[10px]'>
                    <Image 
                        src="/checkbox.svg"
                        alt="checkbox"
                        width={20}
                        height={20} />
                    <p className='font-medium text-[16px]'>Web Development</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <Image 
                        src="/checkbox.svg"
                        alt="checkbox"
                        width={20}
                        height={20} />
                    <p className='font-medium text-[16px]'>UI/UX Designing</p>
                </div>
            </div>
            <hr className="border-[#E0E0E0]" />
            <button className='w-full h-[50px] flex items-center justify-center gap-[12px] bg-[#222222] text-white text-[16px] font-medium rounded-lg hover:bg-[#303030] transition-colors duration-100 hover:shadow-lg'>
                <Image
                    src="/github.svg"
                    alt='github'
                    width={20}
                    height={20}
                 />
                    GitHub Profile
            </button>
        </aside>
    </>
  )
}

export default Sidebar