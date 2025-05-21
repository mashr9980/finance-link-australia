// src/components/DropDown.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="nav-item px-4 py-2 text-sm font-medium text-gray-300 hover:text-teal-400 flex items-center focus:outline-none transition-colors"
      >
        Our Services
        <svg
          className={`ml-1 h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-48 dark-card bg-dark-surface rounded-md shadow-lg z-50 py-2 backdrop-blur-md border border-teal-500/20 transform origin-top-right transition-all duration-200">
          <Link
            to="/personal-loans"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-teal-900/20 hover:text-teal-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            Personal Loans
          </Link>
          <Link
            to="/business-loans"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-teal-900/20 hover:text-teal-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            Business Loans
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductDropdown;