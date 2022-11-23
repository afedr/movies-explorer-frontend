import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from "react";
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from "../../utils/MoviesApi";
import SearchData from '../SearchData/SearchData';

function Movies({isLoading}) {

  const [allMovies, setAllMovies] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  const [renderCurrentMovies, setRenderCurrentMovies] = useState([]);
  const [searchResult, setSearchResult] = useState("");


  useEffect (() => {
    moviesApi.getMovies()
    .then ((movies) => {
      setAllMovies(movies);
    })
    .catch ((data) => {
      setSearchResult("Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен.Подождите немного и попробуйте ещё раз")
    })  
  })

  function handleSearch (inputData) {
    // setSearchQuery(inputData)
    const currentMovies = allMovies.filter(movie => movie.nameRU.includes(inputData) || movie.nameEN.includes(inputData))
    if (inputData.length !== 0 && currentMovies.length === 0)
    {
      setSearchResult("Ничего не найдено")
    } else {
      setSearchResult("");
    }
    setRenderCurrentMovies(currentMovies);
  }

  return (
    <section className='movies' >
      <SearchForm handleSearch={handleSearch} />
      {isLoading && <Preloader/>}
      {!isLoading && <MoviesCardList renderCurrentMovies={renderCurrentMovies} />}
      {searchResult.length !== 0 && <SearchData text={searchResult}/>}
    </section>
  );
}

export default Movies;