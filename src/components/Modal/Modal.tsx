import type { ReactNode, RefObject } from "react";
import styles from "./styles.module.css";

export type ModalProps = {
  children: ReactNode;
  ref: RefObject<HTMLDivElement | null>;
};

export const Modal = ({ children, ref }: ModalProps) => {
  return (
    <div className={styles.overlay}>
      <div ref={ref} className={styles.modal}>
        {children}
      </div>
    </div>
  );
};
