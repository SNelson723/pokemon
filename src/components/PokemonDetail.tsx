import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { formatName } from "../helpers";
import { PokeDetailTypes } from "../types";

interface bgKeys {
  grass: {
    bg: string;
    color: string;
  };
}
const bg: bgKeys = {
  grass: {
    bg: "bg-emerald-400",
    color: "text-black",
  },
};

const PokemonDetail = <T,>() => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] =
    useState<PokeDetailTypes<T> | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  // const [type, setType] = useState<string>("");

  const containerRef = useRef(null);

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
    if (pokemonDetails) {
      // setType(pokemonDetails.types[0].type.name);
      setShowDetails(true);
    }
  }, [pokemonDetails]);

  return (
    <div>
      {showDetails && pokemonDetails ? (
        <div className="w-full h-full">
          <div className="text-center font-bold text-xl">
            {formatName(name as string)}
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col mb-5">
              <img
                src={pokemonDetails.sprites.front_default}
                alt={name}
                width="200"
                height="200"
              />
              <button className="border rounded p-2 bg-green-800 hover:bg-green-400 hover:text-black animate-all duration-500">
                Add to your team
              </button>
            </div>
          </div>

          {/* container */}
          <div className="text-center text-lg pb-2">Pokedex Entry</div>
          <div
            ref={containerRef}
            className={`w-full h-full border rounded-lg shadow-lg bg-slate-300 text-black flex py-5`}
          >
            <div className="text-center px-5 mx-5">
              <p>Info/Stats</p>
              <div>
                <table>
                  <thead>
                    <tr className="border border-black">
                      <th className="w-32">Name</th>
                      <th className="w-32">Stat</th>
                    </tr>
                  </thead>
                  <tbody className="rounded-b-xl">
                    {pokemonDetails.stats.map((stat, i) => (
                      <tr key={`tr-stat-${i}`} className={`border border-black py-2`}>
                        <td>{formatName(stat.stat.name)}</td>
                        <td>{stat.base_stat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mx-5 px-5">
              <p>Moves</p>
              <select>
                {/* <option></option> */}
                {pokemonDetails.moves.map((move, i) => (
                  <option key={`move-${i}`} className="even:bg-slate-300">
                    {move.move.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-center px-5 mx-5">Versions</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PokemonDetail;
