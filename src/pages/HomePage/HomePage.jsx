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
    <>
      <MovieList movies={[...movies.map((movie) => movie)]} />
    </>
  );
};

export default HomePage;
