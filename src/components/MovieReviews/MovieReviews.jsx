import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reviewsFilm } from "../../services/api";
import css from "./MovieReviews.module.css";

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
      {film.length > 0 ? (
        <div className={css.review}>
          <ul>
            {film.map((review, index) => {
              return (
                <li key={index}>
                  <h3 className={css.author}>Author: {review.author}</h3>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>No reviews available for this movie at the moment.</p>
      )}
    </>
  );
};
export default MovieReviews;
