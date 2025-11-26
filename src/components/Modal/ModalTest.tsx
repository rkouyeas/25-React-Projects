import { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Modal from ".";
import styles from "./styles.module.css";

const ModalTest = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  useOnClickOutside(modalRef, () => setShowModal(false));

  return (
    <div className={styles["modal-test-container"]}>
      <button className={styles["modal-test-button"]} onClick={toggleModal}>
        Display Modal
      </button>
      {showModal && (
        <Modal ref={modalRef}>
          <Modal.Header onClose={toggleModal}>Modal</Modal.Header>
          <Modal.Content>
            <p style={{ paddingBlock: "1rem" }}>
              This is the content of the test modal.
            </p>
          </Modal.Content>
        </Modal>
      )}
    </div>
  );
};

export default ModalTest;
