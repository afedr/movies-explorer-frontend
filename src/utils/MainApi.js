class MainApi {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    // export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

    _checkResponse(res) {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }

    register (email, password, name) {
      console.log(email, password, name);
      return fetch(`${this._baseUrl}/signup`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
        })
      })
      .then(this._checkResponse);
    };

  }

//создаем экземпляр класса
export const mainApi = new MainApi({
    baseUrl: "https://api.movies-explorer.anfed.nomoredomains.icu",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
  });

export default mainApi;