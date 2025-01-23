import axios from 'axios';
import { useRef } from 'react';
import { NavLink } from 'react-router';

interface PokeCardProps {
  name: string;
  url: string;
  formatName: (name: string) => string;
}

const PokeCard = ({ name, url, formatName }: PokeCardProps) => {
  const cardRef = useRef(null);

  return (
    <NavLink to={`card/${name}`}>
      <div ref={cardRef} id={url}>
        {formatName(name)}
      </div>
    </NavLink>
  );
};

export default PokeCard