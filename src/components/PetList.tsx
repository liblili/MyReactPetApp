import type { Pet } from "../types/Pet";
import PetCard from "./PetСard";
import "./PetList.css";

type PetListProps = {
  pets: Pet[];
};

function PetList({ pets }: PetListProps) {
  return (
    <div className="pets-list">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}

export default PetList