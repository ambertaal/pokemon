import axios from "axios";
import { useEffect, useState } from "react";
import PokemonListItem from "../components/PokemonListItem";

const PokemonDiscoveryPage = () => {
  // TypeScript: <any[] | null> is called 'a union type of uni'
  const [pokemons, setPokemons] = useState<any[] | null>(null); // Either an array or null
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      setPokemons(response.data.results);
    };
    getPokemons();
  }, []);

  const updateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h1>A short list of all the Pokemons</h1>
      <input type="text" value={filter} onChange={updateFilter} />
      {pokemons ? (
        pokemons
          .filter((pokemon) => pokemon.name.startsWith(filter))
          .map((pokemon, i) => (
            <PokemonListItem key={i} pokemonName={pokemon.name} />
          ))
      ) : (
        <p>Loading ..</p>
      )}
      {/* <div>
        {pokemons ? (
          pokemons.map((pokemon) => {
            return (
              <div>
                <PokemonListItem pokemonName={pokemon.name} />
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div> */}
    </div>
  );
};

export default PokemonDiscoveryPage;
