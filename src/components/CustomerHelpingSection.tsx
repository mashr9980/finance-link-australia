// src/components/CustomerHelpingSection.tsx
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedNumber from "@/Utility/AnimatedNumbers";

export function CustomerHelpingSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  const stats = [
    { value: 5, label: "Years of Experience", suffix: "" },
    { value: 5, label: "Customer Rating", suffix: "*" },
    { value: 100, label: "Satisfaction", suffix: "%" },
    { value: 100, label: "Happy Customers", suffix: "+" },
  ];

  return (
    <section ref={containerRef} className="relative py-20 bg-dark-bg overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS0zMiA0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-teal-900/10 to-transparent"></div>
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-teal-700/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-teal-900/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Helping <span className="gradient-text">Customers</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            One of the deep secrets of life is that all that is really worth doing is what we do for others.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center transition-all duration-700 transform ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="dark-card rounded-lg p-6 w-full flex flex-col items-center">
                <div className="relative mb-4">
                  {/* Animated circle behind the number */}
                  <div className="absolute inset-0 bg-teal-900/20 rounded-full filter blur-md animate-pulse"></div>
                  <div className="relative z-10">
                    {isAnimated && <AnimatedNumber target={stat.value} suffix={stat.suffix} duration={2} />}
                  </div>
                </div>
                <span className="mt-3 text-base md:text-lg font-medium text-gray-300 text-center">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience our commitment to excellence and see why our customers consistently rate us 5 stars.
            Let's start your financial journey together.
          </p>
          <button className="gradient-btn px-8 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all">
            Work With Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default CustomerHelpingSection;