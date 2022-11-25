import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({renderSavedCurrentMovies}) {
    return (
      <section className='movies'>
        <SearchForm />
        <MoviesCardList renderCards={true} renderCurrentMovies={renderSavedCurrentMovies}  />
      </section>
    );
  }

export default SavedMovies;