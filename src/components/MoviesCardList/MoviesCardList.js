import MoviesCard from '../MoviesCard/MoviesCard';
import MoreMoviesBtn from '../MoreMoviesBtn/MoreMoviesBtn';
import './MoviesCardList.css';
import { useState } from 'react';

function MoviesCardList({renderCards}) {

  const desktopWidth = 1280; 
  const tabletWidth = 768; 

  function calcMaxMovies() {
    return window.innerWidth >= desktopWidth ? 12 : window.innerWidth >= tabletWidth ? 8 : 5
  }
  const [countMaxMovies, setCountMaxMovies] = useState(calcMaxMovies());

  window.addEventListener('resize', function(event) {
    setCountMaxMovies(calcMaxMovies())
  }, true);
  
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
    ]
  
    const moviesToRender = renderCards ? allMovies.filter(movie => movie.saved) : allMovies;

    const renderCurrentMovies = moviesToRender.length >= countMaxMovies ? moviesToRender.slice(0,countMaxMovies) : moviesToRender;


  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {renderCurrentMovies.map((movie) => (
            <li className="movies-card-list__item">
                <MoviesCard 
                duration={movie.duration}
                title={movie.title}
                link={movie.link}
                trailer={movie.trailer}
                isSaved={movie.saved}
                isSavedMoviesPage={renderCards}
                />
            </li>
        ))}
      </ul>
     { renderCurrentMovies.length < moviesToRender.length && <MoreMoviesBtn /> }
    </section>
  );
}

export default MoviesCardList;