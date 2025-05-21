// src/components/WhyLoveFloatMe.tsx
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { WhyLoveSteps } from "@/Static/WhyLove";
import "./WhyLoveFloatMe.css";

export function WhyLoveFloatMe() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  return (
    <div ref={containerRef} className="relative py-24 bg-dark-bg overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS0zMiA0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
      </div>

      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between relative z-10">
        <div className={`text-center transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="mt-4 text-sm leading-7 text-gray-400 font-regular">
            A few reasons why you
          </p>
          <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-white mb-2">
            Will Love <span className="gradient-text">Finance Link Australia</span>
          </h3>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            We're committed to providing exceptional service and transparent solutions
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {WhyLoveSteps.map((step, idx) => (
            <div 
              key={idx} 
              className={`why-love-cards--parent transition-all duration-700 transform ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="dark-card rounded-xl p-6 relative overflow-hidden group hover:scale-[1.03] transition-all duration-300">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="why-love-cards flex flex-row items-start relative">
                  <div className="why-love-steps flex flex-col items-center justify-center mr-5">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-900 text-white border-4 border-dark-bg text-xl font-semibold glow">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg leading-6 font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{step.title}</h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{step.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className={`mt-16 text-center transition-all duration-700 delay-600 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="gradient-btn px-8 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyLoveFloatMe;