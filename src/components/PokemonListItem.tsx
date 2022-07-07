import { NavLink } from "react-router-dom";

type Props = {
  pokemonName: string;
};

const PokemonListItem = (props: Props) => {
  return (
    <li>
      <NavLink to={`/details/${props.pokemonName}`}>
        {props.pokemonName}
      </NavLink>
    </li>
  );
};

export default PokemonListItem;
