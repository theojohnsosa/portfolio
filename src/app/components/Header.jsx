"use client"

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="flex justify-between items-center sticky top-0 z-1 px-10 py-4 border-b border-[#E0E0E0] bg-[#F2F0EF]">
        <Link href="/" className="font-semibold text-lg">
          © Theo
        </Link>
        <nav className="hidden md:flex gap-7">
          <Link href="/" className="font-semibold">Overview</Link>
          <Link href="/projects" className="font-normal">Projects</Link>
          <Link href="/services" className="font-normal">Services</Link>
          <Link href="/more-info" className="font-normal underline italic">More Info</Link>
        </nav>
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}>
          <Image
            className='cursor-pointer'
            src="/hamburger.svg"
            alt="menu"
            width={24}
            height={24}
          />
        </button>
      </header>
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-72 bg-[#F2F0EF] border-l border-[#E0E0E0] z-2 shadow-lg flex flex-col">
          <button
            className="absolute top-6 right-6"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              className='cursor-pointer'
              src="/close.svg"
              alt="close menu"
              width={24}
              height={24}
            />
          </button>
          <nav className="flex-1 overflow-auto px-10 pt-20 pb-6 flex flex-col gap-4">
            <Link href="/" className="font-semibold">Overview</Link>
            <Link href="/projects" className="font-normal">Projects</Link>
            <Link href="/services" className="font-normal">Services</Link>
            <Link href="/more-info" className="font-normal underline italic">More Info</Link>
          </nav>
          <p className="mt-auto text-center font-normal pb-6">
            © Theojohn Sosa
          </p>
        </div>
      )}
    </>
  );
}

export default Header