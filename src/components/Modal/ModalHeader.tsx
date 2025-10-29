import type { ReactNode } from "react";
import styles from "./styles.module.css";

type ModalHeaderProps = {
  onClose: () => void;
  children: ReactNode;
};

const ModalHeader = ({ onClose, children }: ModalHeaderProps) => {
  return (
    <header className={styles["modal-header"]}>
      <h1>{children}</h1>
      <button onClick={onClose}>X</button>
    </header>
  );
};

export default ModalHeader;
