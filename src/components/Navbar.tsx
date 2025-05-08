import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ProductDropdown from "./DropDown";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Function to check if viewport is mobile or tablet
  const checkViewport = () => {
    setIsMobileOrTablet(window.innerWidth < 1024);
  };

  // Set up event listener for window resize
  useEffect(() => {
    checkViewport(); // Check on component mount
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
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
    <header className="sticky top-0 z-20 w-full  bg-white  shadow-md ">
      <div className=" flex items-center justify-between px-10 bg-black">
        <Link
          to="/" >
          <div className="flex items-center py-6 ">
            <Logo />
          </div>
        </Link>

        {/* Hamburger Menu Button (Mobile & Tablet) */}
        <button
          className="flex lg:hidden flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Desktop Navigation (Large Screens) */}
        {!isMobileOrTablet &&
          <NavigationMenu className="block">
            <NavigationMenuList className="flex">
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={`px-4 py-2 text-sm font-medium ${isActive('/about') ? 'text-white' : 'text-gray-300 hover:text-gray-300'}`}
                >
                  Home
                </Link>
              </NavigationMenuItem>
              <ProductDropdown />
              <NavigationMenuItem>
                <Link
                  to="/about"
                  className={`px-4 py-2 text-sm font-medium ${isActive('/about') ? 'text-white' : 'text-gray-300 hover:text-gray-300'}`}
                >
                  Who We Are
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/partners"
                  className={`px-4 py-2 text-sm font-medium ${isActive('/partners') ? 'text-white' : 'text-gray-300 hover:text-gray-300'}`}
                >
                  Partner With Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/legal"
                  className={`px-4 py-2 text-sm font-medium ${isActive('/about') ? 'text-white' : 'text-gray-300 hover:text-gray-300'}`}
                >
                  Legal
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        }
        {/* Mobile & Tablet Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden z-30 py-4">
            <nav className="flex flex-col items-center">
              <Link
                to="/"
                className={`px-4 py-3 w-full text-center text-sm font-medium ${isActive('/') ? 'text-black bg-gray-50' : 'text-gray-700 hover:text-gray-300 hover:bg-gray-50'}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <div className="w-full">
                <button
                  className={`px-4 py-3 w-full text-center text-sm font-medium ${isActive('/products') || location.pathname === '/personal-loans' || location.pathname === '/business-loans' ? 'text-black bg-gray-50' : 'text-gray-700 hover:text-gray-500 hover:bg-gray-50'} flex items-center justify-center`}
                  onClick={() => setActiveDropdown(activeDropdown === 'mobileProducts' ? null : 'mobileProducts')}
                >
                  Our Products
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
                  <div className="bg-gray-50 py-2">
                    {productItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        className={`block px-8 py-2 text-sm ${isActive(item.link) ? 'text-black' : 'text-gray-700 hover:text-gray-500'}`}
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
                className={`px-4 py-3 w-full text-center text-sm font-medium ${isActive('/about') ? 'text-black bg-gray-50' : 'text-gray-700 hover:text-gray-500 hover:bg-gray-50'}`}
                onClick={toggleMenu}
              >
                Who We Are
              </Link>
              <Link
                to="/partners"
                className={`px-4 py-3 w-full text-center text-sm font-medium ${isActive('/partners') ? 'text-black bg-gray-50' : 'text-gray-700 hover:text-gray-500 hover:bg-gray-50'}`}
                onClick={toggleMenu}
              >
                Partner With Us
              </Link>
              <Link
                to="/legal"
                className={`px-4 py-3 w-full text-center text-sm font-medium ${isActive('/legal') ? 'text-black bg-gray-50' : 'text-gray-700 hover:text-gray-500 hover:bg-gray-50'}`}
                onClick={toggleMenu}
              >
                Legal
              </Link>
              <div className="mt-4 w-full px-4">
                <Link to="/apply-now">
                <Button className="w-full rounded-full bg-gray-400 px-6 py-2 text-white hover:bg-gray-600">
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

export function Logo() {
  return (
    <div className="flex items-center text-2xl font-bold">
      {/* FINANCE<span className="relative mx-[-0.1rem] text-violet-500">🔗</span>LINK */}
      <img src="/src/components/assets/finance-link-logo.png" style={{ width: "40%" }} />
    </div>
  );
}
