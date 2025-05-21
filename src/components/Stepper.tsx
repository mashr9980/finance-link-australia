// src/components/Stepper.tsx
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

export function Stepper() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.2 });
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !isAnimated) {
            setIsAnimated(true);
        }
    }, [isInView, isAnimated]);

    const steps = [
        {
            number: 1,
            title: "Fast Online Applications",
            description: "Complete our simple online form in minutes and get started right away.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            number: 2,
            title: "Receive Outcome Within Hours",
            description: "Get a decision quickly with our streamlined approval process.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            number: 3,
            title: "Get Funds Quickly",
            description: "Access your funds as soon as the same day once approved.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 10H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        }
    ];

    return (
        <div ref={containerRef} className="relative py-24 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-teal-900/30 to-dark-bg z-0"></div>
            
            {/* Floating shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-12 left-1/4 w-48 h-48 bg-teal-800/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-teal-600/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        Our Process is <span className="gradient-text">Quick & Easy</span> <br className="hidden sm:block" />
                        —Just 3 Simple Steps.
                    </h2>
                </div>

                {/* Steps container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Connection line (desktop only) */}
                    <div className="hidden md:block absolute top-28 left-0 w-full h-0.5 bg-gradient-to-r from-teal-900/20 via-teal-600/40 to-teal-900/20"></div>
                    
                    {/* Steps */}
                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            className={`relative transition-all duration-700 transform ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Step number badge */}
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center bg-dark-surface border-4 border-teal-800 rounded-full shadow-lg z-20">
                                <span className="text-3xl font-bold gradient-text">{step.number}</span>
                            </div>
                            
                            {/* Card content */}
                            <div className="pt-12 pb-8 px-6 dark-card rounded-xl text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="p-3 bg-teal-900/20 text-teal-400 rounded-full">
                                        {step.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                            </div>
                            
                            {/* Arrow connector (desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-28 -right-6 transform -translate-y-1/2 z-10">
                                    <svg className="w-12 h-12 text-teal-500/80" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={`relative z-20 mt-12 flex justify-center transition-all duration-700 delay-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="backdrop-blur-md bg-dark-surface/60 border border-teal-500/20 rounded-2xl shadow-xl py-6 px-8 text-center transform hover:scale-105 transition-transform">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold gradient-text">
                            Surprisingly easy, right?
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}