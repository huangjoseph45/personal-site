import React from "react";
import { Link } from "react-router";

const Footer: React.FC<{ contactFunc?: () => void }> = ({ contactFunc }) => {
  return (
    <div className="sm:text-sm text-xs w-full bg-bgsecondary p-4 flex flex-row justify-between items-center">
      {/* Left Group */}
      <div className="w-fit flex flex-row gap-6 ">
        <Link
          to={"https://github.com/huangjoseph45/personal-site"}
          target="_blank"
          className="text-secondary hover:underline cursor-pointer hover:text-quarternary transition-all duration-300"
        >
          Made with ♥
        </Link>
      </div>
      <button
        className="hover:underline cursor-pointer hover:text-accent transition-all duration-300"
        onClick={contactFunc}
      >
        Contact Me!
      </button>

      {/* Right Group */}
      <div className="w-fit">
        <button
          className="cursor-pointer hover:bg-secondary/15 p-2 rounded-md  flex flex-row items-center justify-center gap-1 transition-all duration-300"
          onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className={`transition-all duration-500 feather feather-chevron-down rotate-180`}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
          Go to Top
        </button>
      </div>
    </div>
  );
};

export default Footer;
