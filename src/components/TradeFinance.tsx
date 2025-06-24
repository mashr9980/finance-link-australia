import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

export function TradeFinance() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  const tradeFeatures = [
    {
      title: "Approvals within 1 Hour",
      description: "Get fast decisions to keep your business moving without delays",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "No Financials Necessary",
      description: "Simplified application process without complex paperwork",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "We Protect your Credit Score",
      description: "Enquiries won't negatively impact your credit rating",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22S8 18 8 13V6L12 4L16 6V13C16 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Panel of Over 30 Trusted Lenders",
      description: "Access to Australia's largest network of trade finance specialists",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const tradeBenefits = [
    "Specialized finance for self-employed tradies",
    "Vehicle finance for work trucks, vans, and utes",
    "Machinery and equipment finance solutions",
    "Sole trader and ABN holder friendly applications",
    "Competitive rates tailored for trade businesses",
    "Fast approvals to keep your business running"
  ];

  const vehicleTypes = [
    { name: "Work Trucks", description: "Heavy duty trucks for construction and trade work" },
    { name: "Trade Vans", description: "Commercial vans perfect for tools and equipment" },
    { name: "Utes & Utilities", description: "Versatile vehicles for any trade application" },
    { name: "Trailers", description: "Equipment and cargo trailers for your business" },
    { name: "Machinery", description: "Construction and trade machinery financing" },
    { name: "Tools & Equipment", description: "Professional tools and equipment packages" }
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
            <h3 className="text-sm md:text-base font-semibold text-teal-400">Trade Finance Specialist</h3>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Finance Link Australia</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-white mb-6">
            Linking Tradies to the Best Finance Deals in the Country
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/apply-now">
              <button className="gradient-btn px-8 py-4 rounded-full text-white font-bold text-lg hover:shadow-lg transition-all">
                Enquire Now - Click Here!
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="dark-card rounded-xl p-4">
              <h3 className="text-lg font-bold text-teal-300 mb-2">Self Employed</h3>
              <p className="text-gray-300 text-sm">Finance solutions for self-employed tradies</p>
            </div>
            <div className="dark-card rounded-xl p-4">
              <h3 className="text-lg font-bold text-teal-300 mb-2">Sole Trader</h3>
              <p className="text-gray-300 text-sm">Specialized for sole trader businesses</p>
            </div>
            <div className="dark-card rounded-xl p-4">
              <h3 className="text-lg font-bold text-teal-300 mb-2">ABN Holder</h3>
              <p className="text-gray-300 text-sm">Perfect for ABN holders and contractors</p>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl text-white font-bold">
            Vehicle and Machinery Loans
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tradeFeatures.map((feature, index) => (
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
              <div className="flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-700 delay-500 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="dark-card rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose <span className="gradient-text">Trade Finance</span> with Us?
              </h2>
              
              <div className="space-y-4 mb-8">
                {tradeBenefits.map((benefit, index) => (
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

              <Link to="/apply-now">
                <button className="gradient-btn px-8 py-4 rounded-full text-white font-bold text-lg hover:shadow-lg transition-all">
                  Click Here for a Deal!
                </button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="dark-card rounded-xl p-8 floating">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-teal-900/20 rounded-xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-teal-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 6H21L19 16H5L3 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Trade Finance Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Get the tools and vehicles you need to grow your trade business
                </p>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Loan Amount</span>
                    <span className="text-white font-bold">$5K - $300K+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Interest Rates</span>
                    <span className="text-teal-300 font-bold">From 7.9%*</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Approval Time</span>
                    <span className="text-white font-bold">Within 1 Hour</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Credit Check</span>
                    <span className="text-green-400 font-bold">Protected</span>
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

        <div className={`mb-16 transition-all duration-700 delay-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What We <span className="gradient-text">Finance</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleTypes.map((vehicle, index) => (
              <div 
                key={index}
                className="dark-card rounded-xl p-6 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{vehicle.name}</h3>
                <p className="text-gray-300">{vehicle.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center transition-all duration-700 delay-900 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="dark-card rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Your <span className="gradient-text">Trade Finance</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of tradies who trust Finance Link Australia for their financing needs. 
              Our specialist team understands the trade industry and can structure finance solutions that work for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5000+</div>
                <div className="text-gray-300">Tradies Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">30+</div>
                <div className="text-gray-300">Trusted Lenders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">1 Hour</div>
                <div className="text-gray-300">Average Approval</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-gray-300">Credit Protected</div>
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