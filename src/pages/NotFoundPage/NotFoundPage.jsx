import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section className={css.not_found}>
      <h2>Oops! Page Not Found</h2>
      <p>
        It looks like the page you're looking for doesn't exist or may have been
        moved.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </section>
  );
};

export default NotFoundPage;
