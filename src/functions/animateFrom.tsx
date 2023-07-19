type AnimateFromProps = "left" | "right" | "top" | "bottom";

const animateFrom = (from: AnimateFromProps, delay: number) => {
  const variant = {
    hidden: {
      x: from === "left" ? "-100%" : from === "right" ? "100%" : 0,
      y: from === "top" ? "-100%" : from === "bottom" ? "100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: 5,
        type: "spring",
        duration: 2,
        bounce: 0.3,
      },
    },
  };
  return variant;
};

export default animateFrom;
