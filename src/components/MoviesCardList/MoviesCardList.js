import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({renderCards}) {
  
    const allMovies = [
      {
          title:'«Роллинг Стоунз» в изгнании',
          duration:'1ч 44м',
          link:'https://www.kino-teatr.ru/movie/kadr/92924/205862.jpg',
          trailer:'https://www.kino-teatr.ru/movie/kadr/92924/205862.jpg',
          saved:true,
      },
      {
          title:'«Роллинг Стоунз» в изгнании',
          duration:'1ч 44м',
          link:'https://www.kino-teatr.ru/movie/kadr/92924/205862.jpg',
          trailer:'https://www.kino-teatr.ru/movie/kadr/92924/205862.jpg',
          saved:false,
      },
      {
          title:'«Роллинг Стоунз» в изгнании',
          duration:'1ч 44м',
          link:'https://www.kino-teatr.ru/movie/kadr/92924/205862.jpg',
          trailer:'https://www.kino-teatr.ru/movie/kadr/92924/205862.jpg',
          saved:true,
      },
      {
          title:'«Роллинг Стоунз» в изгнании',
          duration:'1ч 44м',
          link:'https://www.kino-teatr.ru/movie/kadr/92924/205862.jpg',
          trailer:'https://www.kino-teatr.ru/movie/kadr/92924/205862.jpg',
      },
      {
          title:'«Роллинг Стоунз» в изгнании',
          duration:'1ч 44м',
          link:'https://www.kino-teatr.ru/movie/kadr/92924/205862.jpg',
          trailer:'https://www.kino-teatr.ru/movie/kadr/92924/205862.jpg',
      },
      {
          title:'«Роллинг Стоунз» в изгнании',
          duration:'1ч 44м',
          link:'https://www.kino-teatr.ru/movie/kadr/92924/205862.jpg',
          trailer:'https://www.kino-teatr.ru/movie/kadr/92924/205862.jpg',
      }
    ]
  
    const moviesToRender = renderCards ? allMovies.filter(movie => movie.saved) : allMovies;

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {moviesToRender.map((movie) => (
            <li className="movies-card-list__item">
                <MoviesCard 
                duration={movie.duration}
                title={movie.title}
                link={movie.link}
                trailer={movie.trailer}
                saved={movie.saved}
                />
            </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;