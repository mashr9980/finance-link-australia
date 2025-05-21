// src/components/QuoteButton.tsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function QuoteButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show button only after scrolling down a bit
      setIsVisible(scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`fixed right-0 top-1/2 z-10 -translate-y-1/2 transform transition-all duration-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Animated glow effect */}
        <div 
          className={`absolute inset-0 rounded-l-lg bg-purple-600/30 blur-lg transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        ></div>
        
        <Link to="/apply-now">
          <button 
            className="group relative flex h-48 w-12 flex-col items-center justify-center rounded-l-lg gradient-btn shadow-lg transition-all duration-300 hover:w-14"
          >
            <span className="vertical-text font-medium uppercase tracking-wider text-white">
              Request Quote
            </span>
            
            {/* Right arrow icon that appears on hover */}
            <div className={`absolute right-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <svg 
                className="h-5 w-5 text-white animate-pulse" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}