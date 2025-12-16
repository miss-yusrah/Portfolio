const Footer = () => {
    return (
        <footer className="fixed left-0 bottom-0 w-full border-t border-[#191919] bg-[#FAF9F6] text-[#191919] py-4 px-4 md:px-16 ">
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <p className="text-sm">© {new Date().getFullYear()} Yusrah Eruaga Mohammed. All rights reserved.</p>

                <div className="flex items-center gap-6">
                    {/* simple SVG icon placeholders */}
                    <a href="https://github.com/miss-yusrah" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#191919] hover:-translate-y-1 hover:scale-105 transition-transform duration-200">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.34 1.9-1.3 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" fill="currentColor" /></svg>
                    </a>

                    <a href="https://www.linkedin.com/in/yusrah-mohammed-513133312/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#191919] hover:-translate-y-1 hover:scale-105 transition-transform duration-200">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className='text-white'><path d="M6.94 6.94a1.94 1.94 0 110-3.88 1.94 1.94 0 010 3.88zM3 21h8v-9H3v9zM21 21h-8v-4.5c0-2.22-2.5-2.05-2.5 0V21H2V7h8v1.7c1.96-3.28 7.04-3.53 7.04 1.56V21z" fill="currentColor" /></svg>
                    </a>

                    <a href=" https://x.com/MohammedNusee?t=EkMjo3Aj8RiuS_3wIhqS3A&s=08" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#191919] text-white hover:-translate-y-1 hover:scale-105 transition-transform duration-200">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 5.92c-.63.28-1.3.48-2 .57.72-.43 1.27-1.12 1.53-1.94-.67.4-1.41.7-2.2.86A3.48 3.48 0 0016.5 4c-1.92 0-3.48 1.57-3.48 3.5 0 .27.03.53.09.78-2.89-.15-5.45-1.53-7.17-3.64-.3.52-.47 1.12-.47 1.76 0 1.21.62 2.28 1.56 2.91-.58-.02-1.13-.18-1.61-.44v.04c0 1.7 1.21 3.12 2.82 3.45-.29.08-.6.12-.92.12-.22 0-.43-.02-.64-.06.43 1.3 1.67 2.25 3.14 2.28A6.98 6.98 0 012 19.54 9.86 9.86 0 007.29 21c7.55 0 11.69-6.25 11.69-11.67v-.53c.8-.57 1.49-1.28 2.03-2.09-.73.33-1.51.56-2.32.66z" fill="currentColor" /></svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
