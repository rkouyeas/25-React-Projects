import type { FC, ReactNode } from "react";
import { type ModalProps, Modal } from "./Modal";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";

type ModalCompound = FC<ModalProps> & {
  Header: FC<{ onClose: () => void; children: ReactNode }>;
  Content: FC<{ children: ReactNode }>;
};

const CompoundModal = Modal as ModalCompound;

CompoundModal.Header = ModalHeader;
CompoundModal.Content = ModalContent;

export default CompoundModal;
