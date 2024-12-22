import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { singleFilm } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  // console.log(121212, film);
  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await singleFilm(movieId);
        setFilm(res);
      } catch {}
    };
    movieId && fetching();
  }, [movieId]);

  return (
    <>
      {film && (
        <>
          <Link to="/">Go back</Link>
          <div>
            <img
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                  : "https://img.freepik.com/free-vector/cat-lover-patterned-background-template_53876-100661.jpg"
              }
              alt={film.title}
            />
            <div>
              <h2>{film.title}</h2>
              <p>Vote average: {film.vote_average}</p>
              <h3>Overview</h3>
              <p>{film.overview}</p>
              <h3>Genres</h3>
              <p>{film.genres.map((genre) => genre.name).join(" ")}</p>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast"> Cast </Link>
              </li>
              <li>
                <Link to="reviews"> Reviews </Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
