import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { creditsFilm } from "../../services/api";

const MovieCast = () => {
  const [film, setFilm] = useState([]);
  const { movieId } = useParams();
  // console.log(film);
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
      {film && (
        <div>
          <ul>
            {film.map((cast, index) => {
              return (
                <li key={index}>
                  <img
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                        : "https://img.freepik.com/free-vector/cat-lover-patterned-background-template_53876-100661.jpg"
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
