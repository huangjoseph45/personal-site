import React from "react";
import ThemeToggle from "./themetoggle";

const Header: React.FC = () => {
  return (
    <div className="z-50 w-full left-full top-0 h-fit px-4 md:px-12 py-4 flex justify-end ">
      <ThemeToggle />
    </div>
  );
};

export default Header;
