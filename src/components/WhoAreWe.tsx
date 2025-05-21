// src/components/WhoAreWe.tsx
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "./SimplePhilosophy.css";
import image1 from "./assets/who-are-we1.webp";

export function WhoAreWe() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.2 });
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !isAnimated) {
            setIsAnimated(true);
        }
    }, [isInView, isAnimated]);

    return (
        <section ref={containerRef} className="relative overflow-hidden bg-dark-bg py-16 md:py-24">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS0zMiA0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-teal-900/10 to-transparent"></div>
                <div className="absolute top-20 right-20 w-80 h-80 bg-teal-800/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-40 left-20 w-72 h-72 bg-teal-700/10 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
                    {/* Left Column - 3D Phone Illustration */}
                    <div className={`relative w-full lg:w-1/2 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="phone-shadow relative mx-auto max-w-xs md:max-w-sm">
                            {/* Phone Frame */}
                            <div className="phone-frame relative z-10 rotate-3 transform transition-transform duration-500 hover:rotate-0 floating">
                                <img src={image1} alt="Team at work" className="w-full h-full rounded-xl shadow-lg" />
                            </div>
                            {/* teal glow under the phone */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-teal-600/20 filter blur-xl rounded-full"></div>
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className={`w-full lg:w-1/2 transition-all duration-700 delay-200 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="text-content">
                            <div className="inline-block px-4 py-1 mb-4 bg-teal-900/20 border border-teal-500/20 rounded-full">
                                <h3 className="text-sm md:text-base font-semibold text-teal-400">About Us</h3>
                            </div>

                            <h2 className="mb-2 text-3xl font-bold md:text-4xl text-white">
                                Who We Are
                            </h2>

                            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                                <span className="gradient-text">We Empower Your Financial </span><br />
                                Future with Ease.
                            </h2>

                            <div className="space-y-6 text-gray-300">
                                <p>
                                    Finance<span className="inline-block mx-1 text-teal-400 rotate-90">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M13.5 10.5L21 3M21 3H15M21 3V9M10.5 13.5L3 21M3 21H9M3 21L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>Link makes getting the funding you need simple—no complex applications, no hidden fees. We're not just about delivering accurate information; we're committed to fairness, transparency, and setting high standards as we help you reach your financial goals.
                                </p>

                                <p>
                                    For too long, the industry has struggled to connect people with lenders who truly meet their needs—especially when speed matters.

                                    At Finance<span className="inline-block mx-1 text-teal-400 rotate-90">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M13.5 10.5L21 3M21 3H15M21 3V9M10.5 13.5L3 21M3 21H9M3 21L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>Link, we're here to change that from the ground up—offering fast, reliable solutions through a clear, simple 1-2-3 process.
                                </p>
                                
                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Link to="/about">
                                        <button className="gradient-btn px-6 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all">
                                            Learn More
                                        </button>
                                    </Link>
                                    <Link to="/partners">
                                        <button className="bg-transparent hover:bg-teal-900/20 text-white font-medium px-6 py-3 border border-teal-500/40 rounded-full transition-all hover:border-teal-500/60">
                                            Partner With Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}