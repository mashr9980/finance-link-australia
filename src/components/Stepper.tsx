import Stepper1 from "./assets/fastClock1.webp";
import Stepper2 from "./assets/stepper2.1.webp";
import Stepper3 from "./assets/Tailored Lending Options.webp";

export function Stepper() {
    return (
        <>
            <div className="text-center mb-16 md:mb-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Our Process is Quick & Easy <br className="hidden sm:block" />
                    —Just 3 Simple Steps.
                </h2>
            </div>

            {/* Skewed background wrapper */}
            <div className="relative w-full overflow-hidden">
                {/* Skewed background layer */}
                <div className="absolute inset-0 transform origin-top-right -rotate-3 -skew-x-3 bg-black z-0 h-[110%]"></div>

                {/* Content layer */}
                <div className="relative w-full py-12">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0">
                        {/* Feature 1 */}
                        <div className="steps-border flex flex-col items-center border-r border-violet-200 px-8 text-center relative z-10">
                            <div className="mb-1 flex h-30 w-30 items-center justify-center">
                                <img style={{ height: "70%" }} src={Stepper1} alt="Fast Loan" />
                            </div>
                            <h3 className="mb-1 text-xl font-bold text-white">
                                Fast Online
                                <br />
                                Applications
                            </h3>
                            <div className="steps-badge absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gray-600 text-white text-sm md:text-lg lg:text-4xl w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 flex items-center justify-center font-bold shadow-lg z-10">
                                1
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="steps-border flex flex-col items-center border-r border-violet-200 px-8 text-center relative z-10">
                            <div className="mb-1 flex h-30 w-30 items-center justify-center">
                                <img style={{ height: "70%" }} src={Stepper2} alt="Fast Loan" />
                            </div>
                            <h3 className="mb-1 text-xl font-bold text-white">
                                Receive Outcome <br /> Within Hours
                            </h3>
                            <div className="steps-badge absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gray-600 text-white text-sm md:text-lg lg:text-4xl w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 flex items-center justify-center font-bold shadow-lg z-10">
                                2
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-center px-8 text-center relative z-10">
                            <div className="mb-1 flex h-30 w-30 items-center justify-center">
                                <img style={{ height: "70%" }} src={Stepper3} alt="Fast Loan" />
                            </div>
                            <h3 className="mb-1 text-xl font-bold text-white">
                                Get funds <br /> Quickly
                            </h3>
                            <div className="steps-badge absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gray-600 text-white text-sm md:text-lg lg:text-4xl w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 flex items-center justify-center font-bold shadow-lg z-10">
                                3
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-20 -mt-10 flex justify-center">
                    <div className="w-[80%] md:w-[70%] backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl py-6 px-8 text-center">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                        Surprisingly easy, right?
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}
