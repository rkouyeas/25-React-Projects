import { FaSpinner } from "react-icons/fa";
import styles from "./styles.module.css";

type SpinnerProps = {
  size?: number;
  color?: string;
};

const Spinner = ({ size = 20, color = "#000000" }: SpinnerProps) => {
  return (
    <FaSpinner
      className={styles.spinner}
      size={size}
      color={color}
      aria-label="loading"
      role="status"
    />
  );
};

export default Spinner;
