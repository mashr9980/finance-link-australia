// src/components/RepaymentCalculator.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from "framer-motion";
import { Link } from 'react-router-dom';
import './RepaymentCalculator.css';
import Calculator from "./assets/Calculator.webp";

export function RepaymentCalculator() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [isAnimated, setIsAnimated] = useState(false);
  
  const [loanAmount, setLoanAmount] = useState<number>(30000);
  const [loanAmountInput, setLoanAmountInput] = useState<string>("30,000");
  const [loanTerm, setLoanTerm] = useState<number>(5);
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [repaymentFrequency, setRepaymentFrequency] = useState<string>('Monthly');
  const [monthlyRepayment, setMonthlyRepayment] = useState<number>(0);

  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  // Calculate monthly repayment
  useEffect(() => {
    // Convert annual interest rate to monthly
    const monthlyInterestRate = interestRate / 100 / 12;
    
    // Calculate number of payments
    let numberOfPayments = loanTerm;
    
    // Adjust based on frequency
    if (repaymentFrequency === 'Monthly') {
      numberOfPayments = loanTerm * 12;
    } else if (repaymentFrequency === 'Fortnightly') {
      numberOfPayments = loanTerm * 26;
    } else if (repaymentFrequency === 'Weekly') {
      numberOfPayments = loanTerm * 52;
    }
    
    // Use PMT formula to calculate repayment amount
    const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const payment = (loanAmount * x * monthlyInterestRate) / (x - 1);
    
    // Adjust payment based on frequency
    if (repaymentFrequency === 'Monthly') {
      setMonthlyRepayment(payment);
    } else if (repaymentFrequency === 'Fortnightly') {
      setMonthlyRepayment(payment / 2.17);
    } else if (repaymentFrequency === 'Weekly') {
      setMonthlyRepayment(payment / 4.33);
    }
  }, [loanAmount, loanTerm, interestRate, repaymentFrequency]);

  // Handle loan amount input
  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Remove any non-numeric characters except commas
    const sanitizedValue = inputValue.replace(/[^0-9,]/g, '');
    setLoanAmountInput(sanitizedValue);
    
    // Parse the numeric value for calculations
    const numericValue = parseFloat(sanitizedValue.replace(/,/g, ''));
    if (!isNaN(numericValue)) {
      setLoanAmount(numericValue);
    }
  };

  // Format amount with commas on blur
  const handleAmountBlur = () => {
    // Remove commas and convert to number
    const value = parseFloat(loanAmountInput.replace(/,/g, ''));
    
    if (!isNaN(value)) {
      // Format with commas
      const formattedValue = value.toLocaleString('en-US');
      setLoanAmountInput(formattedValue);
    }
  };
  
  // Handle loan term selection
  const handleLoanTermChange = (term: number) => {
    setLoanTerm(term);
  };

  // Handle interest rate slider
  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterestRate(parseFloat(e.target.value));
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <section ref={containerRef} className="relative py-16 md:py-24 bg-dark-bg overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS0zMiA0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-800/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={`calculator-content transition-all duration-700 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">
              Repayment<br />
              <span className="gradient-text">Calculator</span>
            </h2>
            <p className="text-lg mb-4 text-teal-300">Why does it feel like we're always hustling?</p>
            <p className="text-lg mb-6 text-gray-300">
              We work hard to provide you with great loans 
              and support, but now there's one more thing.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              A loan repayment calculator that will help you 
              work out <span className="text-teal-300 font-medium">how your payments will fit</span> into your 
              monthly expenses!
            </p>
            
            <div className="calculator-illustration hidden md:block floating">
              <img src={Calculator} alt="Calculator" className="w-full max-w-md" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3e%3crect width='300' height='300' fill='%231e1e1e'/%3e%3ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24px' fill='%238b5cf6'%3eCalculator%3c/text%3e%3c/svg%3e";
                }}
              />
            </div>
          </div>

          <div className={`calculator-form transition-all duration-700 delay-200 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="dark-card rounded-2xl shadow-2xl backdrop-blur-sm p-8 border border-teal-500/20">
              <div className="calculator-header mb-8">
                <h3 className="text-xl md:text-2xl text-white font-medium mb-2">
                  Get an estimate of<br />
                  <span className="gradient-text">your repayments</span>
                </h3>
                <div className="arrow-animation">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-svg">
                    <path d="M30 50C18.954 50 10 41.046 10 30C10 18.954 18.954 10 30 10C41.046 10 50 18.954 50 30C50 41.046 41.046 50 30 50Z" fill="#7c3aed" fillOpacity="0.2"/>
                    <path d="M30 45C21.716 45 15 38.284 15 30C15 21.716 21.716 15 30 15C38.284 15 45 21.716 45 30C45 38.284 38.284 45 30 45Z" fill="#7c3aed" fillOpacity="0.3"/>
                    <path d="M28 20L38 30L28 40" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="form-group mb-6">
                <label htmlFor="loanAmount" className="block text-sm font-medium mb-2 text-gray-300">
                  Enter your desired loan amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400">$</span>
                  <input
                    type="text"
                    id="loanAmount"
                    className="form-input pl-8 pr-4 py-3 w-full bg-dark-surface border border-teal-500/30 text-white rounded-md focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                    value={loanAmountInput}
                    onChange={handleLoanAmountChange}
                    onBlur={handleAmountBlur}
                  />
                </div>
              </div>

              <div className="form-group mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Choose a repayment period
                  <span className="inline-block ml-1 bg-teal-900 rounded-full w-4 h-4 text-white text-xs flex items-center justify-center">?</span>
                </label>
                <div className="term-selector flex space-x-1 md:space-x-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((term) => (
                    <button
                      key={term}
                      className={`term-btn flex-1 py-2 text-sm md:text-base rounded-full ${
                        loanTerm === term ? 'gradient-btn text-white' : 'bg-dark-surface text-gray-300 border border-teal-500/30'
                      } transition-all`}
                      onClick={() => handleLoanTermChange(term)}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group mb-6">
                <label htmlFor="interestRate" className="block text-sm font-medium mb-2 text-gray-300">
                  Choose the annual interest rate
                </label>
                <div className="relative">
                  <input
                    type="range"
                    id="interestRate"
                    min="1"
                    max="15"
                    step="0.1"
                    value={interestRate}
                    onChange={handleInterestRateChange}
                    className="w-full h-2 bg-teal-900/30 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1%</span>
                    <span className="text-teal-400">{interestRate.toFixed(1)}%</span>
                    <span>15%</span>
                  </div>
                </div>
              </div>

              <div className="form-group mb-8">
                <label htmlFor="frequency" className="block text-sm font-medium mb-2 text-gray-300">
                  Repayment Frequency
                </label>
                <div className="relative">
                  <select
                    id="frequency"
                    className="form-select pl-4 pr-10 py-3 w-full bg-dark-surface border border-teal-500/30 text-white rounded-md focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 appearance-none"
                    value={repaymentFrequency}
                    onChange={(e) => setRepaymentFrequency(e.target.value)}
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Fortnightly">Fortnightly</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-teal-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="result-section border-t border-teal-500/30 pt-6">
                <div className="text-lg font-medium text-gray-300 mb-2">Repayment</div>
                <div className="repayment-amount text-4xl font-bold gradient-text mb-6">
                  $ {monthlyRepayment.toFixed(2)}
                </div>
                <Link to="/apply-now">
                  <button className="gradient-btn w-full py-4 text-white rounded-md transition-all font-medium">
                    Apply Now
                  </button>
                </Link>
              </div>
              
              <div className="disclaimer text-xs text-gray-400 mt-4">
                *Your repayment has been calculated based upon a purchase Price of the product you're after, using a 10% deposit for a term specified with repayment rates specified in the Interest rate panel. Comparison rate = 10.99%. Warning: This calculation is a snapshot for the average approved applicant, rates or other car provider fees might apply.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}