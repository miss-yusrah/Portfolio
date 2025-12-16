import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-[#191919] bg-[#FAF9F6] text-[#191919] py-4 px-4 md:px-16">
        {/* TOP BAR */}
        <div className="flex justify-between">
          {/* Name */}
          <Link to="/">
            <h1 className="text-xl text-[#191919] font-bold cursor-pointer hover:opacity-80 transition">Yusrah Eruaga Mohammed</h1>
          </Link>

          {/* Navigation links - visible on all sizes, wrap on small screens */}
          <div className="flex flex-wrap gap-4 md:gap-8 items-center text-base md:text-lg">
            <Link to="/about" className="text-[#191919] transition hover:underline">About</Link>
            <Link to="/projects" className="text-[#191919] transition hover:underline">Projects</Link>
            <Link to="/skills" className="text-[#191919] transition hover:underline">Skills</Link>
            <Link to="/contact" className="text-[#191919] transition hover:underline">Contact</Link>
          </div>
        </div>
      </nav>
      {/* spacer to prevent content from being hidden behind the fixed navbar */}
      <div className="h-20 md:h-20" aria-hidden="true" />
    </>
  )
}

export default Navbar;