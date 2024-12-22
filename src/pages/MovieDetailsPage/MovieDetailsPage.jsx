import { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { singleFilm } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams;
  const [film, setFilm] = null;
  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await singleFilm();
        setFilm(res);
      } catch {}
    };
    movieId && fetching();
  }, [movieId]);
  return (
    <>
      {film && (
        <>
          <Link to="cast"> Cast </Link>
          <Link to="reviews"> Reviews </Link>
        </>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
