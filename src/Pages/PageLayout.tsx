import { Process } from "@/components/Process";
import Hero from "./Hero";
import { WhoAreWe } from "@/components/WhoAreWe";
import FloatMeWay from "@/components/FloatMeWay";
import WhyLoveFloatMe from "@/components/WhyLoveFloatMe";
import { LoanDivisions } from "@/components/LoanDivisions";
import SimplePhilosophy from "@/components/SimplePhilosophy";
import FAQSection from "@/components/FaqItems";
import { Stepper } from "@/components/Stepper";
import { Testimonials } from "@/components/Testimonials";
import { RepaymentCalculator } from "@/components/RepaymentCalculator";
import { LenderPartners } from "@/components/LenderPartners";
import { ApplyForm } from "@/components/ApplyForm";
import CustomerHelpingSection from "@/components/CustomerHelpingSection";
import MeetTeam from "@/components/MeetTeam";

  interface PageLayoutProps {
    showHero?: boolean;
    showProcess?: boolean;
    showWhyLove?: boolean;
    showLoanDivisions?: boolean;
    showPhilosophy?: boolean;
    showFAQ?: boolean;
    showStepper?: boolean;
    showTestimonials?: boolean;
    showCalculator?: boolean;
    showLenders?: boolean;
    showApplyForm?: boolean;
    showFloatMeWay?: boolean;
    showWhoAreWe?: boolean;
    HelpingSection?: boolean;
    Team?:boolean,
    customSections?: React.ReactNode;
  }
  
  export const PageLayout = ({
    showHero = true,
    showProcess = true,
    showWhyLove = true,
    showLoanDivisions = true,
    showPhilosophy = true,
    showFAQ = true,
    showStepper = true,
    showTestimonials = false,
    showCalculator = true,
    showLenders = true,
    showApplyForm = true,
    HelpingSection=true,
    Team=true,
    showFloatMeWay = false,
    showWhoAreWe = false,
    customSections,
  }: PageLayoutProps) => (
    <>
      {showHero && <Hero />}
      {showProcess && <Process />}
      {showWhoAreWe && <WhoAreWe />}
      {showFloatMeWay && <FloatMeWay />}
      {showWhyLove && <WhyLoveFloatMe />}
      {Team && <MeetTeam />}
      {showLoanDivisions && <LoanDivisions />}
      {HelpingSection && <CustomerHelpingSection />}
      {showPhilosophy && <SimplePhilosophy />}
      {showStepper && <Stepper />}
      {showCalculator && <RepaymentCalculator />}
      {showTestimonials && <Testimonials />}
      {showFAQ && <FAQSection />}
      {showLenders && <LenderPartners />}
      {showApplyForm && <ApplyForm />}
      {customSections}
    </>
  );
  