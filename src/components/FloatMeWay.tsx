import React from "react";
import "./FloatMeWay.css";

export function FloatMeWay() {
  return (
    <section className="relative py-16 md:py-24 bg-dark-bg overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS0zMiA0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-teal-900/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/4 bg-gradient-to-t from-teal-900/10 to-transparent"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-teal-800/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Main Heading */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl text-white">This is the</h2>
          <div className="flex items-center justify-center">
            <span className="text-3xl font-bold md:text-4xl lg:text-5xl gradient-text">FINANCE</span>
            <div className="h-4 float-piggy relative mx-1 inline-block w-4 md:h-10 md:w-10">
              <span className="inline-block rotate-90 text-teal-400 text-2xl md:text-4xl">🔗</span>
            </div>
            <span className="text-3xl font-bold md:text-4xl lg:text-5xl gradient-text">LINK</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl lg:text-5xl text-white">way</h2>
        </div>

        {/* Process Steps */}
        <div className="process-steps mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 lg:gap-8">
          {/* Step 1 */}
          <div className="self-center sm:self-start md:self-start relative">
            {/* Connector Line (Desktop Only) */}
            <div className="connector-line absolute -right-4 top-12 z-10 hidden h-16 w-8 md:block">
              <svg
                className="h-full w-full text-teal-500/60"
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
            <div className="process-card flex h-full flex-col items-center dark-card rounded-xl p-6 shadow-lg backdrop-blur-sm">
              {/* Circle Icon */}
              <div className="-mt-12 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-900 text-white shadow-lg glow">
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
              <h3 className="mb-2 text-center text-xl font-semibold text-white">
                Quick
                <br />
                online application
              </h3>
              <p className="mt-auto pt-4 text-center text-teal-300">100% Risk-Free, No-Obligation Process</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="self-center sm:self-center md:self-center relative">
            {/* Connector Line (Desktop Only) */}
            <div className="connector-line absolute -right-4 top-12 z-10 hidden h-16 w-8 md:block">
              <svg
                className="h-full w-full text-teal-500/60"
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
            <div className="process-card flex h-full flex-col items-center dark-card rounded-xl p-6 shadow-lg backdrop-blur-sm">
              {/* Circle Icon */}
              <div className="-mt-12 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-900 text-white shadow-lg glow">
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-center text-xl font-semibold text-white">
                Receive a response
                <br />
                within hours
              </h3>
              <p className="mt-auto pt-4 text-center">
                <span className="text-teal-300">Without impacting</span>
                <br />
                <span className="text-teal-300">your credit score</span>
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="self-center sm:self-end md:self-end relative">
            {/* Card */}
            <div className="process-card flex h-full flex-col items-center dark-card rounded-xl p-6 shadow-lg backdrop-blur-sm">
              {/* Circle Icon */}
              <div className="-mt-12 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-900 text-white shadow-lg glow">
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-center text-xl font-semibold text-white">
                Receive funds as quick
                <br />
                as the same day
              </h3>
              <p className="mt-auto pt-4 text-center text-teal-300">
                Once all necessary information
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