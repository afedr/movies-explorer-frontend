import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
    return (
      <section className='movies'>
        <SearchForm />
        <MoviesCardList renderCards={true}/>
      </section>
    );
  }

export default SavedMovies;