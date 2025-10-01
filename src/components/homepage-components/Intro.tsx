import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import AnimationWrapper from "../AnimationWrapper";
import Button from "../button";
import SocialsList from "../socialsList";
import ThreeDDiv from "../3DDiv";
import PreloadedImage from "../PreloadedImage";

export type BooleanSelectors = {
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
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const contentEl = contentRef.current;
    const imgEl = imgRef.current;
    if (!contentEl || !imgEl) return;

    const syncHeight = () => {
      const h = contentEl.offsetHeight;
      if (h > 0) imgEl.style.height = `${h}px`;
    };

    const ro = new ResizeObserver(syncHeight);
    ro.observe(contentEl);

    window.addEventListener("resize", syncHeight);

    syncHeight();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncHeight);
    };
  }, []);

  return (
    <div
      className="mx-4 md:mx-12 mb-18 mt-6 lg:gap-16 md:gap-12 flex flex-col md:flex-row gap-12 relative items-stretch "
      ref={rootRef}
    >
      {/* Main Content */}
      <div
        className="h-fit  p-6 flex flex-col md:w-1/2 relative bg-primary shadow-sm"
        ref={contentRef}
      >
        <ThreeDDiv />

        {/* Intro Header */}
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
            >
              <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-quarternary">
                Joseph Huang
              </h1>
              <AnimatePresence>
                {booleanSelectors.hoveringName ? (
                  <motion.hr
                    className="absolute top-3/4 text-quarternary border-1 mt-2"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{ width: 0 }}
                  />
                ) : null}
              </AnimatePresence>
            </motion.div>
            <AnimatePresence mode="wait">
              {booleanSelectors.hoveringName ? (
                <motion.svg
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                  transition={{ delay: 0.25 }}
                  onHoverStart={() =>
                    setBooleanSelectors((prev) => ({
                      ...prev,
                      hoveringName: true,
                    }))
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
                  className={` feather feather-chevron-down -rotate-90 text-quarternary`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </motion.svg>
              ) : null}
            </AnimatePresence>
          </Link>
        </AnimationWrapper>

        {/* Small Image Under Header */}
        <img
          className="md:hidden shadow-sm  overflow-hidden object-cover flex-1 max-h-[30rem] w-full rounded-md shadow-tertiary"
          src="/me.jpg"
        />
        {/* About Me */}
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
                  setBooleanSelectors({
                    ...booleanSelectors,
                    showGT: false,
                  })
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
            and plan to graduate in 2027 with my BS.
          </p>
          <p>
            Outside of school, I have worked on several projects related to full
            stack development focusing primarily on{" "}
            <span className="inline-block flex-row items-baseline gap-1 text-cyan-400 font-medium">
              React
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-8 h-[3rem]">
          <Button
            variant="secondary"
            label="Contact me"
            onClick={showContact}
          />
          <SocialsList
            showSocials={() =>
              setBooleanSelectors({
                ...booleanSelectors,
                showSocials: !booleanSelectors.showSocials,
              })
            }
            setBooleanSelectors={setBooleanSelectors}
            booleanSelectors={booleanSelectors}
          />
        </div>
      </div>
      {/* Large Image */}
      <div
        className="h-fit flex-col md:w-1/2 relative bg-primary shadow-md hidden md:flex"
        ref={imgRef}
      >
        <PreloadedImage imageSrc="/me.jpg" />
      </div>
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
