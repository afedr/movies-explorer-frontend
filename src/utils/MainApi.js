class MainApi {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
}
    
//создаем экземпляр класса
    export const mainApi = new mainApi({
        baseUrl: "api.movies-explorer.anfed.nomoredomains.icu",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
      });

    // export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';


export default mainApi;