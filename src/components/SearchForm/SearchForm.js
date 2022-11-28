import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form" required>
      <div className="search-form__search">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="search"
          required
        />
        <div className="search-form__loupe"></div>
        <button type="submit" className="search-form__button">
          <div className="search-btn__arrow"></div>
        </button>
        <hr className="search-form__shortline" />
        <label className="filter-checkbox">
          <input className="filter-checkbox__default" type="checkbox" />
          <span className="filter-checkbox__slider" />
          <span className="filter-checkbox__label">Короткометражки</span>
        </label>
      </div>
      <hr className="search-form__line" />
    </form>
  );
}

export default SearchForm;
