import React from "react";
import type { ReactNode } from "react";
import { AnimatePresence } from "motion/react";

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
          <div
            className="fixed w-screen h-screen top-0 left-0 backdrop-blur-xs bg-black/15"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[25rem] w-[80vw] p-6 rounded-md bg-bgsecondary">
            <div className="flex flex-row justify-between items-center h-fit mb-2">
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 3.32001L21 21.32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {children}
          </div>
        </>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default Modal;
