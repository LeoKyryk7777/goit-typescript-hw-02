import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../../types";

interface ImageModalProps {
  isOpen: boolean;
  image: Image | null;
  onClose: () => void;
}

export default function ImageModal({
  isOpen,
  image,
  onClose,
}: ImageModalProps) {
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
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description || "Large view"}
          className={css.image}
        />
      )}
      <button onClick={onClose} className={css.closeButton}>
        ✖
      </button>
    </Modal>
  );
}
