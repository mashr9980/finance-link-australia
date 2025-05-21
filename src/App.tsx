// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { QuoteButton } from "./components/QuoteButton";
import { Footer } from "./components/Footer";
import LoanDetail from "./components/LoanDetail";
import Loan from "./Pages/Loan";
import ScrollToTop from "./Utility/ScrollToTop";
import { LegalButtons } from "./components/Legal";
import { PageLayout } from "./Pages/PageLayout";
import { useEffect, useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Add loading effect for initial page load
  useEffect(() => {
    // Wait for the main content to load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className={`relative min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Animated background elements */}
        <div className="animated-bg fixed inset-0 z-[-2]"></div>
        <div className="animated-grain fixed inset-0 z-[-1]"></div>
        
        {/* Animated shape backgrounds */}
        <div className="shape shape-1 fixed top-[10%] left-[10%] z-[-1]"></div>
        <div className="shape shape-2 fixed bottom-[20%] right-[5%] z-[-1]"></div>
        <div className="shape shape-3 fixed top-[40%] right-[20%] z-[-1]"></div>
        
        <Navbar />
        <main className="bg-dark-bg text-white">
          <Routes>
            <Route path="/" element={<PageLayout showTestimonials Team={false} />} />
            <Route path="/products" element={<PageLayout Team={false} />} />
            <Route path="/personal-loans" element={<PageLayout showTestimonials Team={false} />} />
            <Route path="/business-loans" element={<PageLayout showTestimonials Team={false} />} />
            <Route path="/about" element={<PageLayout showTestimonials showWhoAreWe Team />} />
            <Route
              path="/partners"
              element={
                <PageLayout
                  showProcess={false}
                  showWhyLove={false}
                  showLoanDivisions={false}
                  showPhilosophy={false}
                  showApplyForm={false}
                  showCalculator={false}
                  showWhoAreWe
                  showFloatMeWay
                  Team
                />
              }
            />
            <Route
              path="/apply-now"
              element={<PageLayout showHero={false} showProcess={false} showWhyLove={false} showLoanDivisions={false} showPhilosophy={false} showFAQ={false} showStepper={false} showTestimonials={false} showLenders={false} HelpingSection={false} Team={false} />}
            />
            <Route path="/thanks" element={<Loan />} />
            <Route path="/legal" element={<><Loan /><LegalButtons /></>} />
            <Route path="/personal-loans/:loanId" element={<LoanDetail loanType="personal" />} />
            <Route path="/business-loans/:loanId" element={<LoanDetail loanType="business" />} />
          </Routes>
        </main>
        <QuoteButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;