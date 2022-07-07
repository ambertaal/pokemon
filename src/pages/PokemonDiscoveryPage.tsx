import axios from "axios";
import { useEffect, useState } from "react";
import PokemonListItem from "../components/PokemonListItem";

const PokemonDiscoveryPage = () => {
  // TypeScript: <any[] | null> is called 'a union type of uni'
  const [pokemons, setPokemons] = useState<any[] | null>(null); // Either an array or null

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      setPokemons(response.data.results);
    };
    getPokemons();
  }, []);
  return (
    <div>
      <ol>
        {pokemons ? (
          pokemons.map((pokemon) => {
            return <PokemonListItem pokemonName={pokemon.name} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </ol>
    </div>
  );
};

export default PokemonDiscoveryPage;
