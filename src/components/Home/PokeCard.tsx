import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";

interface PokeCardProps {
  name: string;
  url: string;
  formatName: (name: string) => string;
  id: number;
}

const PokeCard = ({ name, url, formatName, id }: PokeCardProps) => {
  // const [pokeInfo, setPokeInfo] = useState<T[]>([]);
  const [img, setImg] = useState<string>('');
  const cardRef = useRef(null);

  useEffect(() => {
    setImg(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    );
  }, []);

  return (
    <NavLink to={`card/${name}`}>
      <div ref={cardRef} id={url} className="bg-slate-200 rounded-lg text-black pb-3">
        <div>
          <img src={img} alt={name} />
        </div>
        <div>{formatName(name)}</div>
      </div>
    </NavLink>
  );
};

export default PokeCard;
