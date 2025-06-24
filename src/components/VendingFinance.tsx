// src/components/VendingFinance.tsx
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

export function VendingFinance() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  const vendingFeatures = [
    {
      title: "Industry Expertise",
      description: "Most experienced vending machine finance specialists in Australia",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Empire Building",
      description: "Personalized quotes to help build your vending machine empire",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 12H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Obligation Free",
      description: "Get quotes without any commitment or obligation",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "No Credit Impact",
      description: "Enquiries won't impact your credit file",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15V17M12 7V9M9 12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const vendingBenefits = [
    "Competitive interest rates tailored for vending businesses",
    "Flexible repayment terms that match your cash flow",
    "Fast approval process to get your machines operating quickly",
    "Expert guidance on vending machine investment strategies",
    "Support for both new and experienced vending operators",
    "Access to Australia's most trusted lenders"
  ];

  return (
    <section ref={containerRef} className="relative py-24 bg-dark-bg overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS0zMiA0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-800/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-1 mb-4 bg-teal-900/20 border border-teal-500/20 rounded-full">
            <h3 className="text-sm md:text-base font-semibold text-teal-400">Vending Finance Specialist</h3>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Build Your <span className="gradient-text">Vending Machine</span> Empire
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Finance Link Australia are the most experienced vending machine finance specialists in the industry
          </p>
          
          <p className="text-lg text-teal-300 mb-8">
            Enquire today for a personalised quote on building your vending machine empire!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/apply-now">
              <button className="gradient-btn px-8 py-4 rounded-full text-white font-bold text-lg hover:shadow-lg transition-all">
                Click Here - Enquire Now!
              </button>
            </Link>
            <div className="flex flex-col text-center">
              <span className="text-teal-300 font-medium">Obligation Free</span>
              <span className="text-white font-bold">No Impact On Your Credit File</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {vendingFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`dark-card rounded-xl p-6 text-center transition-all duration-700 transform ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-teal-900/20 text-teal-400 rounded-full glowing-icon">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-500 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="dark-card rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose <span className="gradient-text">Vending Finance</span> with Us?
              </h2>
              
              <div className="space-y-4">
                {vendingBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-teal-900 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-teal-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="dark-card rounded-xl p-8 floating">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-teal-900/20 rounded-xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-teal-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="6" y="6" width="3" height="2" fill="currentColor"/>
                    <rect x="10" y="6" width="3" height="2" fill="currentColor"/>
                    <rect x="15" y="6" width="3" height="2" fill="currentColor"/>
                    <rect x="6" y="10" width="3" height="2" fill="currentColor"/>
                    <rect x="10" y="10" width="3" height="2" fill="currentColor"/>
                    <rect x="15" y="10" width="3" height="2" fill="currentColor"/>
                    <rect x="6" y="14" width="3" height="2" fill="currentColor"/>
                    <rect x="10" y="14" width="3" height="2" fill="currentColor"/>
                    <rect x="15" y="14" width="3" height="2" fill="currentColor"/>
                    <circle cx="12" cy="18" r="1" fill="currentColor"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Start Your Vending Journey</h3>
                <p className="text-gray-300 mb-6">
                  From single machines to multi-location operations, we finance it all
                </p>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Loan Amount</span>
                    <span className="text-white font-bold">$5K - $500K+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Interest Rates</span>
                    <span className="text-teal-300 font-bold">From 6.9%*</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Approval Time</span>
                    <span className="text-white font-bold">Same Day</span>
                  </div>
                </div>
                
                <Link to="/apply-now">
                  <button className="w-full mt-6 gradient-btn py-3 rounded-full text-white font-medium hover:shadow-lg transition-all">
                    Get Your Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="dark-card rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your <span className="gradient-text">Vending Empire</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of successful vending operators who trust Finance Link Australia for their financing needs. 
              Our specialist team understands the vending industry and can structure finance solutions that work for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">1000+</div>
                <div className="text-gray-300">Vending Machines Financed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$50M+</div>
                <div className="text-gray-300">Total Funding Provided</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-gray-300">Customer Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply-now">
                <button className="gradient-btn px-8 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all">
                  Apply Now
                </button>
              </Link>
              <button className="bg-transparent hover:bg-teal-900/20 text-white font-medium px-8 py-3 border border-teal-500/40 rounded-full transition-all hover:border-teal-500/60">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}