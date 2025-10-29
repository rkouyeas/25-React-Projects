import type { ReactNode } from "react";

type ModalContentProps = {
  children: ReactNode;
};

const ModalContent = ({ children }: ModalContentProps) => {
  return <div>{children}</div>;
};

export default ModalContent;
