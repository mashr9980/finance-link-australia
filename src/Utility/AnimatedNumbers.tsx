import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber = ({ target, suffix = "", duration = 1 }: AnimatedNumberProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let start = 0;
      const increment = target / (duration * 60); // 60fps
      const update = () => {
        start += increment;
        if (start < target) {
          setCount(Math.floor(start));
          requestAnimationFrame(update);
        } else {
          setCount(target);
          setHasAnimated(true);
        }
      };
      update();
    }

    if (!isInView) {
      // Reset to allow re-animation
      setCount(0);
      setHasAnimated(false);
    }
  }, [isInView, hasAnimated, target, duration]);

  return (
    <motion.span
      ref={ref}
      className="text-5xl font-black text-black"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {count}
      {suffix}
    </motion.span>
  );
};

export default AnimatedNumber;
