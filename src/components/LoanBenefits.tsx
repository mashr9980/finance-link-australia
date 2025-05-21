// src/components/LoanBenefits.tsx
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "./SimplePhilosophy.css";

interface LoanBenefitsProps {
    titleShort: string;
    titleLong: string;
    textF: string;
    textL: string;
    images: string;
}

export const LoanBenefits: React.FC<LoanBenefitsProps> = ({ titleShort, titleLong, textF, textL, images }) => {
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
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-800/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-purple-900/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column - Image Illustration */}
          <div className={`relative w-full lg:w-1/2 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="phone-shadow relative mx-auto max-w-xs md:max-w-sm">
              {/* Image Frame */}
              <div className="phone-frame relative z-10 rotate-3 transform transition-transform duration-500 hover:rotate-0 floating">
                <img src={images} alt="Loan Benefit" className="w-full h-full rounded-xl shadow-lg" />
              </div>
              {/* Purple glow under the image */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-purple-600/20 filter blur-xl rounded-full"></div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 delay-200 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="text-content">
              <div className="inline-block px-4 py-1 mb-4 bg-purple-900/20 border border-purple-500/20 rounded-full">
                <h3 className="text-sm md:text-base font-semibold text-purple-400">Loan Benefits</h3>
              </div>

              <h2 className="mb-2 text-3xl font-bold md:text-4xl text-white">
                {titleShort}
              </h2>

              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                <span className="gradient-text">{titleLong}</span>
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>{textF}</p>
                <p>{textL}</p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/apply-now">
                    <button className="gradient-btn px-6 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all">
                      Apply Now
                    </button>
                  </Link>
                  <button className="bg-transparent hover:bg-purple-900/20 text-white font-medium px-6 py-3 border border-purple-500/40 rounded-full transition-all hover:border-purple-500/60">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}