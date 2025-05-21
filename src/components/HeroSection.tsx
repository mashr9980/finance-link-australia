// src/components/HeroSection.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface HeroSectionProps {
  head: string,
  titleShort: string;
  titleLong: string;
  image: string[];
  text: string;
  overlay: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ head, titleShort, titleLong, image, text, overlay }) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const shouldShowOverlay = currentPath === "/" || currentPath === "/products";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="hero-section relative py-16 md:py-24 overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-800/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>
        
        <div className={`sm-pb-0 container mx-auto grid grid-cols-1 gap-10 pb-20 pt-10 md:grid-cols-2 md:gap-20 md:pb-0 z-10 relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col justify-center fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-1 mb-4 bg-purple-900/20 border border-purple-500/20 rounded-full">
              <h3 className="text-sm md:text-base font-semibold text-purple-400">{head}</h3>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              <span className="gradient-text">{titleShort}</span>
              <br />
              {titleLong}
              <br />
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              {text}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/apply-now">
                <button className="gradient-btn px-8 py-3 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-600/20 transition-all">
                  Get Started
                </button>
              </Link>
              <Link to="/products">
                <button className="bg-transparent hover:bg-purple-900/20 text-white font-medium px-8 py-3 border border-purple-500/40 rounded-full transition-all hover:border-purple-500/60">
                  Explore Options
                </button>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-[90vw] sm:w-[70vw] lg:w-[50vw] aspect-[3/4] max-w-[500px]">
              {/* Hand and phone image as background */}
              <div
                className={`absolute inset-0 bg-no-repeat bg-contain bg-center ${shouldShowOverlay ? "hero-overlay-bg" : ""} floating`}
                style={{ backgroundImage: `url(${image[0]})` }}
              ></div>

              {/* Overlay positioned using flex, no hardcoded left/top */}
              {overlay && (
                <div className={`absolute inset-0 flex items-center justify-center p-4 mb-44 ${shouldShowOverlay ? "hero-overlay-main" : ""}`}>
                  <div className={`w-[65%] dark-card rounded-xl p-5 glow ${shouldShowOverlay ? "hero-overlay" : ""}`}>
                    <h3 className="mb-3 text-lg font-bold text-purple-300">Let's get started</h3>
                    <div className="mb-3">
                      <p className="mb-1 text-xs text-gray-300">How much do you want to borrow?</p>
                      <div className="flex items-center rounded-md bg-dark-surface border border-purple-500/40 px-3 py-2 text-sm">
                        <span className="mr-1 text-purple-400">$</span>
                        <input
                          type="text"
                          className="flex-1 bg-transparent outline-none"
                          placeholder="0"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(e.target.value)}
                        />
                      </div>
                    </div>
                    <Link to="/apply-now">
                      <button className="w-full rounded-full gradient-btn py-2 text-sm text-white hover:shadow-lg hover:shadow-purple-600/20 transition-all">
                        See Your Options
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection