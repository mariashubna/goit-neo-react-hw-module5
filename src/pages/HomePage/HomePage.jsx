import { useState } from "react";
import { searchTrend } from "../../services/api";
import { useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const trendFilm = async () => {
      try {
        const trendList = await searchTrend();
        setMovies(trendList.results || []);
        return trendList;
      } catch (err) {
        // console.log(err);
      }
    };

    trendFilm();
  }, []);

  // console.log("ddd", movies);
  return (
    <section className={css.home}>
      <h1>Trending today</h1>
      <MovieList movies={[...movies.map((movie) => movie)]} />
    </section>
  );
};

export default HomePage;
