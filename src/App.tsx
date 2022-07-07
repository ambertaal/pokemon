import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import PokemonDiscoveryPage from "./pages/PokemonDiscoveryPage";

function App() {
  return (
    <div className="App">
      <h1>◓ Pokemon Discovery ◓</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="discover" element={<PokemonDiscoveryPage />} />
        <Route path="/details/:name" element={<PokemonDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
