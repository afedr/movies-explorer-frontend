import React from "react";
import SavedMoviesBtn from "../SavedMoviesBtn/SavedMoviesBtn";
import SavedMoviesRemoveBtn from "../SavedMoviesRemoveBtn/SavedMoviesRemoveBtn";
import "./MoviesCard.css";

function MoviesCard({
  title,
  duration,
  link,
  trailer,
  isSaved,
  isSavedMoviesPage,
}) {
  return (
    <>
      <div className="movie-card">
        <div className="movie-card__header">
          <div className="movie-card__meta-container">
            <h4 className="movie-card__title">{title}</h4>
            <p className="movie-card__duration">{duration}</p>
          </div>
          {isSavedMoviesPage ? (
            <SavedMoviesRemoveBtn />
          ) : (
            <SavedMoviesBtn isSaved={isSaved} />
          )}
        </div>
        <a
          className="movie-card__link"
          href={trailer}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="movie-card__image" alt="Фото фильма" src={link} />
        </a>
      </div>
    </>
  );
}

export default MoviesCard;
