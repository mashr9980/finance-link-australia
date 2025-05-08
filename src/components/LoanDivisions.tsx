import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoanDivisions.css";
import { personalLoanOptions, businessLoanOptions } from "@/Static/LoanOptions";

export function LoanDivisions() {
  const [activeTab, setActiveTab] = useState("personal");
  const [animate, setAnimate] = useState(false);

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
    <section className="bg-black py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-4xl text-white">Loan Divisions</h2>

        {/* Tabs */}
        <div className="relative mx-auto mb-10 flex max-w-md">
          <button
            className={`loan-tab flex-1 rounded-l-full px-4 py-3 text-center font-medium transition-colors ${activeTab === "personal" ? "bg-gray-500 text-white" : "bg-white text-gray-900"
              }`}
            onClick={() => handleTabChange("personal")}
          >
            Personal
          </button>
          <button
            className={`loan-tab flex-1 rounded-r-full px-4 py-3 text-center font-medium transition-colors ${activeTab === "business" ? "bg-gray-500 text-white" : "bg-white text-gray-900"
              }`}
            onClick={() => handleTabChange("business")}
          >
            Business
          </button>
          {/* <span className={`tab-indicator ${activeTab === "business" ? "business" : ""}`}></span> */}
        </div>

        {/* Loan Options Grid */}
        <div
          className={`loan-options-grid grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 ${animate ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "opacity 0.3s ease" }}
        >
          {displayOptions.map((option) => (
            <div
              key={option.id}
              className="loan-option flex flex-col items-center rounded-lg bg-gray-500 bg-opacity-10 p-6"
            >
              <div style={{filter:"invert(1)"}} className="loan-icon mb-4 h-20 w-20">
                <img src={option.icon} alt={`${option.title} icon`} className="h-full w-full object-contain" />
              </div>
              <h3 className="mb-2 text-center text-xl font-semibold text-white">{option.title}</h3>
              <p className="loan-description mb-4 text-center text-sm text-white">
                {option.description}
              </p>
              <Link
                to={`/${activeTab === "personal" ? "personal" : "business"}-loans/${option.id}`}
                className="learn-more-btn mt-auto inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-violet-100"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
