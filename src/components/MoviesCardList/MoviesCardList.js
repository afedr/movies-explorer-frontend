import MoviesCard from "../MoviesCard/MoviesCard";
import MoreMoviesBtn from "../MoreMoviesBtn/MoreMoviesBtn";
import "./MoviesCardList.css";
import { useState } from "react";

function MoviesCardList({
  renderCards,
  renderCurrentMovies,
  addBookmark,
  isSaved,
  deleteBookmark,
}) {
  const desktopWidth = 1280;
  const tabletWidth = 768;

  function countInitialMovies() {
    return window.innerWidth >= desktopWidth
      ? 12
      : window.innerWidth >= tabletWidth
      ? 8
      : 5;
  }

  function countAddMovies() {
    return window.innerWidth >= desktopWidth
      ? 3
      : window.innerWidth >= tabletWidth
      ? 2
      : 2;
  }

  const [countToBeMovies, setCountToBeMovies] = useState(countInitialMovies()); 

  window.addEventListener(
    "resize",
    function (event) {
      setCountToBeMovies(countInitialMovies());
    },
    true
  );

  function handleMoviesBtn() {
    setCountToBeMovies(countToBeMovies + countAddMovies());
  }

  
  const resizeCurrentMovies =
    renderCurrentMovies.length >= countToBeMovies
      ? renderCurrentMovies.slice(0, countToBeMovies)
      : renderCurrentMovies;

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {resizeCurrentMovies.map((movie) => (
          <li className="movies-card-list__item" key={movie._id || movie.id}>
            <MoviesCard
              movie={movie}
              isSavedMoviesPage={renderCards}
              addBookmark={addBookmark}
              isSaved={isSaved}
              deleteBookmark={deleteBookmark}
            />
          </li>
        ))}
      </ul>
      {resizeCurrentMovies.length < renderCurrentMovies.length && (
        <MoreMoviesBtn handleMoviesBtn={handleMoviesBtn} />
      )}
    </section>
  );
}

export default MoviesCardList;
