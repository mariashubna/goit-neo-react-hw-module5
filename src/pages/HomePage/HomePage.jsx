import { useState } from "react";
import { searchTrend } from "../../services/api";
import { useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const trendFilm = async () => {
      try {
        const trendList = await searchTrend();
        setMovies([...trendList.results]);
        return trendList;
      } catch (err) {
        console.log(err);
      } finally {
        console.log(movies);
      }
    };

    trendFilm();
  }, []);
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
