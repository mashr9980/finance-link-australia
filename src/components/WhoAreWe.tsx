import React from "react";
import "./SimplePhilosophy.css";
import image1 from "./assets/who-are-we1.webp"

export function WhoAreWe() {
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
                                <img src={image1} alt="Phone with Tick" className="w-full h-full" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="text-content">
                            <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                                Who We Are
                            </h2>

                            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                                We Empower Your Financial <br />
                                Future with Ease.
                            </h2>

                            <div className="space-y-6 text-gray-700">
                                <p>
                                    Finance<span className="inline-block rotate-90">🔗</span>Link makes getting the funding you need simple—no complex applications, no hidden fees. We're not just about delivering accurate information; we're committed to fairness, transparency, and setting high standards as we help you reach your financial goals.
                                </p>

                                <p>
                                    For too long, the industry has struggled to connect people with lenders who truly meet their needs—especially when speed matters.

                                    At Finance<span className="inline-block rotate-90">🔗</span>Link, we're here to change that from the ground up—offering fast, reliable solutions through a clear, simple 1-2-3 process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
