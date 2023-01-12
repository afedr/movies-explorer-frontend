import React from 'react';
import './ErrorPage.css';
import { useHistory } from 'react-router-dom';

function NotFound() {

  const history = useHistory();

  function goToPreviousPath() {
    history.goBack();
  }

  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__text">Страница не найдена</p>
      <button className="error-page__button" type="button" to='/' onClick={goToPreviousPath}>Назад</button>
    </div>
  );
}

export default NotFound;

