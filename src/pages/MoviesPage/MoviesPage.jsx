import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchFilm } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const handleResult = async () => {
      if (query && query.length >= 2) {
        try {
          // setIsLoading(true);
          // setError(false);
          const { results } = await searchFilm(query);
          if (results) {
            setSearchedMovie(results || []);
          }

          console.log(results);
        } catch {
          // setError(true);
        } finally {
          // setIsLoading(false);
        }
      }
    };
    handleResult();
  }, [query]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchedMovie([]);
    const form = e.target;
    let searchQuery = form.elements.search.value.trim().toLowerCase();
    setSearchParams({ query: searchQuery });
    form.reset();
  };

  return (
    <section className={css.movie}>
      <SearchForm onSubmit={onSubmit} />
      {query && searchedMovie.length === 0 ? (
        <p>Sorry, but no movies were found for your query.</p>
      ) : (
        <MovieList movies={searchedMovie} />
      )}
    </section>
  );
};

export default MoviesPage;
