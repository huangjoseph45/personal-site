import React from "react";
import { motion } from "motion/react";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: number;
  children?: React.ReactNode;
  fill?: boolean;
};
type ButtonVariant = "primary" | "secondary" | "tertiary";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
  size = 1,
  children,
  fill = false,
}) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${
        fill ? "w-full" : "w-fit"
      }   relative cursor-pointer font-medium  px-3 p-2 rounded-sm transition-all duration-300 h-full ${
        variant == "primary"
          ? "text-tertiary  hover:shadow-tertiary"
          : variant == "secondary"
          ? "text-accent hover:shadow-accent "
          : variant == "tertiary"
          ? "bg-quarternary text-white outline-quarternary/25 outline-6 -outline-offset-6 hover:outline-offset-0"
          : ""
      } whitespace-nowrap`}
      style={{ fontSize: `${size}rem` }}
    >
      <motion.div
        className="z-[1] flex items-center justify-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        {children}
        {label}
      </motion.div>

      <motion.div
        initial={{ scale: 0.95, scaleX: 0 }}
        animate={{ scale: 1, scaleX: 1 }}
        exit={{ scale: 0.95, scaleX: 0 }}
        transition={{ ease: "easeOut", duration: 0.25 }}
        className={`origin-left top-0 left-0 rounded-sm absolute border-2 w-full h-full ${
          variant == "primary"
            ? " border-tertiary text-tertiary  hover:shadow-tertiary"
            : variant == "secondary"
            ? "text-accent border-accent hover:shadow-accent "
            : variant == "tertiary"
            ? "hidden"
            : ""
        }`}
      ></motion.div>
      <motion.div
        initial={{ scale: 0.95, scaleX: 0 }}
        animate={{ scale: 1, scaleX: 1 }}
        exit={{ scale: 0.95, scaleX: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 0.35 }}
        className={`origin-right w-full h-full  absolute top-1 left-1 border-2 rounded-sm shadow-xs  ${
          variant == "primary"
            ? " border-tertiary text-tertiary  shadow-tertiary"
            : variant == "secondary"
            ? "text-accent border-accent shadow-accent "
            : variant == "tertiary"
            ? "hidden bg-quarternary border-[var(--color-quarternary)] text-white outline-quarternary/25 outline-6 -outline-offset-6 hover:outline-offset-0"
            : ""
        }`}
      ></motion.div>
    </motion.button>
  );
};

export default Button;
