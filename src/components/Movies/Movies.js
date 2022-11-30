import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import SearchData from "../SearchData/SearchData";

function Movies({ addBookmark, isSaved, deleteBookmark }) {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery")
  );
  const [isFilterOn, setIsFilterOn] = useState(
    JSON.parse(localStorage.getItem("isFilterOn")) || false
  );
  const [renderCurrentMovies, setRenderCurrentMovies] = useState(
    JSON.parse(localStorage.getItem("renderCurrentMovies")) || []
  );
  const [searchResult, setSearchResult] = useState("");
  const [preloading, setPreloading] = useState(false);

  function handleSearch(inputData, isFilterOn) {
    setPreloading(true);

    moviesApi
      .getMovies()
      .then((allMovies) => {
        const searchResult = allMovies.filter(
          (movie) =>
            movie.nameRU.toLowerCase().includes(inputData.toLowerCase()) || movie.nameEN.toLowerCase().includes(inputData.toLowerCase())
        );
        const onlyShortMoviesResult = searchResult.filter(
          (movie) => movie.duration <= 40
        );

        console.log(onlyShortMoviesResult);

        const filterResult = isFilterOn ? onlyShortMoviesResult : searchResult;

        if (inputData.length !== 0 && filterResult.length === 0) {
          setSearchResult("Ничего не найдено");
        } else {
          setSearchResult("");
        }
        setRenderCurrentMovies(filterResult);
        localStorage.setItem("searchQuery", inputData);
        localStorage.setItem(
          "renderCurrentMovies",
          JSON.stringify(filterResult)
        );
        localStorage.setItem("isFilterOn", JSON.stringify(isFilterOn));

        setPreloading(false);
      })
      .catch((data) => {
        setPreloading(false);
        setSearchResult(
          "Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен.Подождите немного и попробуйте ещё раз"
        );
      });
  }

  return (
    <section className="movies">
      <SearchForm
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        filterOn={isFilterOn}
      />
      {preloading && <Preloader />}
      {!preloading && (
        <MoviesCardList
          renderCurrentMovies={renderCurrentMovies}
          addBookmark={addBookmark}
          isSaved={isSaved}
          deleteBookmark={deleteBookmark}
        />
      )}
      {searchResult.length !== 0 && <SearchData text={searchResult} />}
    </section>
  );
}

export default Movies;
