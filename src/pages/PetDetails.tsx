import { useParams } from "react-router-dom";
import { pets } from "../data/pets";
import "./PetDetails.css";

function PetDetails() {
  
  const { id } = useParams();

  const pet = pets.find((p) => p.id === Number(id));

  if (!pet) {
    return <h2>Not found</h2>;
  }

  return (
    <div>
      <section className="formen"></section>
      <div className="pet-details">
        <div className="img-details">
          <img src={pet.image} alt={pet.name} />
        </div>
        <div className="description">
          <h1>{pet.name}</h1>
          <p>
            <span className="description"> Breed : </span> &nbsp; {pet.breed}
          </p>
          <p>
            {" "}
            <span className="description">Sex:</span> &nbsp; {pet.sex}
          </p>
          <p>
            {" "}
            <span className="description">Date lost:</span> &nbsp; {pet.date}
          </p>
          <p>{pet.description}</p>
        </div>
      </div>
    </div>
  );
}


export default PetDetails;
