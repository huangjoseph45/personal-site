import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import AnimationWrapper from "../AnimationWrapper";
import Button from "../button";
import SocialsList from "../socialsList";

type BooleanSelectors = {
  hoveringName: boolean;
  showGT: boolean;
  showSocials: boolean;
};

const Intro: React.FC<{ showContact?: () => void }> = ({ showContact }) => {
  const [booleanSelectors, setBooleanSelectors] = useState<BooleanSelectors>({
    hoveringName: false,
    showGT: false,
    showSocials: false,
  });

  return (
    <div className="flex flex-row mx-12 mb-18 mt-12 lg:gap-16 md:gap-12 gap-8">
      <div className="lg:w-[50%]">
        <TextAnim text="Hi, my name is" />
        <AnimationWrapper>
          <Link
            to={import.meta.env.VITE_LINKEDIN}
            target="_blank"
            className="flex items-center w-fit"
          >
            <motion.div
              className="w-fit flex flex-col gap-0 cursor-pointer relative"
              onHoverStart={() =>
                setBooleanSelectors({ ...booleanSelectors, hoveringName: true })
              }
              onHoverEnd={() =>
                setBooleanSelectors({
                  ...booleanSelectors,
                  hoveringName: false,
                })
              }
            >
              <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-quarternary">
                Joseph Huang
              </h1>
              {booleanSelectors.hoveringName ? (
                <motion.hr
                  className="absolute top-3/4 text-quarternary border-1 mt-2"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                />
              ) : (
                ""
              )}
            </motion.div>
            <AnimatePresence>
              {booleanSelectors.hoveringName ? (
                <motion.svg
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  onHoverStart={() =>
                    setBooleanSelectors({
                      ...booleanSelectors,
                      hoveringName: true,
                    })
                  }
                  onHoverEnd={() =>
                    setBooleanSelectors({
                      ...booleanSelectors,
                      hoveringName: false,
                    })
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`transition-all duration-500 feather feather-chevron-down -rotate-90 text-quarternary`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </motion.svg>
              ) : (
                ""
              )}
            </AnimatePresence>
          </Link>
        </AnimationWrapper>
        <div className="relative mt-6 w-full xl:text-2xl lg:text-xl md:text-lg text-base gap-4 flex flex-col mb-6">
          <p>
            I'm a computer engineering student at{" "}
            <Link target="_blank" to={"https://ece.gatech.edu/"}>
              <motion.strong
                className="text-gt cursor-pointer relative hover:underline"
                onHoverStart={() =>
                  setBooleanSelectors({ ...booleanSelectors, showGT: true })
                }
                onHoverEnd={() =>
                  setBooleanSelectors({ ...booleanSelectors, showGT: false })
                }
              >
                <AnimatePresence>
                  {booleanSelectors.showGT ? (
                    <motion.img
                      src="/gt.png"
                      alt="gt"
                      className="absolute -translate-y-full h-32 left-0 -top-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  ) : (
                    ""
                  )}
                </AnimatePresence>
                Georgia Tech
              </motion.strong>
            </Link>
            . I'm taking concentrations in Cybersecurity and System Architecture
            and plan to graduate in 2028 with my BS.
          </p>
          <p>
            Outside of school, I have worked on several projects related to full
            stack development focusing primarily on&#20;
            <span className="inline-flex flex-row items-baseline gap-1 text-cyan-400 font-medium">
              React
            </span>
          </p>
        </div>
        <div className="flex flex-row gap-4 h-[3rem]">
          <Button
            variant="secondary"
            label="Contact me"
            onClick={showContact}
          />
          <AnimatePresence>
            {booleanSelectors.showSocials ? (
              <SocialsList
                showSocials={() =>
                  setBooleanSelectors({
                    ...booleanSelectors,
                    showSocials: !booleanSelectors.showSocials,
                  })
                }
              />
            ) : (
              <Button
                variant="primary"
                label="Socials"
                onClick={() =>
                  setBooleanSelectors({
                    ...booleanSelectors,
                    showSocials: !booleanSelectors.showSocials,
                  })
                }
              />
            )}
          </AnimatePresence>
        </div>
      </div>
      <img
        className="md:block hidden aspect-square overflow-hidden object-cover flex-1 max-h-[30rem] min-w-[15rem] rounded-md"
        src="/me.jpg"
      />
    </div>
  );
};

const cursorVariants = {
  blinking: {
    opacity: [1, 1, 0, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

const BlinkingCursor: React.FC = () => {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-8 w-[3px] translate-y-1 translate-x-2 bg-secondary"
    />
  );
};

const TextAnim: React.FC<{ text: string }> = ({ text }) => {
  const textArray = text.split("") as Array<string>;
  const [displayText, setDisplayText] = useState<Array<string>>([]);
  const duration = 1.5 as number;
  const frame = useRef<number>(0);

  useEffect(() => {
    let cancelled = false;

    const tick = () => {
      if (frame.current > textArray.length || cancelled) {
        return;
      }

      setDisplayText(textArray.slice(0, frame.current));
      frame.current += 1;

      setTimeout(tick, (duration / textArray.length) * 1000);
    };

    tick();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex flex-row h-fit">
      <h1 className="xl:mb-8 lg:mb-6 mb-4 xl:text-4xl lg:text-3xl text-2xl whitespace-nowrap overflow-hidden">
        {displayText.join("")}
      </h1>
      <BlinkingCursor />
    </div>
  );
};

export default Intro;
