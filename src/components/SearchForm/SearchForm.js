import "./SearchForm.css";
import React, { useEffect } from "react";

function SearchForm({ handleSearch, searchQuery, filterOn }) {
  const [error, setError] = React.useState();
  const [inputValue, setInputValue] = React.useState(searchQuery || "");
  const [isFilterOn, setIsFilterOn] = React.useState(filterOn || false);

  function handleReset(e) {
    clearError();
    setInputValue(e.target.value);
  }

  function clearError() {
    setError(null);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputValue) {
      setError("Нужно ввести ключевое слово");
    } else {
      handleSearch(inputValue, isFilterOn);
    }
  }

  function handleSwitch() {
    handleSearch(inputValue, !isFilterOn);
    setIsFilterOn(!isFilterOn);
  }

  return (
    <form className="search-form" required>
      <div className="search-form__search">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="search"
          required
          onFocus={clearError}
          value={inputValue || ""}
          onChange={handleReset}
        />
        {error && <span className="search-form__error">{error}</span>}
        <div className="search-form__loupe"></div>
        <button
          type="submit"
          className="search-form__button"
          onClick={handleSubmit}
        >
          <div className="search-btn__arrow"></div>
        </button>
        <hr className="search-form__shortline" />
        <label className="filter-checkbox">
          <input
            className="filter-checkbox__default"
            type="checkbox"
            onChange={handleSwitch}
            checked={isFilterOn}
          />
          <span className="filter-checkbox__slider" />
          <span className="filter-checkbox__label">Короткометражки</span>
        </label>
      </div>
      <hr className="search-form__line" />
    </form>
  );
}

export default SearchForm;
