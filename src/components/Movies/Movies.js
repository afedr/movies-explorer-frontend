import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import MoviesCard from '../MoviesCard/MoviesCard';

function Movies({isLoading}) {
    return (
      <section className='movies'>
        <SearchForm />
        {isLoading && <Preloader/>}
        {!isLoading && <MoviesCardList/>}
        {/* <MoviesCard /> */}
      </section>
    );
  }

export default Movies;