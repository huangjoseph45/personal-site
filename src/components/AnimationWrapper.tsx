import { motion } from "framer-motion";
import type { MotionProps, Variants } from "framer-motion";
import React from "react";

type AnimationWrapperProps = {
  children: React.ReactNode;
  animationProps?: MotionProps;
};

const defaultVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  animationProps = {},
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={defaultVariants}
      transition={{ duration: 0.5 }}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
