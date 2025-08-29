import React from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

const Modal: React.FC<{
  setShowModal: (value: boolean) => void;
  showModal: boolean;
  children: ReactNode;
  name: string;
}> = ({ setShowModal, showModal, children, name }) => {
  return (
    <AnimatePresence>
      {showModal ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut" }}
            className="fixed w-screen h-screen top-0 left-0 backdrop-blur-xs bg-black/15 z-30"
            onClick={() => setShowModal(false)}
          ></motion.div>
          {/* Decoration */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-40 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[25rem]   shadow-md "
          >
            <div className="relative rounded-md bg-bgsecondary px-6 py-4">
              {/* Decoration */}
              <div className="shadow-sm w-full h-full absolute -top-1 left-2 bg-bgtertiary -z-10 rounded-md" />

              <div className="flex flex-row justify-between items-center h-fit mb-2 ">
                <h1 className="my-auto">{name}</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-0.5 0 25 25"
                  fill="none"
                  className="text-secondary stroke-current size-10 cursor-pointer hover:bg-primary/65 p-2 transition-all duration-300 rounded-md"
                  onClick={() => setShowModal(false)}
                >
                  <path
                    d="M3 21.32L21 3.32001"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 3.32001L21 21.32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {children}
            </div>
          </motion.div>
        </>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default Modal;
