import React from "react";
import { Modal } from "react-bootstrap";

const CenteredModal = ({ children, modalTitle, isOpen, handleShowModal }) => {
  return (
    <Modal show={isOpen} onHide={handleShowModal}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <div className="m-3">{children}</div>
    </Modal>
  );
};

export { CenteredModal };
