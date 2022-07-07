import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PokemonDiscoveryPage from "../pages/PokemonDiscoveryPage";

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="discover" element={<PokemonDiscoveryPage />} />
      </Routes>
    </div>
  );
};

export default NavBar;
