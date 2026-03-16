import Sidebar from './components/Sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { navigate } from 'next/dist/client/components/segment-cache/navigation';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <Sidebar />
        <main className='flex flex-col p-[40px] gap-[50px]'>

          <div className='flex flex-col w-full gap-[14px]'>
            <p className='font-semibold text-[16px]'>About Me</p>
            <p className='font-normal text-[18px]'>Frontend Developer | React, Next.js, Tailwind CSS, TypeScript</p>
            <p className='font-normal text-[18px]'>Building clear, usable interfaces and structured web applications. Known for that attention to detail, thoughtful UI decisions, and treating every project as production-ready.</p>
            <Link
              className='font-medium text-[18px] text-[#006EF4] hover:underline'
              href="/more-info">
              Click for more...
            </Link>
          </div>

          <div className='flex flex-col w-full'>
            <div className='flex flex-col mb-[20px]'>
              <p className='font-semibold text-[16px] mb-[6px]'>Projects</p>
              <hr className='border-none h-[2px]' style={{background: 'linear-gradient(to right, black 62px, #E0E0E0 62px)'}} />
            </div>
            <Link href="/projects">
              <button className='w-full h-[60px] flex items-center justify-center bg-[#222222] text-white font-medium text-[16px] rounded-lg hover:bg-[#303030] hover:shadow-sm transition-colors duration-100 mb-[20px]'>View all projects</button>
            </Link>
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

            </div>
          </div>

          <div className='flex flex-col w-full'>
            <div className='flex flex-col mb-[20px]'>
              <p className='font-semibold text-[16px] mb-[6px]'>Tools I work with</p>
              <hr className='border-none h-[2px]' style={{background: 'linear-gradient(to right, black 123px, #E0E0E0 123px)'}} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[12px]'>
              <div className='flex items-center w-full px-[24px] py-[10px] bg-[#F0F0F0] shadow-sm rounded-lg border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <Image className='mr-[20px]' src='/nextjs.svg' alt='Next.js' width={40} height={40} />
                <div className='flex flex-col'>
                  <p className='font-semibold text-[16px]'>Next.js</p>
                  <p className='font-normal text-[12px] text-[#797979]'>Full Stack Toolkit</p>
                </div>
              </div>
              <div className='flex items-center w-full px-[24px] py-[10px] bg-[#F0F0F0] shadow-sm rounded-lg border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <Image className='mr-[20px]' src='/tailwindcss.svg' alt='Tailwind CSS' width={40} height={40} />
                <div className='flex flex-col'>
                  <p className='font-semibold text-[16px]'>Tailwind CSS</p>
                  <p className='font-normal text-[12px] text-[#797979]'>Responsive Styling</p>
                </div>
              </div>
              <div className='flex items-center w-full px-[24px] py-[10px] bg-[#F0F0F0] shadow-sm rounded-lg border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <Image className='mr-[20px]' src='/stripe.svg' alt='Stripe' width={40} height={40} />
                <div className='flex flex-col'>
                  <p className='font-semibold text-[16px]'>Stripe</p>
                  <p className='font-normal text-[12px] text-[#797979]'>Payment Processing</p>
                </div>
              </div>
              <div className='flex items-center w-full px-[24px] py-[10px] bg-[#F0F0F0] shadow-sm rounded-lg border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <Image className='mr-[20px]' src='/supabase.svg' alt='Supabase' width={40} height={40} />
                <div className='flex flex-col'>
                  <p className='font-semibold text-[16px]'>Supabase</p>
                  <p className='font-normal text-[12px] text-[#797979]'>Auth & Database</p>
                </div>
              </div>
              <div className='flex items-center w-full px-[24px] py-[10px] bg-[#F0F0F0] shadow-sm rounded-lg border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <Image className='mr-[20px]' src='/resend.svg' alt='Resend' width={40} height={40} />
                <div className='flex flex-col'>
                  <p className='font-semibold text-[16px]'>Resend</p>
                  <p className='font-normal text-[12px] text-[#797979]'>Email Service</p>
                </div>
              </div>
              <div className='flex items-center w-full px-[24px] py-[10px] bg-[#F0F0F0] shadow-sm rounded-lg border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <Image className='mr-[20px]' src='/react.svg' alt='React JS' width={40} height={40} />
                <div className='flex flex-col'>
                  <p className='font-semibold text-[16px]'>React</p>
                  <p className='font-normal text-[12px] text-[#797979]'>Frontend Framework</p>
                </div>
              </div>
              <div className='flex items-center w-full px-[24px] py-[10px] bg-[#F0F0F0] shadow-sm rounded-lg border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <Image className='mr-[20px]' src='/figma.svg' alt='Figma' width={40} height={40} />
                <div className='flex flex-col'>
                  <p className='font-semibold text-[16px]'>Figma</p>
                  <p className='font-normal text-[12px] text-[#797979]'>UI Design Tool</p>
                </div>
              </div>
              <div className='flex items-center w-full px-[24px] py-[10px] bg-[#F0F0F0] shadow-sm rounded-lg border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <Image className='mr-[20px]' src='/vercel.svg' alt='Vercel' width={40} height={40} />
                <div className='flex flex-col'>
                  <p className='font-semibold text-[16px]'>Vercel</p>
                  <p className='font-normal text-[12px] text-[#797979]'>Cloud Hosting</p>
                </div>
              </div>
              <div className='flex items-center w-full px-[24px] py-[10px] bg-[#F0F0F0] shadow-md rounded-lg border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <Image className='mr-[20px]' src='/github 2.svg' alt='GitHub' width={40} height={40} />
                <div className='flex flex-col'>
                  <p className='font-semibold text-[16px]'>GitHub</p>
                  <p className='font-normal text-[12px] text-[#797979]'>Version Control</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col w-full'>
            <div className='flex flex-col mb-[20px]'>
              <p className='font-semibold text-[16px] mb-[6px]'>Experience</p>
              <hr className='border-none h-[2px]' style={{background: 'linear-gradient(to right, black 84px, #E0E0E0 84px)'}} />
            </div>
            <div className='flex flex-col gap-[20px]'>
              <div className='flex items-center justify-between w-full bg-[#F0F0F0] shadow-sm rounded-lg px-[24px] py-[15px] border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <div className='flex items-center'>
                  <div className='w-[50px] h-[50px] bg-[#222222] text-white flex items-center justify-center rounded-lg font-semibold text-[24px] shrink-0 mr-[20px]'>1</div>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-[16px]'>Full-Stack Developer</p>
                    <p className='font-normal text-[14px] text-[#797979]'>National University</p>
                  </div>
                </div>
                <p className='font-normal text-[16px] shrink-0 ml-[16px]'>2024 – <span className='font-semibold'>Current</span></p>
              </div>
              <div className='flex items-center justify-between w-full bg-[#F0F0F0] shadow-sm rounded-lg px-[24px] py-[15px] border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <div className='flex items-center'>
                  <div className='w-[50px] h-[50px] bg-[#222222] text-white flex items-center justify-center rounded-lg font-semibold text-[24px] shrink-0 mr-[20px]'>2</div>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-[16px]'>Operations Assistant (Intern)</p>
                    <p className='font-normal text-[14px] text-[#797979]'>PC Green</p>
                  </div>
                </div>
                <p className='font-normal text-[16px] shrink-0 ml-[16px]'>April – May 2024</p>
              </div>
              <div className='flex items-center justify-between w-full bg-[#F0F0F0] shadow-sm rounded-lg px-[24px] py-[15px] border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <div className='flex items-center'>
                  <div className='w-[50px] h-[50px] bg-[#222222] text-white flex items-center justify-center rounded-lg font-semibold text-[24px] shrink-0 mr-[20px]'>3</div>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-[16px]'>Web Developer</p>
                    <p className='font-normal text-[14px] text-[#797979]'>STI College</p>
                  </div>
                </div>
                <p className='font-normal text-[16px] shrink-0 ml-[16px]'>2022 – 2024</p>
              </div>
              <div className='flex items-center justify-between w-full bg-[#F0F0F0] shadow-sm rounded-lg px-[24px] py-[15px] border border-[2px] border-transparent transition-all duration-100 hover:border-[#006EF4]'>
                <div className='flex items-center'>
                  <div className='w-[50px] h-[50px] bg-[#222222] text-white flex items-center justify-center rounded-lg font-semibold text-[24px] shrink-0 mr-[20px]'>4</div>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-[16px]'>UI/UX Designer</p>
                    <p className='font-normal text-[14px] text-[#797979]'>STI College</p>
                  </div>
                </div>
                <p className='font-normal text-[16px] shrink-0 ml-[16px]'>2022 – 2024</p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </>
  );
}