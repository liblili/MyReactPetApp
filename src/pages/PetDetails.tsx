import { useParams } from "react-router-dom";
import { pets } from "../data/pets";
import "./PetDetails.css";

function PetDetails() {
  const { id } = useParams();

  const pet = pets.find((p) => p.id === Number(id));

  if (!pet) {
    return <h2>Животное не найдено</h2>;
  }

  return (
    <div className="pet-details">
      <div className="img-details">
        <img src={pet.image} alt={pet.name} />
      </div>
      <div>
        <h1>{pet.name}</h1>
        <p>{pet.description}</p>
      </div>
    </div>
  );
}


export default PetDetails;
