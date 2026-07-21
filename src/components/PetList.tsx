import type { Pet } from "../types/Pet";
import PetCard from "./PetСard";
import "./PetList.css";

type PetListProps = {
  pets: Pet[];
};

function PetList({ pets }: PetListProps) {
  return (
    <div>
      <div>
        <h1>All animals</h1>
      </div>
      <div className="pets-list">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default PetList