import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to the top when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // This is the animation
    });
  }, [location]); // Runs every time the location changes

  return null;
};

export default ScrollToTop;
