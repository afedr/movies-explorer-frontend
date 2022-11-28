import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from "react";
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from "../../utils/MoviesApi";
import SearchData from '../SearchData/SearchData';

function Movies({addBookmark, isSaved, deleteBookmark}) {

  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery'));
  const [allMovies, setAllMovies] = useState([]);
  const [renderCurrentMovies, setRenderCurrentMovies] = useState(JSON.parse(localStorage.getItem('renderCurrentMovies')) || []);
  const [searchResult, setSearchResult] = useState("");
  const [preloading, setPreloading] = useState(false);


  useEffect (() => {
    if (allMovies.length === 0) {
      // setPreloading(true);
      moviesApi.getMovies()
        .then ((movies) => {
          setAllMovies(movies);
          setPreloading(false);
        })
        .catch ((data) => {
          // setPreloading(false);
          setSearchResult("Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен.Подождите немного и попробуйте ещё раз")
        })
    }  
  })

  function handleSearch (inputData) {
    setPreloading(true);

    setTimeout(() => {
      const currentMovies = allMovies.filter(movie => movie.nameRU.includes(inputData) || movie.nameEN.includes(inputData))
      if (inputData.length !== 0 && currentMovies.length === 0)
      {
        setSearchResult("Ничего не найдено")
      } else {
        setSearchResult("");
      }
      setRenderCurrentMovies(currentMovies);
      setSearchQuery(inputData);
      localStorage.setItem('searchQuery', inputData)
      localStorage.setItem('renderCurrentMovies', JSON.stringify(currentMovies))
      setPreloading(false);
    }, 600);
  }

  return (
    <section className='movies' >
      <SearchForm handleSearch={handleSearch} searchQuery={searchQuery}/>
      {preloading && <Preloader />}
      {!preloading && <MoviesCardList renderCurrentMovies={renderCurrentMovies} addBookmark={addBookmark} isSaved={isSaved} deleteBookmark={deleteBookmark}/>}
      {searchResult.length !== 0 && <SearchData text={searchResult} />}
    </section>
  );
}

export default Movies;