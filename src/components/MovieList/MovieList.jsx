const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>Загрузка фильмов...</p>; // Или любой другой индикатор
  }
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  );
};

export default MovieList;
