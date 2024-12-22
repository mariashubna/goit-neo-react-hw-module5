import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { creditsFilm } from "../../services/api";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const [film, setFilm] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const searchCast = async () => {
      try {
        const res = await creditsFilm(movieId);
        setFilm(res.cast);
      } catch {}
    };
    searchCast();
  }, []);
  return (
    <>
      {film ? (
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
      ) : (
        <p>We have no information about the actors.</p>
      )}
    </>
  );
};

export default MovieCast;
