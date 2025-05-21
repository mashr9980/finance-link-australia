// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../components/assets/finance-link-logo.png";

export function Footer() {
  return (
    <footer className="relative bg-dark-bg pt-16 pb-6 overflow-hidden">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full" style={{ marginBottom: '-1px' }} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#1e1e1e" />
        </svg>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-700/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 - Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link className="inline-block mb-6" to="/">
              <div className="flex items-center">
                <div className="text-2xl font-bold gradient-text relative group">
                  FINANCE
                  <span className="relative mx-[-0.1rem] inline-block">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-teal-400 rotate-90 transform">
                      <path
                        fill="currentColor"
                        d="M13.5 10.5L21 3M21 3H15M21 3V9M10.5 13.5L3 21M3 21H9M3 21L3 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  LINK
                </div>
              </div>
            </Link>
            <div className="text-sm text-gray-400 mb-8">
              <p className="mb-4">
                Finance Link Australia is committed to empowering your financial future. As an authorised credit representative of Fintelligence, we simplify your financial journey by offering expert-backed, transparent, and tailored finance solutions.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-3">Email Us At</h3>
              <p className="text-gray-400">
                Enquiries@finacelinkaustralia.com.au
              </p>
            </div>
          </div>
          
          {/* Column 2 - Company Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-teal-400 transition-colors">Partner With Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-teal-400 transition-colors">Our Services</Link></li>
              <li><Link to="/legal" className="text-gray-400 hover:text-teal-400 transition-colors">Legal</Link></li>
              <li><Link to="/personal-loans" className="text-gray-400 hover:text-teal-400 transition-colors">Personal Loans</Link></li>
              <li><Link to="/business-loans" className="text-gray-400 hover:text-teal-400 transition-colors">Business Loans</Link></li>
              <li><Link to="/apply-now" className="text-gray-400 hover:text-teal-400 transition-colors">Apply Now</Link></li>
            </ul>
            
            <h3 className="text-white font-semibold mt-6 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://fintelligence.com.au/privacy-policy/" target="_blank" rel="noopener" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="https://static1.squarespace.com/static/6491303c412377594c5b04bc/t/656d29db9dbd5452e869e255/1701652956251/Credit+Guide.pdf" target="_blank" rel="noopener" className="text-gray-400 hover:text-teal-400 transition-colors">Credit Guide</a>
              </li>
              <li>
                <a href="https://fintelligence.com.au/wp-content/uploads/2020/11/Complaint-Handling-Policy-Fintelligence_24112020.pdf" target="_blank" rel="noopener" className="text-gray-400 hover:text-teal-400 transition-colors">Complaints Policy</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Personal Loans */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Personal Loans</h3>
            <ul className="space-y-2">
              <li><Link to="/personal-loans/car" className="text-gray-400 hover:text-teal-400 transition-colors">Car Loans</Link></li>
              <li><Link to="/personal-loans/bike" className="text-gray-400 hover:text-teal-400 transition-colors">Motorcycle Loans</Link></li>
              <li><Link to="/personal-loans/caravan" className="text-gray-400 hover:text-teal-400 transition-colors">Caravan Loans</Link></li>
              <li><Link to="/personal-loans/boat" className="text-gray-400 hover:text-teal-400 transition-colors">Boat Loans</Link></li>
              <li><Link to="/personal-loans/jetski" className="text-gray-400 hover:text-teal-400 transition-colors">Jet Ski Loans</Link></li>
              <li><Link to="/personal-loans/wedding" className="text-gray-400 hover:text-teal-400 transition-colors">Wedding Loans</Link></li>
              <li><Link to="/personal-loans/holiday" className="text-gray-400 hover:text-teal-400 transition-colors">Holiday Loans</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Business Loans */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Business Loans</h3>
            <ul className="space-y-2">
              <li><Link to="/business-loans/Truck-finance" className="text-gray-400 hover:text-teal-400 transition-colors">Truck Finance</Link></li>
              <li><Link to="/business-loans/Trailer-finance" className="text-gray-400 hover:text-teal-400 transition-colors">Trailer Finance</Link></li>
              <li><Link to="/business-loans/Equipment-finance" className="text-gray-400 hover:text-teal-400 transition-colors">Equipment Finance</Link></li>
              <li><Link to="/business-loans/Commercial-Fitout" className="text-gray-400 hover:text-teal-400 transition-colors">Commercial Fit Out Finance</Link></li>
              <li><Link to="/business-loans/Unsecured-loan" className="text-gray-400 hover:text-teal-400 transition-colors">Unsecured Finance</Link></li>
              <li><Link to="/business-loans/Business-Overdraft" className="text-gray-400 hover:text-teal-400 transition-colors">Business Overdraft</Link></li>
            </ul>
            
            {/* Social links */}
            <div className="mt-6">
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="sr-only">LinkedIn page</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Instagram page</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-xs text-gray-500">
            <p>Finance Link Australia is an online finance brokerage service. We partner with funders to provide you access to their expert teams who can assist in selecting suitable finance solutions. As our customer you'll be provided with quotes directly from the lender for the product you intend to purchase. Any ongoing relationship regarding this product or service will continue directly from broker or funder introduced.</p>
            <p className="mt-2">Finance Link Australia does not compare all products in the market. The availability of products compared may change from time to time. Not all products available from our partners are compared and not all products are available to all customers.</p>
            <p className="mt-2">DLC Finance Pty Ltd (ABN 80 670 548 991) trading as Financelinkaustralia.com.au is an authorised credit representative (ACR # 552970) of Fintelligence Pty Ltd (Australian Credit Licence #511803).</p>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Finance<span className="inline-block rotate-90">🔗</span>Link. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}