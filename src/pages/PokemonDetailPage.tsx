import { useParams } from "react-router-dom";

type Params = {
  name: string;
};

const PokemonDetailPage = () => {
  const params = useParams<Params>();

  return (
    <div>
      <h2>More info about the pokemon '{params.name}'</h2>
      <p>blablabla</p>
    </div>
  );
};

export default PokemonDetailPage;
