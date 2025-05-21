// src/components/SimplePhilosophy.tsx
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import "./SimplePhilosophy.css";
import PhoneWIthTick from "./assets/scripts1.png"
import { Link } from "react-router-dom";

export function SimplePhilosophy() {
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
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS0zMiA0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-800/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column - 3D Phone Illustration */}
          <div className={`relative w-full lg:w-1/2 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="phone-shadow relative mx-auto max-w-xs md:max-w-sm">
              {/* Phone Frame */}
              <div className="phone-frame relative z-10 rotate-3 transform transition-transform duration-500 hover:rotate-0 floating">
                <img src={PhoneWIthTick} alt="Phone with Tick" className="w-full h-full rounded-xl shadow-lg" />
              </div>
              {/* Purple glow under the phone */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-purple-600/20 filter blur-xl rounded-full"></div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 delay-200 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="text-content">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl text-white">
                At <span className="inline-flex items-center">
                  <span className="gradient-text">Finance</span>
                  <span className="inline-block mx-1 text-purple-400 transition-all duration-300 rotate-90 transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M13.5 10.5L21 3M21 3H15M21 3V9M10.5 13.5L3 21M3 21H9M3 21L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="gradient-text">Link</span>
                </span>
              </h2>

              <h2 className="mb-6 text-3xl font-bold md:text-4xl text-white">
                we empower your financial <br />
                future with ease.
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  Finance Link Australia is here to simplify your financial journey. With tailored
                  solutions and expert guidance, we help you achieve your financial goals
                  confidently.
                </p>

                <p>
                  Our goal is to help you focus on what truly matters – getting things done! We'll
                  work diligently to find the ideal solution, customized specifically for you by one
                  of Australia's skilled financial experts. We understand how valuable your time is,
                  especially when managing kids in school, household tasks, and those never-ending
                  bills.
                </p>
                
                <div className="mt-8">
                  <Link to="/apply-now">
                    <button className="gradient-btn px-8 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all">
                      Learn More About Us
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

export default SimplePhilosophy;