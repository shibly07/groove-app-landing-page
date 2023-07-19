import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimateFromProps = "left" | "right" | "top" | "bottom";

type WrapperMotionContainerProps = {
  children: JSX.Element;
  from: AnimateFromProps;
  delay?: number;
  threshold?: number;
};

const AnimatedReveal = ({
  children,
  from,
  delay = 0,
  threshold = 0,
}: WrapperMotionContainerProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  const variant = {
    hidden: {
      x: from === "left" ? "-100vw" : from === "right" ? "100vw" : 0,
      y: from === "top" ? "-100vh" : from === "bottom" ? "100vh" : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    },
  };

  const animate = useAnimation();

  useEffect(() => {
    if (inView) {
      animate.start("visible");
    } else {
      animate.start("hidden");
    }
  }, [inView, animate]);

  return (
    <div ref={ref}>
      <motion.div variants={variant} initial="hidden" animate={animate}>
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedReveal;
