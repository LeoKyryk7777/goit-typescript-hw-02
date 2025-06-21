import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => (
        <li className={css.galleryItem} key={photo.id}>
          <ImageCard
            onImageClick={onImageClick}
            src1={photo.urls.regular}
            src={photo.urls.small}
            alt={photo.alt_description || "Image"}
          />
        </li>
      ))}
    </ul>
  );
}
