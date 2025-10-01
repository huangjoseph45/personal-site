import React, { useEffect, useRef, useState, useContext } from "react";
import Loader from "./loader/Loader";
import AppContext, { ContextProvider } from "./ContextProvider";

type ReadyState = Record<string, boolean>;

const MIN_MS = 500;

const PageLoadWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isReady, setIsReady] = useState<ReadyState>({
    generalLoad: false,
  });
  const [isAllReady, setIsAllReady] = useState<boolean>(false);
  const startRef = useRef<number>(performance.now());

  useEffect(() => {
    const onLoaded = () => {
      const elapsed = performance.now() - startRef.current;
      const remaining = Math.max(0, MIN_MS - elapsed);

      const t = setTimeout(() => {
        setIsReady((readyStates) => ({
          ...readyStates,
          generalLoad: true,
        }));
      }, remaining);

      return () => clearTimeout(t);
    };

    if (document.readyState === "complete") {
      return onLoaded();
    }

    let cleanup: (() => void) | undefined;

    const handler = () => {
      cleanup = onLoaded();
    };

    window.addEventListener("load", handler, { once: true });
    return () => {
      window.removeEventListener("load", handler);
      cleanup?.();
    };
  }, []);

  useEffect(() => {
    if (isReady && Object.values(isReady).every((value) => value)) {
      setIsAllReady(true);
    } else {
      setIsAllReady(false);
    }
  }, [isReady]);

  return (
    <ContextProvider contextValues={{ isAllReady, isReady, setIsReady }}>
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit flex flex-col items-center ${
          isAllReady ? "hidden" : "block"
        }`}
      >
        <Loader />
        <h1 className="text-2xl text-center">Loading</h1>
      </div>
      <div className={isAllReady ? "block" : "hidden"}> {children}</div>
    </ContextProvider>
  );
};

export default PageLoadWrapper;
