import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div>
        <NavLink className="navItem" to="/">
          Home
        </NavLink>
        {"-"}
        <NavLink className="navItem" to="/discover">
          Discover Pokemons
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
