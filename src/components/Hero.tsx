import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  const backgroundImages = [
    "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg",
    "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    "https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out transform ${
            currentBg === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={image}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-transparent"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            Building the Future with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 font-normal">
              Precision & Passion
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            MargiInfra delivers world-class infrastructure and construction solutions that transform visions into architectural excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#projects"
              className="group bg-gradient-to-br from-gold-400 to-gold-600 text-white px-10 py-4 rounded-lg font-medium text-lg hover:from-gold-500 hover:to-gold-700 transition-all transform hover:scale-105 hover:shadow-gold-500/25 hover:shadow-xl flex items-center justify-center gap-2"
            >
              Explore Our Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <button className="group backdrop-blur-sm bg-white/10 text-white px-10 py-4 rounded-lg font-medium text-lg hover:bg-white/15 transition-all flex items-center justify-center gap-2 border border-white/10">
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Watch Video
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
            {[
              { number: '18+', label: 'Years Experience' },
              { number: '500+', label: 'Projects Completed' },
              { number: '200+', label: 'Happy Clients' },
              { number: '50+', label: 'Expert Team' },
            ].map((stat, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/5 p-8 rounded-xl text-center transform hover:scale-105 transition-all border border-white/10 hover:border-gold-500/30">
                <div className="text-4xl font-light bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300 font-light tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Background navigation dots */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBg(index)}
              className={`h-1 transition-all ${
                currentBg === index ? 'w-8 bg-gold-400' : 'w-4 bg-white/30'
              } rounded-full hover:bg-gold-400/50`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center text-white/70 hover:text-gold-400 transition-colors">
          <span className="text-sm mb-2 font-light">Scroll to explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
