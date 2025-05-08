import React from 'react';
import './LenderPartners.css';
import lender1 from "./assets/lender/lender1.png"
import lender2 from "./assets/lender/lender2.png"
import lender3 from "./assets/lender/lender3.png"
import lender4 from "./assets/lender/lender4.png"
import lender5 from "./assets/lender/lender5.jpg"
import lender6 from "./assets/lender/lender6.png"
import lender7 from "./assets/lender/lender7.png"
import lender8 from "./assets/lender/lender8.jpg"
import lender9 from "./assets/lender/lender9.jpg"
import lender10 from "./assets/lender/lender10.png"
export function LenderPartners() {
  // Define our lending partners
  const lenders = [
    { name: "Pepper Money", logo: lender1 },
    { name: "Grow", logo: lender2 },
    { name: "Flexi Commercial", logo: lender3 },
    { name: "Firstmac", logo: lender4 },
    { name: "Finance One", logo: lender5 },
    { name: "Early Pay", logo: lender6 },
    { name: "Commonwealth Bank", logo: lender7 },
    { name: "Capital Finance", logo: lender8 },
    { name: "Branded Financial", logo:lender9 },
    { name: "BOQ", logo: lender10 }
  ];

  // Handle image error by replacing with a placeholder
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, name: string) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // prevent infinite loop
    target.src = `https://placehold.co/200x80/e2d1ff/333333?text=${name}`;
  };

  return (
    <section className="lender-partners-section py-12 md:py-16">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Lenders we partner with fighting to give<br />
          you the best deal!
        </h2>
      </div>

      {/* Logo carousel for large screens */}
      <div className="partner-logos-container overflow-hidden">
        <div className="partner-logos-wrapper">
          <div className="partner-logos flex animate-scroll">
            {/* First set of logos */}
            {lenders.map((lender, index) => (
              <div 
                key={`lender-1-${index}`} 
                className="partner-logo-item flex items-center justify-center mx-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <img 
                  src={lender.logo} 
                  alt={`${lender.name} logo`} 
                  className="h-12 md:h-16 object-contain" 
                  onError={(e) => handleImageError(e, lender.name)}
                />
              </div>
            ))}
            
            {/* Duplicate for seamless loop */}
            {lenders.map((lender, index) => (
              <div 
                key={`lender-2-${index}`} 
                className="partner-logo-item flex items-center justify-center mx-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <img 
                  src={lender.logo} 
                  alt={`${lender.name} logo`} 
                  className="h-12 md:h-16 object-contain" 
                  onError={(e) => handleImageError(e, lender.name)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid layout for smaller screens */}
      <div className="md:hidden partner-logos-grid grid grid-cols-2 gap-4 px-4 py-6">
        {lenders.map((lender, index) => (
          <div 
            key={`lender-grid-${index}`} 
            className="partner-logo-grid-item flex items-center justify-center bg-white p-4 rounded-lg shadow-sm"
          >
            <img 
              src={lender.logo} 
              alt={`${lender.name} logo`} 
              className="h-10 object-contain" 
              onError={(e) => handleImageError(e, lender.name)}
            />
          </div>
        ))}
      </div>
    </section>
  );
} 