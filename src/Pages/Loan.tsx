import { useLocation } from "react-router-dom";
import { loanConfigs } from "./PageConfig";
import { LoanBenefits } from "@/components/LoanBenefits";


const Loan: React.FC = () => {
    const location = useLocation();
    const config = loanConfigs[location.pathname] || loanConfigs["/personal-loans"];

    return (
        <>
            <LoanBenefits titleShort={config.titleShort}
                titleLong={config.titleLong}
                textF={config.textF}
                textL={config.textL}
                images={config.images} />
        </>
    );
};

export default Loan;
