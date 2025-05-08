import { useLocation } from "react-router-dom";
import {pageConfigs} from "./PageConfig";
import HeroSection from "@/components/HeroSection";

const Hero: React.FC = () => {
    const location = useLocation();
    const config = pageConfigs[location.pathname] || pageConfigs["/"];

    return (
        <>
            <HeroSection head={config.head} titleShort={config.titleShort} titleLong={config.titleLong} image={config.image} text={config.text} overlay = {config.overlay} />
        </>
    );
};

export default Hero;
