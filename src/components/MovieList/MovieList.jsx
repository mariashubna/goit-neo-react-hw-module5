import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  // console.log("mov", movies);
  if (!movies || movies.length === 0) {
    return <p>Загрузка фильмов...</p>;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
