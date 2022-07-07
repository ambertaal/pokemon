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
          Pokemon Discover page
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
