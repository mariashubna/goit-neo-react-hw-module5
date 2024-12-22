import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchFilm } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleResult = async () => {
      if (query && query.length >= 2) {
        try {
          setIsLoading(true);
          setError(false);
          const { results } = await searchFilm(query);
          if (results) {
            setSearchedMovie(results || []);
          }
        } catch {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      }
    };
    handleResult();
  }, [query]);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let searchQuery = form.elements.search.value.trim().toLowerCase();

    if (searchQuery === query) {
      form.elements.search.value = "";
      return;
    }

    setSearchedMovie([]);
    setSearchParams({ query: searchQuery });
    form.reset();
  };

  return (
    <section className={css.movie}>
      <SearchForm onSubmit={onSubmit} />
      {error && <ErrorMessage />}
      {isLoading ? (
        <Loader />
      ) : query && searchedMovie.length === 0 ? (
        <p>Sorry, but no movies were found for your query.</p>
      ) : (
        <MovieList movies={searchedMovie} />
      )}
    </section>
  );
};

export default MoviesPage;
