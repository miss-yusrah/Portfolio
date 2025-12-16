import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <section className="bg-[#F5F3EB] text-[#191919] py-20 px-6 md:px-16 min-h-screen -mt-5">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Skills & Technologies</h2>
                <div className="w-24 h-1 bg-[#191919] mx-auto mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Frontend */}
                    <div className="bg-[#ffffff0f] rounded-xl p-6 shadow-lg ring-1 ring-black/10 hover:shadow-2xl hover:-translate-y-2 transform transition">
                        <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
                        <ul className="space-y-4">
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">HTML</li>
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">CSS</li>
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">JavaScript</li>
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">React</li>
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">Next.js</li>
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">Tailwind CSS</li>
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">TypeScript</li>
                        </ul>
                    </div>

                    {/* Version Control */}
                    <div className="bg-[#ffffff0f] rounded-xl p-6 shadow-lg ring-1 ring-black/10 hover:shadow-2xl hover:-translate-y-2 transform transition">
                        <h3 className="text-2xl font-semibold mb-4">Version Control</h3>
                        <ul className="space-y-4">
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">Git</li>
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">GitHub</li>
                        </ul>
                    </div>

                    {/* Backend & Other */}
                    <div className="bg-[#ffffff0f] rounded-xl p-6 shadow-lg ring-1 ring-black/10 hover:shadow-2xl hover:-translate-y-2 transform transition">
                        <h3 className="text-2xl font-semibold mb-4">Other</h3>
                        <ul className="space-y-4">
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">Node.js / Express (basic)</li>
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">Responsive Design</li>
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">Team Collaboration</li>
                            <li className="bg-[#061024] text-white/90 rounded-md p-4">UI/UX Principles</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/projects" className="inline-block bg-[#0A192F] text-white font-semibold py-3 px-6 rounded-md">See Projects</Link>
                </div>
            </div>
        </section>
    );
};

export default Skills;

