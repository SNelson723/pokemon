import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";

interface PokeObj {
  name: string;
  url: string;
}

const Home = () => {
  const [pokemonData, setPokemonData] = useState<PokeObj[]>([]);
  const [showCards, setShowCards] = useState<boolean>(false);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemonData(data.results);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    getPokemon();
  }, []);

  useEffect(() => {
    if (pokemonData) {
      console.log(pokemonData);
      setShowCards(true);
    }
  }, [pokemonData]);

  return (
    <div>
      {pokemonData.length && showCards ? (
        <div
          className="grid grid-cols-5 auto-rows-[minmax(170px,auto)] gap-5"
        >
          {pokemonData.map((pokemon, i) => (
            <div key={`pokemon-${i + 1}`} className="m-2 text-center">
              <PokeCard
                id={i + 1}
                name={pokemon.name}
                url={pokemon.url}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Home;
