import { Link } from 'react-router-dom';

// Import CV from src/assets so it is bundled with the app. 
const cvUrl = new URL('../assets/Yusrah_CV.pdf', import.meta.url).href;

const Hero = () => {
  return (
    <section className="bg-[#F5F3EB] text-[#E2E8F0] py-20 px-6 md:px-16 -mt-5">
      <div className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-between gap-12 max-w-6xl mx-auto">

        {/* LEFT SIDE — TEXT */}
        <div className="w-full sm:w-1/2 md:w-[55%] text-center sm:text-left text-[#191919]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Yusrah
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Frontend Developer
          </h2>

          <p className="leading-relaxed mb-8">
            I’m a Frontend Developer passionate about building clean, responsive,
            and user-focused web interfaces. My experience spans HTML, CSS,
            JavaScript, TypeScript, React, and Tailwind CSS, with hands-on work
            developing functional, accessible, and modern digital solutions.
            <br /><br />
            I’ve worked with teams to build real-world
            applications and improve user experience using responsive design and modern frontend practices. I also sharpen my skills through coding challenges, hackathons, and continuous learning, especially in problem-solving, performance, and UI/UX.
            <br /><br />
            I’m passionate about writing clean code, building
            reusable components, optimizing performance, and continuously improving my skills through learning, challenges, and hands-on development.
            a developer and contributing to impactful projects.
          </p>

          {/* Buttons */}
          <div className="flex flex-row flex-wrap gap-4 justify-center  md:justify-start
">
            {/* Link to the projects page (client-side navigation) */}
            <Link to="/projects" className="border border-[#0A192F] text-[#0A192F] font-semibold py-3 px-6 rounded-md hover:opacity-90 transition hover:-translate-y-1 hover:scale-105 transition-transform duration-200 inline-block">
              View My Projects
            </Link>

            {/* Link to a CV file placed in the public/ folder */}
            <a href={cvUrl} target="_blank" rel="noopener noreferrer" download className="border border-[#0A192F] text-[#0A192F] font-semibold py-3 px-6 rounded-md hover:opacity-90 transition hover:-translate-y-1 hover:scale-105 transition-transform duration-200 inline-block">
              View My CV
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="hidden sm:flex w-full sm:w-1/2 md:w-[45%] justify-center sm:justify-end">
          <img
            src="/yusrah.jpeg"
            alt="Yusrah Portrait"
            className="w-72 sm:w-64 md:w-[300px] lg:w-[360px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
