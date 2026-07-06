import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <Link to="/listing">Look Listing</Link>
      <Link to="/about">Create Listing</Link>
      <Link to="/about">© 2026 All rights reserved.</Link>
    </footer>
  );
}

export default Footer;
