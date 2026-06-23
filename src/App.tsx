
import Menu from "./components/Menu";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

import PetCard from "./components/PetСard";
import { pets } from "./data/pets";
import PetList from "./components/PetList";
import PetDetails from "./pages/PetDetails";



function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<PetList />} />
        <Route path="/pet/:id" element={<PetDetails />} />
      </Routes>
      <div className="pets-list">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>

      <Footer />
    </BrowserRouter>
  );
 
}

export default App;