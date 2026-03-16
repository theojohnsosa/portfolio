import React from 'react'
import Sidebar from '../components/Sidebar'

const page = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div className='hidden md:block'>
          <Sidebar />
        </div>

        <main className='flex flex-col p-[40px]'>

          <div className='flex flex-col w-full gap-[14px] mb-[50px]'>
            <p className='font-semibold text-[16px]'>Here's more about me</p>
            <p className='font-normal text-[18px]'>My interest in programming started the first time I wrote HTML and CSS and saw a blank page turn into something real. That moment—creating something from nothing but code—was what pulled me into software development. At first, my relationship with technology was mostly through gaming. I spent a lot of time on my laptop and originally thought studying IT would simply keep me close to that environment. But once I started learning how systems actually worked and began building things myself, the focus shifted. What used to be time spent playing games became time spent learning how to build software. Over time I built small websites, desktop applications, and school projects, but the moment that confirmed everything for me was when I built my first mobile application. That project made it clear that this was the field I wanted to pursue long-term. Building software stopped being an academic activity and became something I genuinely wanted to keep doing.</p>
          </div>

          <div className='flex flex-col w-full gap-[14px] mb-[50px]'>
            <p className='font-semibold text-[16px]'>How I Work</p>
            <p className='font-normal text-[18px]'>One thing that tends to define how I approach development is persistence. When I run into a problem, most people recommend stepping away and taking a break. I’ve tried that approach many times, but it rarely works for me. When a bug or error exists in something I’m building, my mind keeps returning to it until it’s solved. Instead of stepping away, I usually push harder. I investigate the problem, test different approaches, read documentation, and keep debugging until I understand what’s actually happening. The moment when a difficult bug finally gets resolved is one of the most satisfying parts of being a developer. That process—struggling with a problem until it makes sense—is how I’ve learned the most.</p>
          </div>

          <div className='flex flex-col w-full gap-[14px] mb-[50px]'>
            <p className='font-semibold text-[16px]'>My Learning Style</p>
            <p className='font-normal text-[18px]'>I strongly believe in project-based learning. Rather than spending long periods planning everything perfectly before writing code, I often start building early and learn along the way. Some developers prefer heavy planning before implementation. For me, the act of building is what reveals the real problems and forces me to understand systems more deeply. This approach means I encounter mistakes and obstacles during the process, but those experiences tend to produce the strongest lessons. Outside of school projects, I spend a lot of time working on personal projects, experimenting with new tools, and studying technologies related to the work I want to do. By the time new topics appear in the curriculum, I’ve often already explored them on my own.</p>
          </div>

          <div className='flex flex-col w-full gap-[14px] mb-[50px]'>
            <p className='font-semibold text-[16px]'>My Reputation Among Peers</p>
            <p className='font-normal text-[18px]'>In group projects, I usually end up taking the role of both team lead and primary developer. Part of that comes from the extra time I spend studying and building outside the classroom. Classmates often describe me as passionate and hardworking. Some of them see me as “the smart one,” although I’m not always convinced that’s accurate. If anything, I think I’m just very persistent and willing to put in more hours trying to understand something. Even when I feel uncertain about my abilities, I keep pushing forward. That combination of curiosity and discipline is what drives most of my progress.</p>
          </div>

          <div className='flex flex-col w-full gap-[14px] mb-[50px]'>
            <p className='font-semibold text-[16px]'>What Good Software Means</p>
            <p className='font-normal text-[18px]'>For me, good software is software that people can use without confusion. A user shouldn’t need instructions from the developer just to understand how an interface works. Navigation should feel natural, actions should be predictable, and the system should behave consistently. Clarity is one of the things I care about most when designing interfaces or writing code. Another part of building good software is anticipating edge cases. In practice, this is often where things break. Even when I think I’ve accounted for everything, demos and real use often reveal unexpected issues. Those moments can be frustrating, but they also remind me that good engineering requires constant refinement.</p>
          </div>

          <div className='flex flex-col w-full gap-[14px] mb-[50px]'>
            <p className='font-semibold text-[16px]'>What I'm Currently Focused On</p>
            <div className='font-normal text-[18px]'>
              <p>Right now I'm continuing to improve both my technical and design skills.<br />On the development side, I focus primarily on building modern web applications using tools such as:</p>
              <ul className='list-disc list-inside ml-[20px] mt-[10px] mb-[10px]'>
                <li>Next.js for full-stack web development</li>
                <li>Tailwind CSS for interface styling</li>
                <li>Stripe for payment systems</li>
                <li>Firebase and Supabase for authentication and databases</li>
                <li>Resend for email services</li>
                <li>Vercel for deployment and hosting</li>
              </ul>
              <p>Alongside development, I'm also working on strengthening my design abilities. One challenge I've encountered is translating ideas into strong visual interfaces, especially when inspiration runs out. Improving that skill is something I'm actively working on. Another skill I want to master is adaptability—being able to quickly understand and integrate new technologies as they emerge.</p>
            </div>
          </div>

          <div className='flex flex-col w-full gap-[14px] mb-[50px]'>
            <p className='font-semibold text-[16px]'>My Long-Term Vision</p>
            <p className='font-normal text-[18px]'>In the long term, my goals are both professional and personal. Professionally, I want to continue building applications and systems that have real value. I’m particularly interested in creating software that has meaningful impact rather than simply existing as technical demonstrations. Personally, my motivation is tied closely to my family. One of my biggest goals is achieving financial stability and having the freedom to support the people who matter most to me. I want to reach a point where I can provide security, stability, and opportunities for my family while continuing to grow in my career. Everything I’m building now is part of that larger goal.</p>
          </div>

          <div className='flex flex-col w-full gap-[14px] mb-[50px]'>
            <p className='font-semibold text-[16px]'>What Drives Me</p>
            <p className='font-normal text-[18px]'>If I had to describe the main thing that differentiates me from other developers at my level, it would probably be how strongly I care about the work. When I enjoy what I’m doing, my motivation increases significantly. I tend to invest more time, explore deeper solutions, and push myself harder than expected. That persistence is something I rely on heavily. Skill develops over time, but work ethic is something that shapes progress every day.</p>
          </div>

          <div className='flex flex-col w-full gap-[14px] mb-[50px]'>
            <p className='font-semibold text-[16px]'>The Kind of Environment I Thrive In</p>
            <p className='font-normal text-[18px]'>I perform best around other developers who are building and improving constantly. Being surrounded by people who care about solving problems and writing better code pushes me to raise my own standards. Those environments accelerate growth.</p>
          </div>

          <div className='flex flex-col w-full gap-[14px]'>
            <p className='font-semibold text-[16px]'>What I Want People to Remember</p>  
            <p className='font-normal text-[18px]'>If someone visits my portfolio, the main thing I want them to see is the kind of developer I am. Someone who works hard. Someone who cares about the details. Someone who keeps learning. Not someone who claims to know everything—but someone who is committed to becoming better at the craft every day.</p>
          </div>
        
        </main>
      </div>
    </>
  )
}

export default page