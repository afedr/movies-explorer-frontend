import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({isLoading}) {
    return (
      <section className='movies'>
        <SearchForm />
        {isLoading && <Preloader/>}
        {!isLoading && <MoviesCardList/>}
      </section>
    );
  }

export default Movies;