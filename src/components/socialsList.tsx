import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router";

const containerVariants = {
  hidden: {
    opacity: 0.5,
    width: 0,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
  show: {
    opacity: 1,
    width: "fit-content",
    transition: { ease: "easeInOut", duration: 0.3 },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { delay: 0.3 } },
};

const SocialsList: React.FC<{
  showSocials: () => void;
}> = ({ showSocials }) => {
  return (
    <motion.div
      className="origin-left h-full  rounded-full flex items-center justify-center bg-bgsecondary"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.button
        className="rounded-full hover:bg-secondary/15"
        onClick={showSocials}
        variants={childVariants}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-secondary stroke-current size-10 cursor-pointer  p-2 transition-all duration-300 rounded-md rotate-90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </motion.button>
      <Link to={import.meta.env.VITE_LINKEDIN} target="_blank">
        <motion.div
          variants={childVariants}
          className="rounded-full hover:bg-quarternary/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-secondary stroke-current size-10 cursor-pointer  p-2 transition-all duration-300 rounded-md "
            viewBox="0 0 20 20"
            version="1.1"
          >
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-180.000000, -7479.000000)"
                fill="currentColor"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                    id="linkedin-[#161]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </motion.div>
      </Link>
      <Link to={import.meta.env.VITE_GITHUB} target="_blank">
        {" "}
        <motion.div
          variants={childVariants}
          className="rounded-full hover:bg-quarternary/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-secondary size-10 cursor-pointer p-2 transition-all duration-300 rounded-md "
            viewBox="0 0 20 20"
            version="1.1"
          >
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-140.000000, -7559.000000)"
                fill="currentColor"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                    id="github-[#142]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </motion.div>
      </Link>
      <Link to={import.meta.env.VITE_INSTA} target="_blank">
        {" "}
        <motion.div
          variants={childVariants}
          className="rounded-full hover:bg-quarternary/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="text-secondary stroke-current size-10 cursor-pointer  p-2 transition-all duration-300 rounded-md "
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              fill="currentColor"
            />
            <path
              d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default SocialsList;
