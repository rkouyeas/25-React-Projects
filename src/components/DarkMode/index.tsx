import useLocalStorage from "../../hooks/useLocalStorage";
import styles from "./styles.module.css";

const DarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={styles["darkmode-container"]} data-theme={theme}>
      <div>
        <p>Hello World</p>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default DarkMode;
