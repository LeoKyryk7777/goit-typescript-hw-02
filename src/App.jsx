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
Modal.setAppElement("#root");

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPages] = useState(0);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query.trim()) return;
    const getPhoto = async () => {
      try {
        setIsLoading(true);
        const data = await searchPhotos(query, page);
        setPhotos((prev) => [...prev, ...data.results]);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPhoto();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (!newQuery.trim()) return;
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };
  const loadMore = () => {
    setPage(page + 1);
  };
  const openModal = (image) => {
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
