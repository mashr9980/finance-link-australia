// src/components/FaqItems.tsx
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import faq from "./assets/faq.webp";

const faqItems = [
    {
        question: "What is Finance Link?",
        answer: "Finance Link is a platform for managing and comparing loan options easily. We connect you with expert brokers and lenders to find the most suitable financial solutions tailored to your needs.",
    },
    {
        question: "How do I apply for a loan?",
        answer: "Applying for a loan with Finance Link is simple. Just fill out our easy online application form, and our team of expert brokers will connect with you to understand your needs. We'll then match you with the most suitable loan options from our network of trusted lenders.",
    },
    {
        question: "Are there hidden charges?",
        answer: "Absolutely not! At Finance Link, we believe in complete transparency. All fees and charges are clearly disclosed before you commit to any loan. There are no hidden fees or surprise costs - what you see is what you get.",
    },
    {
        question: "How long does the application process take?",
        answer: "Our streamlined application process is designed to save you time. Most applications receive a response within hours, and once approved, funds can be available as quickly as the same day, depending on the lender and loan type.",
    },
    {
        question: "Do you check credit scores?",
        answer: "Yes, but don't worry - we work with lenders who consider your entire financial situation, not just your credit score. We have options for various credit histories, and checking your eligibility through our platform won't impact your credit score.",
    },
];

export function FAQSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.2 });
    const [isAnimated, setIsAnimated] = useState(false);
    const [openItems, setOpenItems] = useState<string[]>([]);

    useEffect(() => {
        if (isInView && !isAnimated) {
            setIsAnimated(true);
        }
    }, [isInView, isAnimated]);

    const toggleItem = (value: string) => {
        setOpenItems(prev => 
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    return (
        <section ref={containerRef} className="relative overflow-hidden bg-dark-bg py-16 md:py-24">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS0zMiA0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
                <div className="absolute top-20 left-20 w-64 h-64 bg-purple-800/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
                    {/* Left - Phone Image */}
                    <div className={`relative w-full lg:w-1/2 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="phone-shadow relative mx-auto max-w-xs md:max-w-sm">
                            <div className="phone-frame relative z-10 rotate-3 transform transition-transform duration-500 hover:rotate-0 floating">
                                <img src={faq} alt="Phone with FAQ" className="w-full h-full rounded-xl shadow-lg" />
                                {/* Purple glow */}
                                <div className="absolute -inset-0.5 bg-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            {/* Purple glow under the phone */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-purple-600/20 filter blur-xl rounded-full"></div>
                        </div>
                    </div>

                    {/* Right - Accordion FAQ */}
                    <div className={`w-full lg:w-1/2 transition-all duration-700 delay-200 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <h2 className="mb-8 text-3xl font-bold md:text-4xl text-white">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>

                        <Accordion.Root type="multiple" value={openItems} onValueChange={setOpenItems} className="space-y-4">
                            {faqItems.map((item, index) => (
                                <Accordion.Item
                                    key={index}
                                    value={`item-${index}`}
                                    className={`dark-card rounded-xl overflow-hidden transition-all duration-300 ${openItems.includes(`item-${index}`) ? 'border border-purple-500/40' : 'border border-purple-500/20'}`}
                                >
                                    <Accordion.Header>
                                        <Accordion.Trigger 
                                            className="group flex w-full items-center justify-between py-5 px-6 text-left text-lg font-medium text-white transition-all hover:text-purple-400"
                                            onClick={() => toggleItem(`item-${index}`)}
                                        >
                                            {item.question}
                                            <ChevronDown className={`ml-2 h-5 w-5 text-purple-400 transition-transform duration-300 ${openItems.includes(`item-${index}`) ? 'rotate-180' : ''}`} />
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <AnimatePresence>
                                        {openItems.includes(`item-${index}`) && (
                                            <Accordion.Content forceMount asChild>
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="px-6 pb-5 text-gray-300">
                                                        {item.answer}
                                                    </div>
                                                </motion.div>
                                            </Accordion.Content>
                                        )}
                                    </AnimatePresence>
                                </Accordion.Item>
                            ))}
                        </Accordion.Root>

                        {/* Call to action */}
                        <div className="mt-8">
                            <p className="text-gray-300 mb-6">
                                Don't see your question answered? Get in touch with us for personalized assistance.
                            </p>
                            <button className="gradient-btn px-6 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all flex items-center">
                                <span>Contact Support</span>
                                <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;