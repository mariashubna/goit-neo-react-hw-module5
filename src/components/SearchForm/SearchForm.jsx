import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <input
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search videos"
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
