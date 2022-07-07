import { NavLink } from "react-router-dom";

type Props = {
  pokemonName: string;
};

const PokemonListItem = (props: Props) => {
  return (
    <div>
      <NavLink to={`/details/${props.pokemonName}`}>
        {props.pokemonName}
      </NavLink>
    </div>
  );
};

export default PokemonListItem;
