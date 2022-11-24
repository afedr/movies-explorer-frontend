import MoviesCard from "../MoviesCard/MoviesCard";
import MoreMoviesBtn from "../MoreMoviesBtn/MoreMoviesBtn";
import "./MoviesCardList.css";
import { useState } from "react";

// renderCurrentMovies это запрос пользователя смечился с массивом
function MoviesCardList({ renderCards, renderCurrentMovies }) {
  const desktopWidth = 1280;
  const tabletWidth = 768;

  function countInitialMovies() { // сколько есть сейчас
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

  const [countToBeMovies, setCountToBeMovies] = useState(countInitialMovies()); //сколько должно быть

  window.addEventListener(
    "resize",
    function (event) {
      setCountToBeMovies(countInitialMovies());
    },
    true
  );
  
  function handleMoviesBtn() {
    setCountToBeMovies(countToBeMovies + countAddMovies())
  }

  // const moviesToRender = renderCards
  //   ? allMovies.filter((movie) => movie.saved)
  //   : allMovies;
  
  // массив кароточек которые мы будем рисовать 
  const resizeCurrentMovies =
  renderCurrentMovies.length >= countToBeMovies
      ? renderCurrentMovies.slice(0, countToBeMovies)
      : renderCurrentMovies;

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {resizeCurrentMovies.map((movie) => (
          <li className="movies-card-list__item">
            <MoviesCard
              duration={movie.duration}
              title={movie.nameRU}
              link={movie.image.url}
              trailer={movie.trailerLink}
              isSaved={movie.saved}
              isSavedMoviesPage={renderCards}
            />
          </li>
        ))}
      </ul>
      {resizeCurrentMovies.length < renderCurrentMovies.length && <MoreMoviesBtn handleMoviesBtn={handleMoviesBtn} />}
    </section>
  );
}

export default MoviesCardList;
