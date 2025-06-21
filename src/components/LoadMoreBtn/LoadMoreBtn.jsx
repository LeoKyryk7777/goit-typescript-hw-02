import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ loadMore }) {
  return (
    <div>
      <button className={css.loadMoreBtn} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
}
