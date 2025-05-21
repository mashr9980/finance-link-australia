// src/components/Process.tsx
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function Process() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: false, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const processes = [
    {
      title: "Fast Loan Applications",
      description: "Get your loan approved quickly with our simple application process. Minimal paperwork. Maximum speed.",
      icon: (
        <svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Individually Tailored Solutions",
      description: "We craft loan options that fit your unique financial goals. One size doesn't fit all — and we don't believe it should.",
      icon: (
        <svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9999 2H5.99994C4.89537 2 3.99994 2.89543 3.99994 4V20C3.99994 21.1046 4.89537 22 5.99994 22H17.9999C19.1045 22 19.9999 21.1046 19.9999 20V4C19.9999 2.89543 19.1045 2 17.9999 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 10H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Competitive Interest Rates",
      description: "Enjoy low interest rates that save you money over time. Fair rates. Better value.",
      icon: (
        <svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="relative py-20 bg-dark-surface overflow-hidden" ref={containerRef}>
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="absolute right-10 top-20 w-40 h-40 rounded-full bg-purple-700/10 filter blur-3xl"></div>
        <div className="absolute left-10 bottom-20 w-40 h-40 rounded-full bg-purple-900/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We've streamlined our approach to make financing simple, transparent, and hassle-free
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div 
              key={index}
              className={`dark-card rounded-xl p-8 backdrop-blur-sm transition-all duration-700 relative ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card number */}
              <div className="absolute -top-6 -left-2 w-12 h-12 flex items-center justify-center bg-purple-900 rounded-lg glow">
                <span className="text-xl font-bold text-white">{index + 1}</span>
              </div>
              
              {/* Icon */}
              <div className="mb-6 glowing-icon">
                {process.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl text-white font-bold mb-4">{process.title}</h3>
              <p className="text-gray-300">{process.description}</p>
              
              {/* Connecting line for desktop */}
              {index < processes.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H38" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="2 2"/>
                    <path d="M32 1L38 6L32 11" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}