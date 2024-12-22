import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reviewsFilm } from "../../services/api";

const MovieReviews = () => {
  const [film, setFilm] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const searchReviews = async () => {
      try {
        const res = await reviewsFilm(movieId);
        setFilm(res.results);
      } catch {}
    };
    searchReviews();
  }, []);
  return (
    <>
      {film && (
        <div>
          <ul>
            {film.map((review, index) => {
              return (
                <li key={index}>
                  <h3>Author: {review.author}</h3>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
export default MovieReviews;
