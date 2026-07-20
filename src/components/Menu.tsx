import { Link } from "react-router-dom";
import { useState } from "react";
import "./Menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="menu">
      <Link to="/">
        <img src="/logo.svg" alt="logo" className="logo" />
      </Link>

      <button className="burger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About us
        </Link>
        <Link to="/listing" onClick={() => setIsOpen(false)}>
          Listings
        </Link>
        <Link to="/signup" onClick={() => setIsOpen(false)}>
          Create Listing
        </Link>
        <Link to="/signup" onClick={() => setIsOpen(false)}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
