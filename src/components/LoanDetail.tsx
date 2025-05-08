import { useParams } from "react-router-dom";
import { personalLoanOptions, businessLoanOptions } from "@/Static/LoanOptions";
import Hero from "@/Pages/Hero";
import { FeatureIconsSection } from "./FeatureIconsSection";
import FloatMeWay from "./FloatMeWay";
import WhyLoveFloatMe from "./WhyLoveFloatMe";
import { LoanDivisions } from "./LoanDivisions";
import { Testimonials } from "./Testimonials";
import { RepaymentCalculator } from "./RepaymentCalculator";
import { LenderPartners } from "./LenderPartners";
import { ApplyForm } from "./ApplyForm";
import Loan from "@/Pages/Loan";
import FAQSection from "./FaqItems";
import CustomerHelpingSection from "./CustomerHelpingSection";
import { Process } from "./Process";

const LoanDetail: React.FC<{ loanType: string }> = ({ loanType }) => {
    const { loanId } = useParams<{ loanId: string }>();
    console.log("loanType:", loanType);
    const loanOptions = loanType === "personal" ? personalLoanOptions : businessLoanOptions;
    const loan = loanOptions.find((option) => option?.id === loanId);
    console.log("loan", loan);

    if (!loan) {
        return <div>Loan type not found</div>;
    }

    return (
        <>
            <Hero />
            <Process/>
            {/* <FloatMeWay /> */}
            <WhyLoveFloatMe />
            <Loan/>
            <LoanDivisions />
            <CustomerHelpingSection/>
            <RepaymentCalculator />
            <Testimonials />
            <FAQSection/>
            <LenderPartners />
            <ApplyForm />
        </>
    );
};

export default LoanDetail;
