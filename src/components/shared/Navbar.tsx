import { navLinks } from "../../constants";
import Button from "../ui/Button.tsx";
import { CgMenuRight } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "body",
      start: "120px top",
      onEnter: () => navRef.current?.classList.add("scrolled"),
      onLeaveBack: () => navRef.current?.classList.remove("scrolled"),
    });
  }, []);

  useEffect(() => {
    if (menuRef.current) gsap.set(menuRef.current, { x: "100%" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, { x: "0%", duration: 0.35, ease: "power2.out" });
    } else {
      document.body.style.overflow = "";
      gsap.to(menuRef.current, { x: "100%", duration: 0.35, ease: "power2.in" });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <>
      <header className="fixed w-full top-0 z-50" id="nav">
        <div
          ref={navRef}
          className="bg-fog/95 backdrop-blur-sm transition-all duration-300 border-b border-transparent"
        >
          <div className="section-shell flex items-center justify-between py-3.5 md:py-4">
            <Link
              to="/"
              className="font-mono text-sm font-medium tracking-tight text-ink"
            >
              yusrah.dev
            </Link>

            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((item) => (
                <a
                  href={item.link}
                  key={item.link}
                  className="font-mono text-xs text-muted hover:text-ink transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a href="mailto:mohammedyusi6@gmail.com">
                <Button
                  title="Get in touch"
                  containerClass="bg-ink text-white hover:bg-accent text-sm px-4 py-2"
                />
              </a>
            </nav>

            <button
              type="button"
              className="md:hidden p-1 text-ink"
              aria-label="Open menu"
              onClick={() => setIsOpen(true)}
            >
              <CgMenuRight className="size-7" />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        className="fixed inset-0 bg-fog z-[60] flex flex-col md:hidden"
      >
        <div className="section-shell flex items-center justify-between py-3.5 border-b border-ink/15">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm font-medium text-ink"
          >
            yusrah.dev
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-3xl leading-none text-ink px-1"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="section-shell flex-1 flex flex-col justify-between py-8">
          <div className="space-y-1">
            <p className="label-mono mb-4">menu</p>
            {navLinks.map((item, i) => (
              <a
                href={item.link}
                key={item.link}
                onClick={() => setIsOpen(false)}
                className="flex items-baseline justify-between gap-4 border-b border-line py-4"
              >
                <span className="font-display text-2xl font-semibold text-ink">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </div>

          <div className="space-y-5 pt-8">
            <a
              href="mailto:mohammedyusi6@gmail.com"
              className="flex w-full items-center justify-center bg-ink text-white px-5 py-3.5 rounded-md text-sm font-medium"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-5 text-ink">
              <Link
                to="https://github.com/miss-yusrah"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub className="size-5" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/yusrah-mohammed-513133312/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="size-5" />
              </Link>
              <Link
                to="https://x.com/MohammedNusee"
                target="_blank"
                aria-label="X"
              >
                <FaXTwitter className="size-5" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
