import React from 'react';

const HomeSection: React.FC = () => {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#about');
    if (targetElement) {
      // Use smooth scrolling behavior
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="./assets/bg_video.mp4"
        poster="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" // Simple dark poster to prevent white flash
      >
        Your browser does not support the video tag.
      </video>
      
      {/* Video Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4" style={{textShadow: '0 4px 10px rgba(0,0,0,0.5)'}}>
          AI Fundamentals
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-sky-300" style={{textShadow: '0 2px 5px rgba(0,0,0,0.5)'}}>
          AIF-25Fall
        </p>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 z-20 animate-bounce">
        <a href="#about" aria-label="Scroll to about section" onClick={handleScrollDown} className="cursor-pointer">
          <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HomeSection;