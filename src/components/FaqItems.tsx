import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import faq from "./assets/faq.webp";
import { motion } from "framer-motion";
const faqItems = [
    {
        question: "What is Finance Link?",
        answer: "Finance Link is a platform for managing and comparing loan options easily.",
    },
    {
        question: "How do I apply for a loan?",
        answer: "Apply through our easy online portal and connect with expert brokers instantly.",
    },
    {
        question: "Are there hidden charges?",
        answer: "Nope! We believe in complete transparency. No surprises here.",
    },
];

export function FAQSection() {
    return (
        <section className="overflow-hidden bg-gradient-to-br from-gray-200 to-white py-16 md:py-24 mb-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
                    {/* Left - Phone Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="phone-shadow relative mx-auto max-w-xs md:max-w-sm">
                            <div className="phone-frame relative z-10 rotate-3 transform transition-transform duration-500 hover:rotate-0">
                                <img src={faq} alt="Phone with Tick" className="w-full h-full" />
                            </div>
                        </div>
                    </div>

                    {/* Right - Accordion FAQ */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                            Frequently Asked Questions
                        </h2>

                        <Accordion.Root type="multiple" className="w-full">
                            {faqItems.map((item, index) => (
                                <Accordion.Item
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-b"
                                >
                                    <Accordion.Header>
                                        <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-left text-lg font-medium transition-all hover:underline">
                                            {item.question}
                                            <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content>
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden pb-4 text-gray-600"
                                        >
                                            {item.answer}
                                        </motion.div>
                                    </Accordion.Content>
                                </Accordion.Item>
                            ))}
                        </Accordion.Root>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
