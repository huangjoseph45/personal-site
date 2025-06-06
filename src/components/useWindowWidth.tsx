import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const resizeFunc = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);

    window.addEventListener("resize", resizeFunc);

    return () => window.removeEventListener("resize", resizeFunc);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
