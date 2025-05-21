// src/components/Navbar.tsx
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ProductDropdown from "./DropDown";

export function Logo() {
  return (
    <div className="flex items-center">
      <div className="text-2xl font-bold gradient-text relative group">
        FINANCE
        <span className="relative mx-[-0.1rem] inline-block">
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-purple-400 transition-all duration-300 group-hover:text-purple-300 rotate-90 transform">
            <path
              fill="currentColor"
              d="M13.5 10.5L21 3M21 3H15M21 3V9M10.5 13.5L3 21M3 21H9M3 21L3 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="absolute -inset-1 rounded-full bg-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </span>
        LINK
      </div>
    </div>
  );
}
 export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Function to check if viewport is mobile or tablet
  const checkViewport = () => {
    setIsMobileOrTablet(window.innerWidth < 1024);
  };

  // Set up event listener for window resize
  useEffect(() => {
    checkViewport(); // Check on component mount
    window.addEventListener('resize', checkViewport);
    
    // Handle scroll for navbar background change
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkViewport);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Check if path is active
  const isActive = (path: string) => location.pathname === path;

  // Products dropdown items
  const productItems = [
    { name: "Personal Loans", link: "/personal-loans" },
    { name: "Business Loans", link: "/business-loans" },
  ];

  return (
    <header className={`sticky top-0 z-20 w-full transition-all duration-300 ${scrolled ? 'bg-dark-surface bg-opacity-90 backdrop-blur-md shadow-lg' : 'bg-dark-bg'}`}>
      <div className="flex items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className="flex items-center py-4">
          <Logo />
        </Link>

        {/* Hamburger Menu Button (Mobile & Tablet) */}
        <button
          className="flex lg:hidden flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-purple-400 mt-1.5 transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-purple-400 mt-1.5 transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Desktop Navigation (Large Screens) */}
        {!isMobileOrTablet &&
          <NavigationMenu className="block">
            <NavigationMenuList className="flex">
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={`nav-item px-4 py-2 text-sm font-medium ${isActive('/') ? 'active text-purple-400' : 'text-gray-300 hover:text-gray-300'}`}
                >
                  Home
                </Link>
              </NavigationMenuItem>
              <ProductDropdown />
              <NavigationMenuItem>
                <Link
                  to="/about"
                  className={`nav-item px-4 py-2 text-sm font-medium ${isActive('/about') ? 'active text-purple-400' : 'text-gray-300 hover:text-gray-300'}`}
                >
                  Who We Are
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/partners"
                  className={`nav-item px-4 py-2 text-sm font-medium ${isActive('/partners') ? 'active text-purple-400' : 'text-gray-300 hover:text-gray-300'}`}
                >
                  Partner With Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/legal"
                  className={`nav-item px-4 py-2 text-sm font-medium ${isActive('/legal') ? 'active text-purple-400' : 'text-gray-300 hover:text-gray-300'}`}
                >
                  Legal
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="ml-4">
                <Link to="/apply-now">
                  <Button className="gradient-btn text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                    Apply Now
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        }
        {/* Mobile & Tablet Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-dark-surface shadow-lg lg:hidden z-30 py-4 backdrop-blur-md border-t border-purple-900/30 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col items-center">
              <Link
                to="/"
                className={`px-4 py-3 w-full text-center text-sm font-medium ${isActive('/') ? 'bg-purple-900/20 text-purple-400' : 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/10'} transition-all duration-200`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <div className="w-full">
                <button
                  className={`px-4 py-3 w-full text-center text-sm font-medium ${isActive('/products') || location.pathname === '/personal-loans' || location.pathname === '/business-loans' ? 'bg-purple-900/20 text-purple-400' : 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/10'} flex items-center justify-center transition-all duration-200`}
                  onClick={() => setActiveDropdown(activeDropdown === 'mobileProducts' ? null : 'mobileProducts')}
                >
                  Our Services
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'mobileProducts' ? 'rotate-180' : ''}`}
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
                {activeDropdown === 'mobileProducts' && (
                  <div className="bg-dark-card py-2 transition-all duration-300 ease-in-out">
                    {productItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        className={`block px-8 py-2 text-sm ${isActive(item.link) ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'} transition-all duration-200`}
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/about"
                className={`px-4 py-3 w-full text-center text-sm font-medium ${isActive('/about') ? 'bg-purple-900/20 text-purple-400' : 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/10'} transition-all duration-200`}
                onClick={toggleMenu}
              >
                Who We Are
              </Link>
              <Link
                to="/partners"
                className={`px-4 py-3 w-full text-center text-sm font-medium ${isActive('/partners') ? 'bg-purple-900/20 text-purple-400' : 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/10'} transition-all duration-200`}
                onClick={toggleMenu}
              >
                Partner With Us
              </Link>
              <Link
                to="/legal"
                className={`px-4 py-3 w-full text-center text-sm font-medium ${isActive('/legal') ? 'bg-purple-900/20 text-purple-400' : 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/10'} transition-all duration-200`}
                onClick={toggleMenu}
              >
                Legal
              </Link>
              <div className="mt-4 w-full px-4">
                <Link to="/apply-now" onClick={toggleMenu}>
                  <Button className="w-full gradient-btn py-2 text-white rounded-full hover:shadow-lg transition-all duration-300">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}

// export