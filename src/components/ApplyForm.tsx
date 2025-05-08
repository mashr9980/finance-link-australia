import React, { useState } from 'react';
import './ApplyForm.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import formCard from "../components/assets/cards.png"

export function ApplyForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    loanAmount: '$30,000'
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'loanAmount') {
      // Format loan amount with $ sign
      const numericValue = value.replace(/[^0-9]/g, '');
      if (numericValue) {
        const formattedValue = `$${parseInt(numericValue).toLocaleString()}`;
        setFormData({
          ...formData,
          [name]: formattedValue
        });
      } else {
        setFormData({
          ...formData,
          [name]: '$'
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
    <section className="apply-form-section py-16 md:py-24 drop-shadow-xl/25">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">

          {/* Left content - heading and text */}
          <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="apply-content">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to apply for<br />funding?
              </h2>

              <p className="text-lg mb-6">
                With only a few clicks of the mouse, you can be on the
                way to submitting your finance application with Finance link australia.
              </p>

              <p className="text-lg text-black font-medium mb-8">
                Let us help build the custom solution for you!
              </p>

              <div className="building-blocks-image">
                <img
                  src={formCard}
                  alt="Colorful building blocks"
                  className="w-full max-w-sm mx-auto md:mx-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3e%3crect width='300' height='200' fill='%23f3f4f6'/%3e%3cpath d='M70,40 L130,40 L130,80 L70,80 Z' fill='%234f46e5'/%3e%3cpath d='M140,60 L200,60 L200,100 L140,100 Z' fill='%23ec4899'/%3e%3cpath d='M100,90 L160,90 L160,130 L100,130 Z' fill='%23f59e0b'/%3e%3c/svg%3e";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right content - application form */}
          <div className="w-full md:w-1/2 grayscale">
            <div className="apply-form-card bg-white rounded-3xl p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
              <h3 className="text-2xl font-bold mb-6">
                Let's get started
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="form-group mb-5">
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="form-input w-full p-3 border-b border-gray-200 bg-gray-50 rounded-t-md focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div className="form-group mb-5">
                  <label htmlFor="lastName" className="sr-only">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="form-input w-full p-3 border-b border-gray-200 bg-gray-50 rounded-t-md focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div className="form-group mb-5">
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="form-input w-full p-3 border-b border-gray-200 bg-gray-50 rounded-t-md focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div className="form-group mb-5">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="form-input w-full p-3 border-b border-gray-200 bg-gray-50 rounded-t-md focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div className="form-group mb-8">
                  <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
                    How much do you want to borrow?
                  </label>
                  <input
                    type="text"
                    id="loanAmount"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    className="form-input w-full p-3 border-b border-gray-200 bg-gray-50 rounded-t-md focus:outline-none focus:border-purple-500"
                    aria-labelledby="loanAmountLabel"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="quote-btn w-full py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition duration-300 font-medium"
                >
                  Get your quote
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 