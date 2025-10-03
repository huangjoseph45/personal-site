import React from "react";
import ThemeToggle from "./themetoggle";
import { Home, FileText, Mail } from "lucide-react";
import { Link, useLocation } from "react-router";

const Header: React.FC<{
  setShowContact: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowContact }) => {
  const loc = useLocation();
  const buttons = [
    {
      icon: <Home size="100%" />,
      link: "/",
    },
    {
      icon: <FileText size="100%" />,
      link: "/resume",
    },
    {
      icon: <Mail size="100%" />,
      clickFunc: () => setShowContact(true),
    },
  ];
  return (
    <div className="items-center flex flex-row justify-between">
      <ul className="z-51 w-[90%] justify-around sm:w-fit fixed bottom-2 left-1/2 -translate-x-1/2 sm:left-4 md:left-12 sm:translate-x-0 sm:top-4 flex flex-row h-[3rem] rounded-full shadow-md bg-bgsecondary gap-1 p-1 border border-bgtertiary">
        {buttons.map((button, index) => {
          return (
            <Link
              key={button.link + String(index)}
              to={button.link ? button.link : loc.pathname}
              onClick={button.clickFunc ? button.clickFunc : () => null}
              className="flex-1 cursor-pointer hover:bg-bgtertiary rounded-full p-2"
            >
              {button.icon}
            </Link>
          );
        })}
      </ul>
      <div className="w-full z-50 left-full top-0 h-fit px-4 md:px-12 pt-4 pb-2 flex justify-end items-center">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
