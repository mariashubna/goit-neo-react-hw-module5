import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reviewsFilm } from "../../services/api";
import css from "./MovieReviews.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const [film, setFilm] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchReviews = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const res = await reviewsFilm(movieId);
        setFilm(res.results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    searchReviews();
  }, [movieId]);
  return (
    <>
      {error && <ErrorMessage />}
      {isLoading ? (
        <Loader />
      ) : film.length === 0 ? (
        <p>No reviews available for this movie at the moment.</p>
      ) : (
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
      )}
    </>
  );
};
export default MovieReviews;
