import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";
import { useState, FormEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";
import { string } from "yup";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
          autoComplete="off"
          autoFocus
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
