type Props = {
  pokemonName: string;
};

const PokemonListItem = (props: Props) => {
  return <li>{props.pokemonName}</li>;
};

export default PokemonListItem;
