// src/components/LoanDivisions.tsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { personalLoanOptions, businessLoanOptions } from "@/Static/LoanOptions";

export function LoanDivisions() {
  const [activeTab, setActiveTab] = useState("personal");
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  useEffect(() => {
    setAnimate(true);
  }, [activeTab]);
  
  // Display options based on active tab
  const displayOptions = activeTab === "personal" ? personalLoanOptions : businessLoanOptions;

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setAnimate(false);
    setTimeout(() => {
      setActiveTab(tab);
    }, 300);
  };

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Dark background with gradient overlay */}
      <div className="absolute inset-0 bg-dark-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-dark-bg"></div>
      </div>
      
      {/* Animated blurred circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-teal-600/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-teal-800/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-4xl text-white">
          Loan <span className="gradient-text">Divisions</span>
        </h2>

        {/* Tabs */}
        <div className="relative mx-auto mb-10 flex max-w-md overflow-hidden rounded-full p-1 bg-dark-surface border border-teal-900/30">
          <button
            className={`loan-tab flex-1 px-6 py-3 text-center font-medium transition-all duration-300 rounded-full ${activeTab === "personal" ? "gradient-btn text-white" : "text-gray-300"}`}
            onClick={() => handleTabChange("personal")}
          >
            Personal
          </button>
          <button
            className={`loan-tab flex-1 px-6 py-3 text-center font-medium transition-all duration-300 rounded-full ${activeTab === "business" ? "gradient-btn text-white" : "text-gray-300"}`}
            onClick={() => handleTabChange("business")}
          >
            Business
          </button>
        </div>

        {/* Loan Options Grid */}
        <div
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 transition-all duration-500 ${animate ? "opacity-100" : "opacity-0"}`}
        >
          {displayOptions.map((option, index) => (
            <div
              key={option.id}
              className="loan-option dark-card flex flex-col items-center p-8 rounded-xl transform transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="loan-icon mb-6 h-20 w-20 p-4 rounded-full bg-teal-900/20 border border-teal-500/20 flex items-center justify-center">
                <img src={option.icon} alt={`${option.title} icon`} className="h-full w-full object-contain" style={{filter: "invert(1) brightness(0.8) sepia(1) hue-rotate(230deg) saturate(4)"}} />
              </div>
              <h3 className="mb-3 text-center text-xl font-semibold text-white">{option.title}</h3>
              <p className="loan-description mb-6 text-center text-gray-300 text-sm">
                {option.description}
              </p>
              <Link
                to={`/${activeTab === "personal" ? "personal" : "business"}-loans/${option.id}`}
                className="mt-auto inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium bg-dark-surface text-teal-300 border border-teal-500/30 hover:bg-teal-900/20 hover:border-teal-500/50 transition-all"
              >
                Learn More
                <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}