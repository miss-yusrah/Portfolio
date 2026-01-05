import { FaGithub, FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="fixed left-0 bottom-0 w-full border-t border-[#191919] bg-[#FAF9F6] text-[#191919] py-4 px-4 md:px-16 ">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} Yusrah Eruaga Mohammed.
        </p>

        <div className="flex items-center gap-6">
          {/* simple SVG icon placeholders */}
          <a
            href="https://github.com/miss-yusrah"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#191919] hover:-translate-y-1 hover:scale-105 transition-transform duration-200"
          >
            <FaGithub size={20} className="text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/yusrah-mohammed-513133312/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#191919] hover:-translate-y-1 hover:scale-105 transition-transform duration-200"
          >
            <FaLinkedin size={20} className="text-white" />
          </a>

          <a
            href=" https://x.com/MohammedNusee"
            aria-label="X"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#191919] text-white hover:-translate-y-1 hover:scale-105 transition-transform duration-200"
          >
            <FaXTwitter size={20} className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
