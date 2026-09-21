import { navLinks } from "../../constants";
import { FaGithub, FaTelegram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-fog text-ink border-t border-ink py-8 md:py-10">
      <div className="section-shell flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <p className="font-mono text-sm text-muted">
          © 2026 Yusrah Mohammed
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((item) => (
            <a
              href={item.link}
              key={item.link}
              className="font-mono text-xs text-muted hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-4 text-ink">
          <Link
            to="https://www.linkedin.com/in/yusrah-mohammed-513133312/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="size-4" />
          </Link>
          <Link
            to="https://github.com/miss-yusrah"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub className="size-4" />
          </Link>
          <Link to="https://x.com/nuseeX" target="_blank" aria-label="X">
            <FaXTwitter className="size-4" />
          </Link>
          <Link
            to="https://medium.com/@mohammedyusi6"
            target="_blank"
            aria-label="Medium"
          >
            <FaMedium className="size-4" />
          </Link>
          <Link
            to="https://discord.com/users/1462768883978080271"
            target="_blank"
            aria-label="Discord"
          >
            <FaDiscord className="size-4" />
          </Link>
          <Link to="https://t.me/miss_nusee" target="_blank" aria-label="Telegram">
            <FaTelegram className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
