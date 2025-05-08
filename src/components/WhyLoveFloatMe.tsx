import React from "react";
import "./WhyLoveFloatMe.css";
import { WhyLoveSteps } from "@/Static/WhyLove";
export function WhyLoveFloatMe() {
  return (
    <div className="py-24 bg-white grayscale">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

        <div className="text-center">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            A few reasons why you
          </p>
          <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
            Will Love Finance link Australia
          </h3>

        </div>

        <div className="mt-20">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {WhyLoveSteps.map((steps, idx) => (
              <li key={idx} className="why-love-cards--parent text-left">
                <div className="why-love-cards flex flex-row items-start">
                  <div className="why-love-steps flex flex-col items-center justify-center mr-5">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                      {steps.number}
                    </div>
                  </div>
                  <div className="bg-gray-100 p-5 pb-10">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">{steps.title}</h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">{steps.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </div>

  );
}

export default WhyLoveFloatMe; 