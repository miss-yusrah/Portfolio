const Projects = () => {
    
    const projects = [
        {
            id: 1,
            title: 'Quiz App (Anatomy & Physiology)',
            description: 'Interactive quiz application built for teaching and test prep.',
            image: '/Quiz.png', 
            live: 'https://quiz-app-tau-ecru-31.vercel.app',
            code: 'https://github.com/miss-yusrah/Quiz-App',
        },
        {
            id: 2,
            title: 'Jeteeah',
            description: 'A modern, Web3-powered Snake game built with Next.js, featuring classic gameplay mechanics enhanced with blockchain integration, token rewards, customizable skins, and achievement systems.',
            image: '/Game.png',
            live: 'https://jeteeah.vercel.app/',
            code: 'https://github.com/miss-yusrah/jeteeah',
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'A short description of project three. Focused on responsive UI and accessibility.',
            image: '',
            live: '',
            code: '',
        },
    ];

    return (
        <section className="bg-[#F5F3EB] text-[#191919] py-20 px-6 md:px-16 min-h-screen -mt-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Projects</h2>
                <div className="w-24 h-1 bg-[#191919] mx-auto mb-12"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p) => (
                        <article key={p.id} className="rounded-lg overflow-hidden shadow-lg ring-1 ring-black/10 hover:shadow-2xl hover:-translate-y-2 transform transition">
                            <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                                {p.image ? (
                                    <img src={p.image} alt={`${p.title} screenshot`} className="w-full h-full object-cover object-center block" loading="lazy" />
                                ) : (
                                    // simple fallback when image missing
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">No image</div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                                <p className="text-sm leading-relaxed mb-4 text-[#191919]/85">{p.description}</p>

                                <div className="flex items-center gap-3">
                                    <a className="text-sm font-medium text-[#191919] underline" href={p.live} target="_blank" rel="noreferrer">Live Demo</a>
                                    <a className="text-sm font-medium text-[#191919] underline" href={p.code} target="_blank" rel="noreferrer">View Code</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
