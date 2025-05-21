import React from "react";
import "./WhyProcess.css";

export function WhyProcess() {
  return (
    <section className="why-process-section relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row relative">

           {/* Vertical timeline line */}
           <div className="vertical-timeline hidden md:block">
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>
          </div>
        
          {/* Left side content */}
          <div className="why-content mb-12 md:mb-0 md:w-1/2 md:pr-12 z-10 relative">
            <div className="heading-container mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Why</h2>
              <div className="flex items-center">
                <span className="text-3xl md:text-4xl font-bold text-black">FL</span>
                <span className="piggy-icon">
                  <svg viewBox="0 0 36 36" className="w-10 h-10">
                    <path 
                      d="M33.48,14.13a2.38,2.38,0,0,0-1.14-4.3l-.12,0c-1.59-.31-3.55-.79-5.18-1.2a6.41,6.41,0,0,0,.08-1,6.16,6.16,0,0,0-6.15-6.15,6.25,6.25,0,0,0-5.06,2.64c-1-.11-2.22-.2-3.14-.2a16.94,16.94,0,0,0-8.93,2.36A2.5,2.5,0,0,0,2,8.68a2.44,2.44,0,0,0,.35,1.24A15.47,15.47,0,0,0,2,12.67,15.34,15.34,0,0,0,4,21.66l-.93,1a5.26,5.26,0,0,0,.5,7.42,5.24,5.24,0,0,0,7.3-.13l2-2.21a16.6,16.6,0,0,0,4.14.84v.43a2.07,2.07,0,0,0,2.17,2h8a2.07,2.07,0,0,0,2.17-2v-12a5.82,5.82,0,0,0,4.4-5.61,7.8,7.8,0,0,0-.18-1.64" 
                      fill="#be93f3"
                    />
                    <ellipse cx="18" cy="9" rx="2" ry="1.5" fill="#000000" />
                    <ellipse cx="13" cy="9" rx="2" ry="1.5" fill="#000000" />
                  </svg>
                </span>
                <span className="text-3xl md:text-4xl font-bold text-black">AT ME</span>
              </div>
            </div>

            <div className="text-content">
              <p className="mb-5 text-teal-600 font-medium">We know that life can be tough.</p>
              
              <p className="mb-5">
                It's not easy, especially in this day and age when everyone wants 
                something from you or your hard-earned money at any given time - 
                often without even giving off an honest impression of themselves 
                <span className="text-red-600">beforehand!</span>
              </p>
              
              <p className="mb-5">
                But we're here to change all that: give people more power than ever 
                before by removing the need for lengthy applications (or jumping 
                through hoops), accurate credit scores based on true performance 
                rather then just outdated information found within <span className="text-red-600">tedious databases</span>- 
                and most importantly:
              </p>
              
              <p className="mb-5 text-teal-600 font-medium">
                Provide financing solutions tailored specifically towards YOUR needs.
              </p>
              
              <p className="text-teal-600 font-medium text-lg">
                We know you will love us!
              </p>
            </div>
          </div>

          {/* Vertical timeline line */}
          

          {/* Right side - will be part of the ProcessSteps component */}
          <div className="md:w-1/2 z-10 relative">
            {/* This section intentionally left empty as it will be handled by the ProcessSteps component */}
            <div className="character-container mt-8 opacity-0">
              <img 
                src="/character.png" 
                alt="3D character" 
                className="floating-character w-full max-w-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 