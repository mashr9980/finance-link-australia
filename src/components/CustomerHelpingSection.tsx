import AnimatedNumber from "@/Utility/AnimatedNumbers";

export function CustomerHelpingSection() {
    return (
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Helping Customers
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-16 leading-relaxed">
            One of the deep secrets of life is that all that is really worth doing is what we do for others.
          </p>
  
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            {/* Experience */}
            <div className="flex flex-col items-center">
              {/* <span className="text-5xl font-black text-black">5</span> */}
              <AnimatedNumber target={5} />
              <span className="mt-3 text-base md:text-lg font-medium text-gray-700">Years of Experience</span>
            </div>
  
            {/* Rating */}
            <div className="flex flex-col items-center">
              {/* <span className="text-5xl font-black text-black">5*</span> */}
              <AnimatedNumber target={5} suffix="*" />
              <span className="mt-3 text-base md:text-lg font-medium text-gray-700">Customer Rating</span>
            </div>
  
            {/* Satisfaction */}
            <div className="flex flex-col items-center">
              {/* <span className="text-5xl font-black text-black">100%</span> */}
              <AnimatedNumber target={100} suffix="%" />
              <span className="mt-3 text-base md:text-lg font-medium text-gray-700">Satisfaction</span>
            </div>
  
            {/* Happy Customers */}
            <div className="flex flex-col items-center">
              {/* <span className="text-5xl font-black text-black">100+</span> */}
              <AnimatedNumber target={100} suffix="+" />
              <span className="mt-3 text-base md:text-lg font-medium text-gray-700">Happy Customers</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default CustomerHelpingSection;
  