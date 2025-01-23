import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatName } from "../helpers";
import { PokeDetailTypes } from "../types";

const PokemonDetail = <T,>() => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState<PokeDetailTypes<T> | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );

        setPokemonDetails(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    getDetails();
  }, [name]);

  useEffect(() => {
    console.log(pokemonDetails);
    setShowDetails(true);
  }, [pokemonDetails]);

  return (
    <div>
      {showDetails && pokemonDetails ? (
        <div className="w-full h-full">
          <div className="text-center font-bold text-xl">{formatName(name as string)}</div>
          <div className="flex justify-center">
            <img src={pokemonDetails.sprites.front_default} alt={name} />
          </div>

          {/* container */}
          <div className="w-full h-full border rounded-lg">

          </div>

        </div>
      ) : null}
    </div>
  );
};

export default PokemonDetail;
