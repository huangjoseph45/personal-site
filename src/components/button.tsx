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
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      onClick={onClick}
      disabled={disabled}
      className={`${
        fill ? "w-full" : "w-fit"
      } box-content flex items-center justify-center gap-1 relative cursor-pointer font-medium  px-3 p-2 rounded-sm transition-all duration-300 z-10 ${
        variant == "primary"
          ? "text-tertiary  hover:shadow-tertiary"
          : variant == "secondary"
          ? "text-accent hover:shadow-accent "
          : variant == "tertiary"
          ? "bg-quarternary text-white outline-quarternary/25 outline-6 -outline-offset-6 hover:outline-offset-0"
          : ""
      }`}
      style={{ fontSize: `${size}rem` }}
    >
      {children}
      {label}
      <div
        className={`-z-1 rounded-sm absolute border-2 w-full h-full ${
          variant == "primary"
            ? " border-tertiary text-tertiary  hover:shadow-tertiary"
            : variant == "secondary"
            ? "text-accent border-accent hover:shadow-accent "
            : variant == "tertiary"
            ? "bg-quarternary border-[var(--color-quarternary)] text-white outline-quarternary/25 outline-6 -outline-offset-6 hover:outline-offset-0"
            : ""
        }`}
      ></div>
      <div
        className={`w-full h-full  absolute top-1 left-1 border-2 rounded-sm shadow-xs  ${
          variant == "primary"
            ? " border-tertiary text-tertiary  shadow-tertiary"
            : variant == "secondary"
            ? "text-accent border-accent shadow-accent "
            : variant == "tertiary"
            ? "hidden bg-quarternary border-[var(--color-quarternary)] text-white outline-quarternary/25 outline-6 -outline-offset-6 hover:outline-offset-0"
            : ""
        }`}
      ></div>
    </motion.button>
  );
};

export default Button;
