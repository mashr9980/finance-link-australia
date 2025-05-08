import "./SimplePhilosophy.css";
import PhoneWIthTick from "./assets/scripts1.png"

export function SimplePhilosophy() {
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
              <img src={PhoneWIthTick} alt="Phone with Tick" className="w-full h-full"/>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="text-content">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                At <span className="inline-flex items-center">Finance<span className="inline-block rotate-90">🔗</span>
                Link</span>
              </h2>

              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                we empower your financial <br />
                future with ease.
              </h2>

              <div className="space-y-6 text-gray-700">
                <p>
                  Finance Link Australia is here to simplify your financial journey. With tailored
                  solutions and expert guidance, we help you achieve your financial goals
                  confidently.
                </p>

                <p>
                  Our goal is to help you focus on what truly matters – getting things done! We’ll
                  work diligently to find the ideal solution, customized specifically for you by one
                  of Australia’s skilled financial experts. We understand how valuable your time is,
                  especially when managing kids in school, household tasks, and those never-ending
                  bills.
                </p>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}

export default SimplePhilosophy;
