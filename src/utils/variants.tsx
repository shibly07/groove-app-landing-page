const overLayVariant = {
  hidden: {
    y: "100vh",
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const ulLinksVariant = {
  hidden: {
    x: "100vh",
    transition: {
      duration: 0.3,
    },
  },
  show: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      delay: 0.3,
      duration: 0.5,
    },
  },
};

export { overLayVariant, ulLinksVariant };
