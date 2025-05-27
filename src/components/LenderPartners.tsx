// src/components/LenderPartners.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from "framer-motion";
import './LenderPartners.css';
import lender1 from "./assets/lender/1.jpeg";
import lender2 from "./assets/lender/2.jpg";
import lender3 from "./assets/lender/3.png";
import lender4 from "./assets/lender/4.jpeg";
import lender5 from "./assets/lender/5.jpg";
import lender6 from "./assets/lender/6.png";
import lender7 from "./assets/lender/7.jpg";
import lender8 from "./assets/lender/8.png";
import lender9 from "./assets/lender/9.jpg";
import lender10 from "./assets/lender/10.png";
import lender11 from "./assets/lender/11.jpg";
import lender12 from "./assets/lender/12.png";
import lender13 from "./assets/lender/13.jpg";
import lender14 from "./assets/lender/14.png";
import lender15 from "./assets/lender/15.jpg";
import lender16 from "./assets/lender/16.png";
import lender17 from "./assets/lender/17.jpg";
import lender18 from "./assets/lender/18.png";
import lender19 from "./assets/lender/19.jpg";
import lender20 from "./assets/lender/20.png";
import lender21 from "./assets/lender/21.jpg";
import lender22 from "./assets/lender/22.png";
import lender23 from "./assets/lender/23.jpg";
import lender24 from "./assets/lender/24.png";
import lender25 from "./assets/lender/25.png";
import lender26 from "./assets/lender/26.png";
import lender27 from "./assets/lender/27.png";
import lender28 from "./assets/lender/28.png";
import lender29 from "./assets/lender/29.png";
import lender30 from "./assets/lender/30.png";
import lender31 from "./assets/lender/31.png";
import lender32 from "./assets/lender/32.png";
import lender33 from "./assets/lender/33.png";
import lender34 from "./assets/lender/34.png";
import lender35 from "./assets/lender/35.png";
import lender36 from "./assets/lender/36.png";
import lender37 from "./assets/lender/37.png";
import lender38 from "./assets/lender/38.png";
import lender39 from "./assets/lender/39.png";
import lender40 from "./assets/lender/40.png";
import lender41 from "./assets/lender/41.png";
import lender42 from "./assets/lender/42.png";
import lender43 from "./assets/lender/43.png";
import lender44 from "./assets/lender/44.png";
import lender45 from "./assets/lender/45.png";
import lender46 from "./assets/lender/46.png";
import lender47 from "./assets/lender/47.png";
import lender48 from "./assets/lender/48.png";
import lender49 from "./assets/lender/49.png";
import lender50 from "./assets/lender/50.png";
import lender51 from "./assets/lender/51.png";


