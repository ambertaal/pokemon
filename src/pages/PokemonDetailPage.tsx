import { useParams } from "react-router-dom";

const PokemonDetailPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>More info about the pokemon '{params.name}'</h2>
      <p>blablabla</p>
    </div>
  );
};

export default PokemonDetailPage;
