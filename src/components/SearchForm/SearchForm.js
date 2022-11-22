import "./SearchForm.css";
import React from 'react';

function SearchForm({search, keyString}) {

  const [error, setError] = React.useState();
  const [inputValue, setInputValue] = React.useState(keyString);


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
      setError('Нужно ввести ключевое слово');
    } else {
      search(inputValue); 
    }
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
          value={inputValue || ''}
          onChange={handleReset}
        />
        {error && <span className="search-form__error">{error}</span>}
        <div className="search-form__loupe"></div>
        <button type="submit" className="search-form__button"  onClick={handleSubmit}>
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
