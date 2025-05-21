// src/components/Legal.tsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const LegalButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-dark-bg">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link to="https://fintelligence.com.au/privacy-policy/">
            <button
              type="button"
              className="dark-card w-full py-4 text-white rounded-xl transition duration-300 font-medium border border-teal-500/30 hover:border-teal-500/60 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-teal-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Privacy Policy
              </span>
            </button>
          </Link>
          
          <Link to="https://fintelligence.com.au/wp-content/uploads/2020/11/Complaint-Handling-Policy-Fintelligence_24112020.pdf">
            <button
              type="button"
              className="dark-card w-full py-4 text-white rounded-xl transition duration-300 font-medium border border-teal-500/30 hover:border-teal-500/60 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-teal-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Complaints Policy
              </span>
            </button>
          </Link>
          
          <Link to="https://static1.squarespace.com/static/6491303c412377594c5b04bc/t/656d29db9dbd5452e869e255/1701652956251/Credit+Guide.pdf">
            <button
              type="button"
              className="gradient-btn w-full py-4 text-white rounded-xl transition duration-300 font-medium"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Credit Guide
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}