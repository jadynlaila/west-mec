import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../util/context";

const Modal = () => {
  const { modalOpen, closeModal } = useAppContext();
  return (
    <div className={`modal-overlay ${modalOpen && "show-modal"}`}>
      <div className="modal-container" onClick={closeModal}>
        <h3>Modal Content</h3>
        <button className="close-modal-button" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
