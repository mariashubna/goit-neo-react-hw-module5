import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const getActiveClass = ({ isActive }) => {
    // console.log(isActive);
    return isActive ? css.active : "link";
  };
  return (
    <header className={css.header}>
      <nav>
        <NavLink className={getActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={getActiveClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
