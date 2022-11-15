import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {



    return (
      <main>
        <SearchForm />
        <MoviesCardList renderCards={true}/>
      </main>
    );
  }

export default SavedMovies;