import css from "./ImageCard.module.css";

interface ImageCardProps {
  src1: string;
  src: string;
  alt: string;
  onImageClick: () => void;
}

export default function ImageCard({ src, alt, onImageClick }: ImageCardProps) {
  return (
    <div className={css.card}>
      <img src={src} alt={alt} onClick={onImageClick} />
    </div>
  );
}