export function LenderPartners() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  // Define our lending partners
  const lenders = [
    { name: "Pepper Money", logo: lender1 },
    { name: "Grow", logo: lender2 },
    { name: "Flexi Commercial", logo: lender3 },
    { name: "Firstmac", logo: lender4 },
    { name: "Finance One", logo: lender5 },
    { name: "Early Pay", logo: lender6 },
    { name: "Commonwealth Bank", logo: lender7 },
    { name: "Capital Finance", logo: lender8 },
    { name: "Branded Financial", logo: lender9 },
    { name: "BOQ", logo: lender10 },
    { name: "Pepper Money", logo: lender11 },
    { name: "Grow", logo: lender12 },
    { name: "Flexi Commercial", logo: lender13 },
    { name: "Firstmac", logo: lender14 },
    { name: "Finance One", logo: lender15 },
    { name: "Early Pay", logo: lender16 },
    { name: "Commonwealth Bank", logo: lender17 },
    { name: "Capital Finance", logo: lender18 },
    { name: "Branded Financial", logo: lender19 },
    { name: "BOQ", logo: lender20 },
    { name: "Pepper Money", logo: lender21 },
    { name: "Grow", logo: lender22 },
    { name: "Flexi Commercial", logo: lender23 },
    { name: "Firstmac", logo: lender24 },
    { name: "Finance One", logo: lender25 },
    { name: "Early Pay", logo: lender26 },
    { name: "Commonwealth Bank", logo: lender27 },
    { name: "Capital Finance", logo: lender28 },
    { name: "Branded Financial", logo: lender29 },
    { name: "BOQ", logo: lender30 },
    { name: "Pepper Money", logo: lender31 },
    { name: "Grow", logo: lender32 },
    { name: "Flexi Commercial", logo: lender33 },
    { name: "Firstmac", logo: lender34 },
    { name: "Finance One", logo: lender35 },
    { name: "Early Pay", logo: lender36 },
    { name: "Commonwealth Bank", logo: lender37 },
    { name: "Capital Finance", logo: lender38 },
    { name: "Branded Financial", logo: lender39 },
    { name: "BOQ", logo: lender40 },
    { name: "Pepper Money", logo: lender41 },
    { name: "Grow", logo: lender42 },
    { name: "Flexi Commercial", logo: lender43 },
    { name: "Firstmac", logo: lender44 },
    { name: "Finance One", logo: lender45 },
    { name: "Early Pay", logo: lender46 },
    { name: "Commonwealth Bank", logo: lender47 },
    { name: "Capital Finance", logo: lender48 },
    { name: "Branded Financial", logo: lender49 },
    { name: "BOQ", logo: lender50 },
    { name: "BOQ", logo: lender51 },
  ];

  // Handle image error by replacing with a placeholder
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, name: string) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // prevent infinite loop
    target.src = `https://placehold.co/200x80/2a1368/e2d1ff?text=${name}`;
  };

  return (
    <section ref={containerRef} className="relative py-16 md:py-20 bg-gradient-to-br from-dark-bg to-teal-900/30 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-bg opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS0zMiA0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-teal-900/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Lenders we partner with <span className="gradient-text">fighting to give</span><br />
            you the best deal!
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We work with Australia's leading financial institutions to find the perfect solution for your unique needs.
          </p>
        </div>

        {/* Logo carousel for large screens */}
        <div className={`partner-logos-container overflow-hidden transition-all duration-700 delay-200 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}>
          <div className="partner-logos-wrapper">
            <div className="partner-logos flex animate-scroll">
              {/* First set of logos */}
              {lenders.map((lender, index) => (
                <div 
                  key={`lender-1-${index}`} 
                  className="partner-logo-item flex items-center justify-center mx-4 dark-card p-4 rounded-lg shadow-sm border border-teal-500/20 backdrop-filter backdrop-blur-sm hover:border-teal-500/40 transition-all"
                >
                  <img 
                    src={lender.logo} 
                    alt={`${lender.name} logo`} 
                    className="h-12 md:h-16 object-contain filter" 
                    onError={(e) => handleImageError(e, lender.name)}
                  />
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {lenders.map((lender, index) => (
                <div 
                  key={`lender-2-${index}`} 
                  className="partner-logo-item flex items-center justify-center mx-4 dark-card p-4 rounded-lg shadow-sm border border-teal-500/20 backdrop-filter backdrop-blur-sm hover:border-teal-500/40 transition-all"
                >
                  <img 
                    src={lender.logo} 
                    alt={`${lender.name} logo`} 
                    className="h-12 md:h-16 object-contain filter brightness-0 invert" 
                    onError={(e) => handleImageError(e, lender.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid layout for smaller screens */}
        <div className={`md:hidden partner-logos-grid grid grid-cols-2 gap-4 px-4 py-6 transition-all duration-700 delay-300 ${isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {lenders.slice(0, 6).map((lender, index) => (
            <div 
              key={`lender-grid-${index}`} 
              className="partner-logo-grid-item flex items-center justify-center dark-card p-4 rounded-lg shadow-sm border border-teal-500/20 backdrop-filter backdrop-blur-sm"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={lender.logo} 
                alt={`${lender.name} logo`} 
                className="h-10 object-contain filter brightness-0 invert" 
                onError={(e) => handleImageError(e, lender.name)}
              />
            </div>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-300 mb-6">
            Want to learn more about our lending partners and find the best option for you?
          </p>
          <button className="gradient-btn px-6 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all">
            View All Lenders
          </button>
        </div> */}
      </div>
    </section>
  );
}