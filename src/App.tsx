
import Menu from "./components/Menu";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

import Listing from "./pages/Listing";
import PetDetails from "./pages/PetDetails";



function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/pet/:id" element={<PetDetails />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
 
}

export default App;