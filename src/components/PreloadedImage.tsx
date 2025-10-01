import React, { useContext, useEffect } from "react";
import AppContext from "./ContextProvider";

type ReadyState = Record<string, boolean>;

const PreloadedImage: React.FC<{ imageSrc: string }> = ({ imageSrc }) => {
  const { isAllReady, setIsReady } = useContext(AppContext);

  useEffect(() => {
    setIsReady(
      setIsReady((readyState: ReadyState) => ({
        ...readyState,
        [`prelImage-${imageSrc}`]: false,
      }))
    );
  }, [imageSrc, setIsReady]);

  return (
    <img
      src={imageSrc}
      className={`w-full object-cover  h-full  -rotate-y-0  rounded-sm ${
        isAllReady ? "shadow-tertiary" : ""
      }`}
      onLoad={() =>
        setIsReady((readyState: ReadyState) => ({
          ...readyState,
          [`prelImage-${imageSrc}`]: true,
        }))
      }
    />
  );
};

export default PreloadedImage;
