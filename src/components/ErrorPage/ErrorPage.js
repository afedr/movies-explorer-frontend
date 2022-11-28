import React from 'react';
import './ErrorPage.css';

function NotFound() {

  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__text">Страница не найдена</p>
      <button className="error-page__button" type="button">Назад</button>
    </div>
  );
}

export default NotFound;

