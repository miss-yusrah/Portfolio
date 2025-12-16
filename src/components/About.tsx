import React from 'react';

const About = () => {
    return (
        <section className="bg-[#F5F3EB] text-[#191919] py-20 px-6 md:px-16 min-h-screen flex items-center justify-center -mt-20">
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    About Me
                </h2>

                {/* Decorative underline */}
                <div className="w-24 h-1 bg-[#191919] mx-auto mb-12"></div>

                {/* Main description */}
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-[#191919]/90">
                    I'm a passionate web developer with experience in building modern, scalable web applications. I
                    love turning complex problems into simple, beautiful, and intuitive designs.
                </p>
                <p className='text-lg md:text-xl leading-relaxed mb-8 text-[#191919]/90'>
                    I transitioned from Nutrition & Dietetics into tech and have been learning frontend development 
                    since 200 level. I enjoy turning designs into functional interfaces, improving accessibility, and writing maintainable code. 
                    I’m actively building projects, contributing on GitHub, and learning modern tools like Next.js
                </p>

                {/* Secondary description */}
                <p className="text-lg md:text-xl leading-relaxed text-[#191919]/90">
                    When I'm not coding, you can find me exploring new technologies, contributing to open source, or
                    sharing my knowledge through writing and mentoring.
                </p>
            </div>
        </section>
    );
};

export default About;
