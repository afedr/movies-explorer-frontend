import MoviesCard from "../MoviesCard/MoviesCard";
import MoreMoviesBtn from "../MoreMoviesBtn/MoreMoviesBtn";
import "./MoviesCardList.css";
import { useState } from "react";


function MoviesCardList({ renderCards, renderCurrentMovies }) {
  const desktopWidth = 1280;
  const tabletWidth = 768;

  function calcMaxMovies() {
    return window.innerWidth >= desktopWidth
      ? 12
      : window.innerWidth >= tabletWidth
      ? 8
      : 5;
  }
  const [countMaxMovies, setCountMaxMovies] = useState(calcMaxMovies());

  window.addEventListener(
    "resize",
    function (event) {
      setCountMaxMovies(calcMaxMovies());
    },
    true
  );
  
  // const moviesToRender = renderCards
  //   ? allMovies.filter((movie) => movie.saved)
  //   : allMovies;


  const resizeCurrentMovies =
  renderCurrentMovies.length >= countMaxMovies
      ? renderCurrentMovies.slice(0, countMaxMovies)
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
      {resizeCurrentMovies.length < renderCurrentMovies.length && <MoreMoviesBtn />}
    </section>
  );
}

export default MoviesCardList;
