import Sidebar from './components/Sidebar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <Sidebar />
        <main className='flex flex-col p-[40px]'>
          <div className='flex flex-col w-full h-fit gap-[14px] mb-[50px]'>
            <p className='font-semibold text-[16px]'>About Me</p>
            <p className='font-normal text-[18px]'>Frontend Developer | React, Next.js, Tailwind CSS, TypeScript</p>
            <p className='font-normal text-[18px]'>Building clear, usable interfaces and structured web applications. Known for that attention to detail, thoughtful UI decisions, and treating every project as production-ready.</p>
            <Link 
              className='font-medium text-[18px] text-[#006EF4] hover:underline'
              href="/more-info">
              Click for more...
            </Link>
          </div>
          <div className='flex flex-col w-full h-fit'>
            <div className='flex flex-col mb-[20px]'>
              <p className='font-semibold text-[16px] mb-[6px]'>Projects</p>
              <hr className='border-none h-[2px]' style={{background: 'linear-gradient(to right, black 62px, #E0E0E0 62px)'}} />
            </div>
            <button className='w-full h-[60px] flex items-center justify-center bg-[#222222] text-white font-medium text-[16px] rounded-lg hover:bg-[#303030] transition-colors duration-100 hover:shadow-lg mb-[20px]'>View all projects</button>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
              <Link 
                className='flex flex-col gap-[12px]'
                href='#'>
                <div className='w-full aspect-video bg-[#E0E0E0] rounded-lg hover:shadow-lg'></div>
                <p className='font-medium text-[16px]'>Checkmate</p>
              </Link>
              <Link 
                className='flex flex-col gap-[12px]'
                href='#'>
                <div className='w-full aspect-video bg-[#E0E0E0] rounded-lg hover:shadow-lg'></div>
                <p className='font-medium text-[16px]'>Manila Classico</p>
              </Link>
              <Link 
                className='flex flex-col gap-[12px]'
                href='#'>
                <div className='w-full aspect-video bg-[#E0E0E0] rounded-lg hover:shadow-lg'></div>
                <p className='font-medium text-[16px]'>Marquee Cinemas</p>
              </Link>
              <Link 
                className='flex flex-col gap-[12px]'
                href='#'>
                <div className='w-full aspect-video bg-[#E0E0E0] rounded-lg hover:shadow-lg'></div>
                <p className='font-medium text-[16px]'>Unity</p>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}