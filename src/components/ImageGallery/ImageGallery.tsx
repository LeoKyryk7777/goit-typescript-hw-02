import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../types";

interface ImageGalleryProps {
  photos: Image[];
  onImageClick: (image: Image) => void;
}

export default function ImageGallery({
  photos,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => (
        <li className={css.galleryItem} key={photo.id}>
          <ImageCard
            onImageClick={() => onImageClick(photo)}
            src1={photo.urls.regular}
            src={photo.urls.small}
            alt={photo.alt_description || "Image"}
          />
        </li>
      ))}
    </ul>
  );
}
