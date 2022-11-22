import MoviesCard from "../MoviesCard/MoviesCard";
import MoreMoviesBtn from "../MoreMoviesBtn/MoreMoviesBtn";
import moviesApi from "../../utils/MoviesApi";
import "./MoviesCardList.css";
import { useEffect, useState } from "react";


function MoviesCardList({ renderCards }) {
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
  const [allMovies, setAllMovies] = useState([]);

  window.addEventListener(
    "resize",
    function (event) {
      setCountMaxMovies(calcMaxMovies());
    },
    true
  );

  useEffect (() => {
    moviesApi.getMovies()
    .then ((movies) => {
      setAllMovies(movies)
    })
  })
  
  const moviesToRender = renderCards
    ? allMovies.filter((movie) => movie.saved)
    : allMovies;

  const renderCurrentMovies =
    moviesToRender.length >= countMaxMovies
      ? moviesToRender.slice(0, countMaxMovies)
      : moviesToRender;

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {renderCurrentMovies.map((movie) => (
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
      {renderCurrentMovies.length < moviesToRender.length && <MoreMoviesBtn />}
    </section>
  );
}

export default MoviesCardList;
