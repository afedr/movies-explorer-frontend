import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useState, useEffect } from "react";
import SearchData from "../SearchData/SearchData";

function SavedMovies({ savedMovies, deleteBookmark }) {
  const [searchResult, setSearchResult] = useState("");
  const [resultOfSavedMoviesSearch, setResultOfSavedMoviesSearch] =
    useState(savedMovies);

  // console.log(savedMovies);

  useEffect(() => {
    setResultOfSavedMoviesSearch(savedMovies);
  }, [savedMovies]);

  function handleSearch(inputData, isFilterOn) {
    console.log(inputData);
    const searchResult = savedMovies.filter(
      (movie) =>
        movie.nameRU.includes(inputData) || movie.nameEN.includes(inputData)
    );
    const onlyShortMoviesResult = searchResult.filter(
      (movie) => movie.duration <= 40
    );

    // console.log(onlyShortMoviesResult);

    const filterResult = isFilterOn ? onlyShortMoviesResult : searchResult;

    if (inputData.length !== 0 && filterResult.length === 0) {
      setSearchResult("Ничего не найдено");
    } else {
      setSearchResult("");
    }
    setResultOfSavedMoviesSearch(filterResult);
  }

  return (
    <section className="movies">
      <SearchForm handleSearch={handleSearch} />
      <MoviesCardList
        renderCards={true}
        renderCurrentMovies={resultOfSavedMoviesSearch}
        deleteBookmark={deleteBookmark}
      />
      {searchResult.length !== 0 && <SearchData text={searchResult} />}
    </section>
  );
}

export default SavedMovies;
