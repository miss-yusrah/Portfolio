import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  // lock body scroll when mobile menu is open and close on Esc
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : prev;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-[#191919] bg-[#FAF9F6] text-[#191919] py-4 px-4 md:px-16">
        {/* TOP BAR */}
        <div className="flex justify-between items-center">
          {/* Name */}
          <Link to="/">
            <h1 className="text-xl text-[#191919] font-bold cursor-pointer hover:opacity-80 transition">Yusrah Eruaga Mohammed</h1>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex flex-wrap gap-4 md:gap-8 items-center text-base md:text-lg">
            <Link to="/about" className="text-[#191919] transition hover:underline">About</Link>
            <Link to="/projects" className="text-[#191919] transition hover:underline">Projects</Link>
            <Link to="/skills" className="text-[#191919] transition hover:underline">Skills</Link>
            <Link to="/contact" className="text-[#191919] transition hover:underline">Contact</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#191919] hover:bg-[rgba(25,25,25,0.04)]"
            title={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              // close icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M18 6L6 18" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              // hamburger icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 6h18" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 12h18" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18h18" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu: animated slide-down */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 top-full bg-[#F5F3EB] rounded-b-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
            }`}
          aria-hidden={!open}
        >
          <div className="flex flex-col p-4 gap-3">
            <Link onClick={() => setOpen(false)} to="/about" className="text-[#191919] text-lg font-medium px-2 py-2 rounded hover:bg-[rgba(25,25,25,0.04)] transition hover:underline">About</Link>
            <Link onClick={() => setOpen(false)} to="/projects" className="text-[#191919] text-lg font-medium px-2 py-2 rounded hover:bg-[rgba(25,25,25,0.04)]transition hover:underline">Projects</Link>
            <Link onClick={() => setOpen(false)} to="/skills" className="text-[#191919] text-lg font-medium px-2 py-2 rounded hover:bg-[rgba(25,25,25,0.04)] transition hover:underline">Skills</Link>
            <Link onClick={() => setOpen(false)} to="/contact" className="text-[#191919] text-lg font-medium px-2 py-2 rounded hover:bg-[rgba(25,25,25,0.04)] transition hover:underline">Contact</Link>
          </div>
        </div>
      </nav>
      {/* spacer to prevent content from being hidden behind the fixed navbar */}
      <div className="h-20 md:h-20" aria-hidden="true" />
    </>
  )
}

export default Navbar;