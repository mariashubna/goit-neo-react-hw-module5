import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchFilm } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchedQuery, setSearchedQuery] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);
  useEffect(() => {
    const handleResult = async () => {
      if (searchedQuery.length >= 2) {
        try {
          // setIsLoading(true);
          // setError(false);
          const { results } = await searchFilm(searchedQuery);
          if (results) {
            setSearchedMovie((prevMovies) => [
              ...prevMovies,
              ...results.map((result) => result.title),
            ]);
          }

          console.log(results);
        } catch {
          // setError(true);
        } finally {
          // setIsLoading(false);
          console.log("resres", searchedMovie);
        }
      }
    };
    if (searchedQuery) handleResult();
  }, [searchedQuery]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchedMovie("");
    const form = e.target;
    let searchQuery = form.elements.search.value.trim().toLowerCase();
    setSearchedQuery(searchQuery);
    form.reset();
  };
  return (
    <>
      <SearchForm onSubmit={onSubmit} onChange={handleChange} />
      {searchedMovie.length > 0 && <MovieList movies={searchedMovie} />}
    </>
  );
};

export default MoviesPage;
