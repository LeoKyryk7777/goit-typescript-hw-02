import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMesage from "./components/ErrorMesage/ErrorMesage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import css from "./index.module.css";
import { searchPhotos } from "./services/api";
import Modal from "react-modal";
import { Image } from "./types";
Modal.setAppElement("#root");

export default function App() {
  const [photos, setPhotos] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPage, setTotalPages] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query.trim()) return;
    const getPhoto = async () => {
      try {
        setIsLoading(true);
        const data = await searchPhotos(query, page);
        setPhotos((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPhoto();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (!newQuery.trim()) return;
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const openModal = (image: Image) => {
    setModalImage(image);
    setIsOpen(true);
  };
  const closeModal = () => {
    setModalImage(null);
    setIsOpen(false);
  };

  return (
    <div className={css.pageContainer}>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery photos={photos} onImageClick={openModal} />
      {isLoading && <Loader />}
      <ImageModal
        isOpen={modalIsOpen}
        image={modalImage}
        onClose={closeModal}
      />
      {isError && <ErrorMesage />}
      {!isLoading && page < totalPage && photos.length > 0 && (
        <LoadMoreBtn loadMore={loadMore} />
      )}
    </div>
  );
}
