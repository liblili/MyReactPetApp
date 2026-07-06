import PetList from "../components/PetList";
import { pets } from "../data/pets";
function Listing() {
  return (
    <div>
      <section className="formen"></section>
      <h1>All animals</h1>
      <PetList pets={pets} />;
    </div>
  );
}


export default Listing