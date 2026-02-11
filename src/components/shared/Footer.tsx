import { navLinks } from "../../constants";
import { FaGithub, FaTelegram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-3.5 py-10 md:p-14 space-y-14">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8  ">
        <nav className="flex flex-col md:flex-row gap-5 md:gap-6 ">
          {navLinks.map((item, index) => (
            <a href={item.link} key={index}>
              <p className="font-normal text-[16px] hover:scale-105">
                {item.label}
              </p>
            </a>
          ))}
        </nav>
        <div className="flex gap-8">
          <Link
            to="https://www.linkedin.com/in/yusrah-mohammed-513133312/"
            target="_blank"
          >
            <FaLinkedin className="text-white size-6" />
          </Link>
          <Link
            to="https://discord.com/users/1462768883978080271"
            target="_blank"
          >
            <FaDiscord className="text-white size-6" />
          </Link>
          <Link to="https://x.com/MohammedNusee" target="_blank">
            <FaXTwitter className="text-white  size-6" />
          </Link>
          <Link to="https://github.com/miss-yusrah" target="_blank">
            <FaGithub className="text-white size-6" />
          </Link>
          <Link to="https://t.me/miss_nusee" target="_blank">
            <FaTelegram className="text-white  size-6" />
          </Link>
          <Link to="https://medium.com/@mohammedyusi6" target="_blank">
            <FaMedium className="text-white  size-6" />
          </Link>
        </div>
      </div>
      <hr className="text-secondary" />
      <p className="text-sm text-center">
        Yusrah Mohammed © 2026. All Right Reserved
      </p>
    </footer>
  );
};
export default Footer;
