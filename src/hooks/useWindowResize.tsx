import { useState, useEffect } from "react";

type WindowSize = {
  height: number;
  width: number;
};

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const setDimensions = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", setDimensions);

    return () => window.removeEventListener("resize", setDimensions);
  }, []);

  return windowSize;
};

export default useWindowResize;
