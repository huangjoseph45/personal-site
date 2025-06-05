import React, { useState, useEffect } from "react";
import Button from "../button";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import { delay } from "motion";

type CardProps = {
  folder: `${string}`;
};

type CardData = {
  data: {
    title: string;
    date: string;
    tags: Array<string>;
    blurb: string;
    link: string;
  };
  content: string;
};

const ProjectCard: React.FC<CardProps> = ({ folder }) => {
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [expandCard, setExpandCard] = useState<boolean>(false);
  useEffect(() => {
    fetchMarkdown(`${folder}/content.md`).then((data) => setCardData(data));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <AnimatePresence>
        {!expandCard ? (
          <motion.div
            className="origin-top-left"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ height: 220, width: 550, opacity: 1 }}
            exit={{ width: 0, height: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
              mass: 0.15,
              width: {
                delay: 0.25,
              },
            }}
          >
            <video
              className="rounded-md h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={`${folder}/content.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>

      <motion.div className="rounded-md bg-bgsecondary min-h-55 p-8  w-full">
        <div className="p-0 flex flex-row items-center justify-between">
          {cardData?.data ? (
            <h1 className="2xl:text-4xl xl:text-3xl text-xl font-extrabold">
              {cardData?.data.title}
            </h1>
          ) : (
            <h1 className="w-1/3 h-[1.5rem] bg-secondary/25 p-2 rounded-lg"></h1>
          )}

          <Link
            to={cardData?.data.link ?? "#"}
            className=" flex-row gap-1 hidden md:flex"
            target="_blank"
          >
            <Button size={0.75} variant="tertiary">
              Open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"></path>
              </svg>
            </Button>
          </Link>
        </div>
        {cardData?.data ? (
          <small className="2xl:text-lg lg:text-md text-sm text-secondary/75">
            {cardData?.data.date}
          </small>
        ) : (
          <small className="block w-[8rem] h-[1.25rem] rounded-md p-2 bg-secondary/25"></small>
        )}
        {expandCard ? (
          ""
        ) : cardData?.data ? (
          <p className="mt-4 2xl:text-2xl xl:text-xl lg:text-lg text-md">
            {cardData?.data.blurb}
          </p>
        ) : (
          <p className="mt-4 w-2/3 h-[3rem] bg-secondary/25 rounded-md"></p>
        )}

        {/* Expanded Content */}
        <AnimatePresence>
          {expandCard ? (
            <motion.div
              initial={{
                height: "0",
              }}
              animate={{ height: "auto" }}
              exit={{ height: "0" }}
              transition={{
                type: "spring",
                stiffness: "750",
                damping: "45",
                mass: "0.35",
              }}
              className="overflow-hidden"
            >
              <hr className="w-full my-9 border-secondary/35 border-1 " />
              <div className="2xl:text-2xl xl:text-xl lg:text-lg text-md mb-6">
                <ReactMarkdown>{cardData?.content ?? ""}</ReactMarkdown>
              </div>
              {/* <motion.button
              className="mt-2 flex flex-row gap-1 text-quarternary cursor-pointer hover:bg-tertiary/15 w-fit transition-all duration-300 rounded-md p-1"
              onClick={() => setExpandCard(false)}
            >
              <p className="">{"Collapse"}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`transition-all duration-500 feather feather-chevron-down ${
                  expandCard ? "-rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </motion.button> */}
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
        <motion.button
          className="mt-2 flex flex-row gap-1 text-quarternary cursor-pointer hover:bg-tertiary/15 w-fit rounded-md p-1"
          onClick={() => setExpandCard(!expandCard)}
        >
          <p className="">{expandCard ? "Collapse" : "Read More"}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className={`transition-all duration-500 feather feather-chevron-down ${
              expandCard ? "-rotate-180" : ""
            }`}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProjectCard;

async function fetchMarkdown(fileName: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/getMarkdown?file=${fileName}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Error `);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
