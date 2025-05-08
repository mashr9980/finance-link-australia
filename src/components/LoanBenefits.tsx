import "./SimplePhilosophy.css";
import PhoneWIthTick from "./assets/Phone with tick.avif"

interface LoanBenefitsProps {
    titleShort: string;
    titleLong: string;
    textF: string;
    textL: string;
    images: string;
}

export const LoanBenefits: React.FC<LoanBenefitsProps> = ({ titleShort,titleLong, textF, textL, images }) => {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-gray-200 to-white py-16 md:py-24
">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column - 3D Phone Illustration */}
          <div className="relative w-full lg:w-1/2">
            <div className="phone-shadow relative mx-auto max-w-xs md:max-w-sm">
              {/* Phone Frame */}
              <div className="phone-frame relative z-10 rotate-3 transform transition-transform duration-500 hover:rotate-0">
              <img src={images} alt="Phone with Tick" className="w-full h-full"/>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="text-content">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                {titleShort}
              </h2>

              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
               {titleLong}
              </h2>

              <div className="space-y-6 text-gray-700">
                <p>
                  {textF}
                </p>

                <p>
                 {textL}
                </p>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}

