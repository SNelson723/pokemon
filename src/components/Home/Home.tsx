import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";

interface PokeObj {
  name: string;
  url: string;
}

const Home = () => {
  const [pokemonData, setPokemonData] = useState<PokeObj[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemonData(data.results);
        console.log(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    getPokemon();
  }, []);

  const formatName = (name: string): string => {
    return name.substring(0, 1).toUpperCase() + name.substring(1);
  };

  useEffect(() => {
    if (pokemonData) {
      console.log(pokemonData);
    }
  }, [pokemonData]);

  return (
    <div>
      {pokemonData.length ? (
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "auto auto auto auto",
          }}
        >
          {pokemonData.map((pokemon, i) => (
            <PokeCard
              key={`pokemon-${i}`}
              name={pokemon.name}
              url={pokemon.url}
              formatName={formatName}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Home;
