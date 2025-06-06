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
      } flex items-center justify-center gap-1 relative cursor-pointer font-medium border-2 px-3 p-2 rounded-sm transition-all duration-300 ${
        variant == "primary"
          ? " border-tertiary text-tertiary hover:shadow-tertiary"
          : variant == "secondary"
          ? "text-accent border-accent hover:shadow-accent "
          : variant == "tertiary"
          ? "bg-quarternary border-[var(--color-quarternary)] text-white outline-quarternary/25 outline-6 -outline-offset-6 hover:outline-offset-0"
          : ""
      }`}
      style={{ fontSize: `${size}rem` }}
    >
      {children}
      {label}
    </motion.button>
  );
};

export default Button;
