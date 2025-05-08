import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from "../components/assets/finance-link-logo.png"
export function Footer() {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <Link className="footer-logo-link" to="/">
                <span className="hidden-link-text">LOGO</span>
                {/* <span className="text-3xl font-bold mr-1 text-white">FINANCE</span>
                <span className="inline-block rotate-90">🔗</span>
                <span className="text-3xl font-bold ml-1 text-white">LINK</span> */}
                <img src={logo} alt="logo" />
                <div className="legal-info text-sm sm:text-s text-gray-500 mb-8 text-left sm:text-left">
                  <p className="mb-4 mt-4">
                    Finance Link Australia is committed to empowering your financial future. As an authorised credit representative of Fintelligence, we simplify your financial journey by offering expert-backed, transparent, and tailored finance solutions.
                  </p>
                </div>
              </Link>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">Email Us At</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product text-gray-500">
                Enquiries@finacelinkaustralia.com.au
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Company</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li><Link to="/about" className="text-gray-700 hover:text-gray-100 transition-colors">About Us</Link></li>
                <li><Link to="/partners" className="text-gray-700 hover:text-gray-100 transition-colors">Partner With Us</Link></li>
                <li><Link to="/products" className="text-gray-700 hover:text-gray-100 transition-colors">Our Services</Link></li>
                <li><Link to="/legal" className="text-gray-700 hover:text-gray-100 transition-colors">Legal</Link></li>
                <li><Link to="/personal-loans" className="text-gray-700 hover:text-gray-100 transition-colors">Personal Loans</Link></li>
                <li><Link to="/business-loans" className="text-gray-700 hover:text-gray-100 transition-colors">Business Loans</Link></li>
                <li><Link to="/apply-now" className="text-gray-700 hover:text-gray-100 transition-colors">Apply Now</Link></li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Legal</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                <Link to="https://fintelligence.com.au/privacy-policy/" className="text-gray-700 hover:text-gray-100 transition-colors">Privacy Policy</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="https://static1.squarespace.com/static/6491303c412377594c5b04bc/t/656d29db9dbd5452e869e255/1701652956251/Credit+Guide.pdf" className="text-gray-700 hover:text-gray-100 transition-colors">Credit Guide</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="https://fintelligence.com.au/wp-content/uploads/2020/11/Complaint-Handling-Policy-Fintelligence_24112020.pdf" className="text-gray-700 hover:text-gray-100 transition-colors">Complaints Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Personal Loans</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
              <li><Link to="/personal-loans/car" className="text-gray-700 hover:text-gray-100 transition-colors">Car Loans</Link></li>
              <li><Link to="/personal-loans/bike" className="text-gray-700 hover:text-gray-100 transition-colors">Motorcycle Loans</Link></li>
              <li><Link to="/personal-loans/caravan" className="text-gray-700 hover:text-gray-100 transition-colors">Caravan Loans</Link></li>
              <li><Link to="/personal-loans/boat" className="text-gray-700 hover:text-gray-100 transition-colors">Boat Loans</Link></li>
              <li><Link to="/personal-loans/jetski" className="text-gray-700 hover:text-gray-100 transition-colors">Jet Ski Loans</Link></li>
              <li><Link to="/personal-loans/wedding" className="text-gray-700 hover:text-gray-100 transition-colors">Wedding Loans</Link></li>
              <li><Link to="/personal-loans/holiday" className="text-gray-700 hover:text-gray-100 transition-colors">Holiday Loans</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Business Loans</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
              <li><Link to="/business-loans/Truck-finance" className="text-gray-700 hover:text-gray-100 transition-colors">Truck Finance</Link></li>
              <li><Link to="/business-loans/Trailer-finance" className="text-gray-700 hover:text-gray-100 transition-colors">Trailer Finance</Link></li>
              <li><Link to="/business-loans/Equipment-finance" className="text-gray-700 hover:text-gray-100 transition-colors">Equipment Finance</Link></li>
              <li><Link to="/business-loans/Commercial-Fitout" className="text-gray-700 hover:text-gray-100 transition-colors">Commercial Fit Out Finance</Link></li>
              <li><Link to="/business-loans/Unsecured-loan" className="text-gray-700 hover:text-gray-100 transition-colors">Unsecured Finance</Link></li>
              <li><Link to="/business-loans/Business-Overdraft" className="text-gray-700 hover:text-gray-100 transition-colors">Business Overdraft</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-social-links"> <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
            <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
          </svg>
            <a className="footer-social-link linkedin" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <span className="hidden-link-text">Linkedin</span>
              <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30">
                <path className="footer-social-icon-path" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
              </svg>
            </a>
            <a style={{filter:"invert(1)"}} className="footer-social-link twitter" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <span className="hidden-link-text">instagram</span>
              <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a style={{filter:"invert(1)"}} className="footer-social-link youtube" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <span className="hidden-link-text">Facebook</span>
              <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a className="footer-social-link github" href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <span className="hidden-link-text">Twitter</span>
            <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path className="footer-social-icon-path" d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "></path>
            </svg>
          </a>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <a className="footer-copyright-link" href="#" target="_self"> ©2025 Finance<span className="inline-block rotate-90">🔗</span>Link. All Rights Reserved.</a>
            </p>
            <p><br></br></p>
            <div>
                <p>Finance Link Australia is an online finance brokerage service. We partner with funders to provide you access to their expert teams who can assist in selecting suitable finance solutions. As our customer you’ll be provided with quotes directly from the lender for the product you intend to purchase. Any ongoing relationship regarding this product or service will continue directly from broker or funder introduced.</p> 
                <p>Finance Link Australia does not compare all products in the market. The availability of products compared may change from time to time. Not all products available from our partners are compared and not all products are available to all customers.</p> 
                <p>Brands & Funders mentioned on this site are based on commercial relationships held by Finance Link Australia & our funders respectively.</p> 
                <p>DLC Finance Pty Ltd (ABN 80 670 548 991) trading as Financelinkaustralia.com.au is an authorised credit representative (ACR # 552970) of Fintelligence Pty Ltd (Australian Credit Licence #511803).</p> 
                <p>* The comparison rate shown is for a secured loan amount of $30,000 over a term of 5 years based on monthly repayments. Warning: This comparison rate is true only for the examples given and may not include all fees and charges. Different terms, fees or other loan amounts might result in a different comparison rate. Any calculations or estimations do not constitute an offer of credit or a formal credit quote and is only a calculation of what you may be able to achieve based on the information you have entered. It does not consider suitable product features or loan product types. Rates + repayments shown are based on user inputted data. All applications for credit must be verified prior to the formal assessment process. All applications for credit approval are subject to lender credit approval. Approval is not guaranteed. </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 