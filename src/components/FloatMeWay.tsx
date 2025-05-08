import React from "react";
import "./FloatMeWay.css";

export function FloatMeWay() {
  return (
    <section className="bg-gradient-to-br from-white to-violet-50 py-16 md:py-24 grayscale">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Heading */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">This is the</h2>
          <div className="flex items-center justify-center">
            <span className="text-3xl font-bold md:text-4xl lg:text-5xl">FINANCE</span>
            <div className="h-4 float-piggy relative mx-1 inline-block w-4 md:h-10 md:w-10">
            <span className="inline-block rotate-90">🔗</span>
            </div>
            <span className="text-3xl font-bold md:text-4xl lg:text-5xl">LINK</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl lg:text-5xl">way</h2>
        </div>

        {/* Process Steps */}
        <div className="process-steps mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 lg:gap-8">
          {/* Step 1 */}
          <div className=" self-center sm:self-start md:self-start relative">
            {/* Connector Line (Desktop Only) */}
            <div className="connector-line absolute -right-4 top-12 z-10 hidden h-16 w-8 md:block">
              <svg
                className="h-full w-full text-violet-200"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0,50 C 30,10 70,90 100,50"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Card */}
            <div className="process-card flex h-full flex-col items-center rounded-xl bg-white p-6 shadow-md">
              {/* Circle Icon */}
              <div className="-mt-12 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-200 shadow-md">
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12L10 17L20 7"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-center text-xl font-semibold">
              Quick
                <br />
                online application
              </h3>
              <p className="mt-auto pt-4 text-center text-amber-600">100% Risk-Free, No-Obligation Process</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className=" self-center sm:self-center md:self-center relative">
            {/* Connector Line (Desktop Only) */}
            <div className="connector-line absolute -right-4 top-12 z-10 hidden h-16 w-8 md:block">
              <svg
                className="h-full w-full text-violet-200"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0,50 C 30,10 70,90 100,50"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Card */}
            <div className="process-card flex h-full flex-col items-center rounded-xl bg-white p-6 shadow-md">
              {/* Circle Icon */}
              <div className="-mt-12 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-200 shadow-md">
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12L10 17L20 7"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-center text-xl font-semibold">
              Receive a response
                <br />
                within hours
              </h3>
              <p className="mt-auto pt-4 text-center">
                <span className="text-amber-600">Without impacting</span>
                <br />
                <span className="text-amber-600">your credit score</span>
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className=" self-center sm:self-end md:self-end relative">
            {/* Card */}
            <div className="process-card flex h-full flex-col items-center rounded-xl bg-white p-6 shadow-md">
              {/* Circle Icon */}
              <div className="-mt-12 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-200 shadow-md">
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12L10 17L20 7"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-center text-xl font-semibold">
              Receive funds as quick
                <br />
                as the same day
              </h3>
              <p className="mt-auto pt-4 text-center text-amber-600">
                Once all necessary  information
                <br />
                is provided
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FloatMeWay;
