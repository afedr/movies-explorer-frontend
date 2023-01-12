import React from "react";
import "./SavedMoviesBtn.css";

function SavedMoviesBtn({ isSaved, onClick }) {



  return (
    <button
      className={
        !isSaved
          ? "saved-movie__btn"
          : "saved-movie__btn saved-movie__btn-saved"
      }
      type="button"
      onClick={onClick}
    />
  );
}

export default SavedMoviesBtn;
