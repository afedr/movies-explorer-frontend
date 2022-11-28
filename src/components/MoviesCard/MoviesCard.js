import React from "react";
import mainApi from "../../utils/MainApi";
import SavedMoviesBtn from "../SavedMoviesBtn/SavedMoviesBtn";
import SavedMoviesRemoveBtn from "../SavedMoviesRemoveBtn/SavedMoviesRemoveBtn";
import "./MoviesCard.css";

function MoviesCard({
  movie,
  isSavedMoviesPage,
  addBookmark,
  isSaved,
  deleteBookmark,
}) {
  function onAddClickHandler() {

    if (isSaved(movie)) {
      deleteBookmark(movie);
    } else {
      addBookmark(movie);
    }
  }

  function onDeleteClickHandler() {
    deleteBookmark(movie);
  }

  const link = movie.image.url
    ? `https://api.nomoreparties.co/` + movie.image.url
    : movie.image;

  return (
    <>
      <div className="movie-card">
        <div className="movie-card__header">
          <div className="movie-card__meta-container">
            <h4 className="movie-card__title">{movie.nameRU}</h4>
            <p className="movie-card__duration">{movie.duration}</p>
          </div>
          {isSavedMoviesPage ? (
            <SavedMoviesRemoveBtn onClick={onDeleteClickHandler} />
          ) : (
            <SavedMoviesBtn
              isSaved={isSaved(movie)}
              onClick={onAddClickHandler}
            />
          )}
        </div>
        <a
          className="movie-card__link"
          href={movie.trailerLink}
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
