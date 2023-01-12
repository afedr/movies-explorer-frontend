import './MoreMoviesBtn.css';

function MoreMoviesBtn({handleMoviesBtn}) {
  return (
    <div className="more-movies">
      <button className="more-movies__more-btn" type="button" onClick={handleMoviesBtn}>Ещё</button>
    </div>
  );
}

export default MoreMoviesBtn;