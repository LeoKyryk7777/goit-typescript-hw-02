import css from "./ErrorMesage.module.css";

export default function ErrorMesage() {
  return (
    <div>
      <h2 className={css.tittle}>Server is dead...try again later</h2>
    </div>
  );
}
