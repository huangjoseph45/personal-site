import React from "react";
import ThemeToggle from "./themetoggle";

const Header: React.FC = () => {
  return (
    <div className="z-50 w-full left-full top-0 h-fit p-2 flex justify-end mb-4">
      <ThemeToggle />
    </div>
  );
};

export default Header;
