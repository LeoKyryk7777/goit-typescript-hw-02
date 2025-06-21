import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      return toast.error("Input field cannot be empty.");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />

        <button className={css.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </form>
    </header>
  );
}
