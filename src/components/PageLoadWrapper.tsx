import React, { useEffect, useRef, useState } from "react";
import Loader from "./loader/Loader";

const MIN_MS = 1500;

const PageLoadWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isReady, setIsReady] = useState(false);
  const startRef = useRef<number>(performance.now());

  useEffect(() => {
    const onLoaded = () => {
      const elapsed = performance.now() - startRef.current;
      const remaining = Math.max(0, MIN_MS - elapsed);

      const t = setTimeout(() => {
        setIsReady(true);
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

  return (
    <div>
      {isReady ? (
        children
      ) : (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit flex flex-col items-center">
          <Loader />
          <h1 className="text-2xl text-center">Loading</h1>
        </div>
      )}
    </div>
  );
};

export default PageLoadWrapper;
