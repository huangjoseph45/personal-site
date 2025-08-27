import React, { useState, useEffect, useRef } from "react";
import Button from "../button";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import useWindowWidth from "../useWindowWidth";

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

const cardVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, mass: 0.15, damping: 15 },
  },
};

const ProjectCard: React.FC<CardProps> = ({ folder }) => {
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [expandCard, setExpandCard] = useState<boolean>(false);
  const [fileType, setFileType] = useState<"video" | "image" | null>(null);
  const bottomRef = useRef<HTMLButtonElement>(null);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    fetchMarkdown(`${folder}/content.md`).then((data) => setCardData(data));
    const headOk = async (
      url: string,
      startsWith: string
    ): Promise<boolean> => {
      try {
        const res = await fetch(url, { method: "HEAD", cache: "no-store" });
        const ct = res.headers.get("content-type") || "";
        return res.ok && ct.startsWith(startsWith);
      } catch {
        return false;
      }
    };

    const checkFiles = async (): Promise<void> => {
      if (await headOk(`/content/${folder}/content.mp4`, "video/")) {
        setFileType("video");
        return;
      }

      const exts = ["jpg", "jpeg", "png", "webp", "gif", "avif"];
      for (const ext of exts) {
        if (await headOk(`/content/${folder}/content.${ext}`, "image/")) {
          setFileType("image");
          return;
        }
      }

      setFileType(null);
    };

    checkFiles();
  }, []);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`origin-top relative flex flex-col lg:flex-row gap-2 
    transition-shadow duration-300 ease-in-out
    ${expandCard ? "" : "hover:bg-bghover hover:shadow-lg shadow-hovershadow"} 
    bg-bgsecondary rounded-md`}
    >
      <AnimatePresence initial={false}>
        {!expandCard && (
          <motion.div
            className="origin-left aspect-video mx-auto lg:mx-0 h-auto max-h-[30vh] w-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            layout
          >
            {fileType === "video" ? (
              <video
                className="origin-left rounded-md h-full w-full object-cover object-top"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src={`/content/${folder}/content.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : fileType === "image" ? (
              <img
                src={`/content/${folder}/content.png`}
                className="rounded-md flex-1 object-cover object-top p-4 m-auto"
                alt=""
              />
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className=" min-h-55 p-8 flex-1 md:min-w-[30rem] min-w-[20rem]">
        <div className="p-0 flex flex-row items-center justify-between ">
          {cardData?.data ? (
            <h1 className="2xl:text-4xl xl:text-3xl text-xl font-extrabold  my-auto">
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

        <ul className="gap-2 my-4 w-fit flex flex-row flex-wrap">
          {cardData?.data.tags.map((tag, index) => {
            return (
              <li
                key={`${tag}-${index}`}
                className="capitalize text-sm px-2 py-1 rounded-lg bg-quarternary w-fit text-white"
              >
                {tag}
              </li>
            );
          })}
        </ul>

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
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
        <motion.button
          className="mt-2 flex flex-row gap-1 text-quarternary cursor-pointer hover:bg-tertiary/15 w-fit rounded-md p-1"
          ref={bottomRef}
          onClick={() => {
            setExpandCard(!expandCard);
            if (!expandCard)
              setTimeout(() => {
                bottomRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
              }, 500);
          }}
        >
          <p className="mb-0">{expandCard ? "Collapse" : "Read More"}</p>
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
    </motion.div>
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
