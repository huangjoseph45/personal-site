import React from "react";
import ThemeToggle from "./themetoggle";

const Header: React.FC = () => {
  return (
    <div className="z-50 w-fit left-full sticky top-0 h-fit p-4 flex justify-end">
      <ThemeToggle />
    </div>
  );
};

export default Header;
