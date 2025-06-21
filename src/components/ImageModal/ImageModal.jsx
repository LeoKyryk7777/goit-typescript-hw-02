import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, image, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {image && <img src={image} alt="Large view" className={css.image} />}
      <button onClick={onClose} className={css.closeButton}>
        ✖
      </button>
    </Modal>
  );
}
