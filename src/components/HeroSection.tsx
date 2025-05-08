import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface HeroSectionProps {
  head: string,
  titleShort: string;
  titleLong: string;
  image: string[];
  text: string;
  overlay: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ head, titleShort, titleLong, image, text, overlay }) => {
  const [loanAmount, setLoanAmount] = useState("");
  const location = useLocation();
  const currentPath = location.pathname;
  const shouldShowOverlay = currentPath === "/" || currentPath === "/products";

  return (
    <>
      <div className="hero-section">
        <div className="sm-pb-0 container mx-auto grid grid-cols-1 gap-10 pb-20 pt-10 md:grid-cols-2 md:gap-20 md:pb-0">
          <div className="flex flex-col justify-center">
            <h3 className="mb-2 text-xl font-semibold text-black-600">{head}</h3>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-black md:text-6xl">
              {titleShort}
              <br />
              {titleLong}
              <br />
            </h1>
            <p className="text-gray-700">
              {text}
            </p>
          </div>

          <div className="relative flex items-center justify-center w-full">
            <div className="relative w-[90vw] sm:w-[70vw] lg:w-[50vw] aspect-[3/4] max-w-[500px]">
              {/* Hand and phone image as background */}
              <div
                className={`absolute inset-0 bg-no-repeat bg-contain bg-center ${shouldShowOverlay ? "hero-overlay-bg" : ""}`}
                style={{ backgroundImage: `url(${image[0]})` }}
              ></div>

              {/* Overlay positioned using flex, no hardcoded left/top */}
              {overlay && (
                <div className={`absolute inset-0 flex items-center justify-center p-4 mb-44 ${shouldShowOverlay ? "hero-overlay-main" : ""}`}>
                  <div className={`w-[65%] rounded-xl bg-white md:p-5 shadow-2xl ${shouldShowOverlay ? "hero-overlay" : ""}`}>
                    <h3 className="mb-3 text-lg font-bold">Let's get started</h3>
                    <div className="mb-3">
                      <p className="mb-1 text-xs">How much do you want to borrow?</p>
                      <div className="flex items-center rounded-md border border-gray-300 bg-violet-50 px-3 py-2 text-sm">
                        <span className="mr-1 text-gray-500">$</span>
                        <input
                          type="text"
                          className="flex-1 bg-transparent outline-none"
                          placeholder="0"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(e.target.value)}
                        />
                      </div>
                    </div>
                    <Link to="/apply-now">
                      <button className="w-full rounded-full bg-black py-2 text-sm text-white">
                        See Your Options
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default HeroSection