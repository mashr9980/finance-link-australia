// src/components/ApplyForm.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'framer-motion';
import formCard from "../components/assets/cards.png";

export function ApplyForm() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [isAnimated, setIsAnimated] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    loanAmount: '$30,000'
  });

  // Animation on scroll
  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'loanAmount') {
      // Format loan amount with $ sign
      const numericValue = value.replace(/[^0-9]/g, '');
      if (numericValue) {
        const formattedValue = `${parseInt(numericValue).toLocaleString()}`;
        setFormData({
          ...formData,
          [name]: formattedValue
        });
      } else {
        setFormData({
          ...formData,
          [name]: ''
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Add any extra validation if needed
    const allFieldsFilled = Object.values(formData).every((field) => field.trim() !== "");
  
    if (allFieldsFilled) {
      // do something with the form data (like send to backend)
      navigate("/thanks"); // ✅ only navigate if form is valid
    } else {
      alert("Please fill out all fields correctly."); // optional UX alert
    }
  };

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-dark-bg">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-900/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-900/5 to-transparent"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-800/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content - heading and text */}
          <div className={`w-full md:w-1/2 md:pr-12 mb-10 md:mb-0 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="apply-content">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to apply for<br />
                <span className="gradient-text">funding?</span>
              </h2>

              <p className="text-lg mb-6 text-gray-300">
                With only a few clicks of the mouse, you can be on the
                way to submitting your finance application with Finance Link Australia.
              </p>

              <p className="text-lg font-medium mb-8 text-purple-300">
                Let us help build the custom solution for you!
              </p>

              <div className="building-blocks-image floating">
                <img
                  src={formCard}
                  alt="Colorful building blocks"
                  className="w-full max-w-sm mx-auto md:mx-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3e%3crect width='300' height='200' fill='%23252525'/%3e%3cpath d='M70,40 L130,40 L130,80 L70,80 Z' fill='%237c3aed'/%3e%3cpath d='M140,60 L200,60 L200,100 L140,100 Z' fill='%238b5cf6'/%3e%3cpath d='M100,90 L160,90 L160,130 L100,130 Z' fill='%23a78bfa'/%3e%3c/svg%3e";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right content - application form */}
          <div className={`w-full md:w-1/2 transition-all duration-700 delay-200 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="dark-card p-8 md:p-10 rounded-3xl shadow-2xl glow backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Let's get started
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full p-3 bg-dark-surface rounded-md border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="sr-only">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full p-3 bg-dark-surface rounded-md border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="w-full p-3 bg-dark-surface rounded-md border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full p-3 bg-dark-surface rounded-md border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-300 mb-2">
                    How much do you want to borrow?
                  </label>
                  <input
                    type="text"
                    id="loanAmount"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-dark-surface rounded-md border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all"
                    aria-labelledby="loanAmountLabel"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="gradient-btn w-full py-4 text-white rounded-md font-medium relative overflow-hidden group"
                >
                  <span className="relative z-10">Get your quote</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </form>
              
              {/* Security note */}
              <div className="mt-6 flex items-center justify-center text-sm text-gray-400">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Your information is secure and encrypted
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}