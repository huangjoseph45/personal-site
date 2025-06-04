import React from "react";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: number;
  children?: React.ReactNode;
};
type ButtonVariant = "primary" | "secondary" | "tertiary";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
  size = 1,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-1 relative cursor-pointer font-medium border-2 px-3 p-2 rounded-sm transition-all duration-300 ${
        variant == "primary"
          ? " border-tertiary text-tertiary hover:shadow-tertiary w-fit"
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
    </button>
  );
};

export default Button;
