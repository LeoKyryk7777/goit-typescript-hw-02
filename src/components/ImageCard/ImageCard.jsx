import css from "./ImageCard.module.css";

export default function ImageCard({ src1, src, alt, onImageClick }) {
  return (
    <div className={css.card}>
      <img src={src} alt={alt} onClick={() => onImageClick(src1)} />
    </div>
  );
}
