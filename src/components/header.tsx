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
      <ul className="top-4 mx-4 md:mx-12 z-51 w-fit fixed flex flex-row h-[3rem] rounded-full shadow-md bg-bgsecondary gap-1 p-1">
        {buttons.map((button) => {
          return (
            <Link
              key={button.link}
              to={button.link ? button.link : loc.pathname}
              onClick={button.clickFunc ? button.clickFunc : () => null}
              className="cursor-pointer hover:bg-bgtertiary rounded-full p-2"
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
