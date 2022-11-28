import React from 'react';
import './SavedMoviesRemoveBtn.css';

function SavedMoviesRemoveBtn ({onClick}) {
  return (
    <button className="saved-movies__remove-btn" type="button" onClick={onClick}/>
  );
}

export default SavedMoviesRemoveBtn;