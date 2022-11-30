class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  updateUserProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._checkResponse);
  }

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    }).then(this._checkResponse);
  }

  saveToken(token) {
    this._headers.authorization = "Bearer " + token;
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(this._checkResponse)
      .then((data) => {
        if (data.token) {
          this.saveToken(data.token);
          localStorage.setItem("jwt", data.token);
          return data;
        }
      });
  }

  checkToken(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => {
      if (res.ok) {
        this.saveToken(jwt);
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  addBookmark(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: data.country || "unknown",
        director: data.director || "unknown",
        duration: data.duration || "No data",
        year: data.year || "unknown",
        description: data.description || "No description",
        image: "https://api.nomoreparties.co/" + data.image.url,
        trailerLink: data.trailerLink || "No trailer",
        thumbnail: "https://api.nomoreparties.co/" + data.image.url,
        movieId: data.id || "No data",
        nameRU: data.nameRU,
        nameEN: data.nameEN || "No name",
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteBookmark(data) {
    return fetch(`${this._baseUrl}/movies/${data._id}`, {
      method: "DELETE",
      headers: this._headers,
      body: JSON.stringify({
        _id: data._id,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}


export const mainApi = new MainApi({
  baseUrl: "https://api.movies-explorer.anfed.nomoredomains.icu",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default mainApi;
