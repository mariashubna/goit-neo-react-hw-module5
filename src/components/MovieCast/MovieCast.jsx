import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { creditsFilm } from "../../services/api";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MovieCast = () => {
  const [film, setFilm] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchCast = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const res = await creditsFilm(movieId);
        setFilm(res.cast);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    searchCast();
  }, []);
  return (
    <>
      {error && <ErrorMessage />}
      {isLoading ? (
        <Loader />
      ) : film.length === 0 ? (
        <p>We have no information about the casts.</p>
      ) : (
        <div className={css.wrap}>
          <ul className={css.list}>
            {film.map((cast, index) => {
              return (
                <li key={index}>
                  <img
                    className={css.img}
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                        : "https://spunky.games/_next/image?url=%2Fimage%2Fsilver.png&w=3840&q=75"
                    }
                    alt={cast.name}
                  />
                  <p>{cast.name}</p>
                  <p>Character: {cast.character}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default MovieCast;
