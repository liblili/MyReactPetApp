import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <nav className="menu">
<Link to="/"><img src="/logo.svg" alt="logo" className="logo" /></Link>


      <div className="nav-links">
 
        <Link to="/">Listings</Link>
        <Link to="/about">Create Listing</Link>
        <Link to="/contacts">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Menu;
