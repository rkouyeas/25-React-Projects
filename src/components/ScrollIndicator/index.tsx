import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles["scroll-indicator"]}
      style={{ width: `${scrollPercentage}%` }}
    ></div>
  );
};

export default ScrollIndicator;
