import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
    return (
        <Accordion.Root type="multiple" className="w-full">
            {items.map((item, index) => (
                <Accordion.Item
                    key={index}
                    value={`item-${index}`}
                    className="border-b"
                >
                    <Accordion.Header>
                        <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-left text-lg font-medium transition-all hover:underline">
                            {item.question}
                            <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                            />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                        <div className="pb-4 text-gray-600">{item.answer}</div>
                    </Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
};

export default FAQAccordion;
