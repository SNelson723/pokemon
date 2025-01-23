import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { formatName } from "../../helpers";

interface PokeCardProps {
  name: string;
  url: string;
  id: number;
}

const PokeCard = ({ name, url, id }: PokeCardProps) => {
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
