import PetList from "../components/PetList";
import { pets } from "../data/pets";
function Listing() {
  return (
    <div>
      <section className="formen"></section>
      
      <PetList pets={pets} />;
    </div>
  );
}


export default Listing