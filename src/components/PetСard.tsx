import { Link } from "react-router-dom";
import type { Pet } from "../types/Pet";
import "./PetCard.css";

type PetCardProps = {
  pet: Pet;
};

function PetCard({ pet }: PetCardProps) {
  return (
    <Link to={`/pet/${pet.id}`} className="pet-link">
      <div className="petcard">
        <img src={pet.image} alt={pet.name} />
        <h3>{pet.name}</h3>
        <p>{pet.description}</p>
      </div>
    </Link>
  );
}

export default PetCard;
