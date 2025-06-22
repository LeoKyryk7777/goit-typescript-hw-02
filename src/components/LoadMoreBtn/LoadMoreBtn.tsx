import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  loadMore: () => void;
}

export default function LoadMoreBtn({ loadMore }: LoadMoreBtnProps) {
  return (
    <div>
      <button className={css.loadMoreBtn} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
}
