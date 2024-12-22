import { useState } from "react";
import { searchTrend } from "../../services/api";
import { useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const trendFilm = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const trendList = await searchTrend();
        setMovies(trendList.results || []);
        return trendList;
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    trendFilm();
  }, []);

  return (
    <section className={css.home}>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <MovieList movies={[...movies.map((movie) => movie)]} />
    </section>
  );
};

export default HomePage;
