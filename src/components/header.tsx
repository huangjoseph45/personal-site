import React from "react";
import ThemeToggle from "./themetoggle";

const Header: React.FC = () => {
  return (
    <div className="w-full sticky top-0 h-fit p-4 flex justify-end">
      <ThemeToggle />
    </div>
  );
};

export default Header;
