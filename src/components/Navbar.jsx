import react from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"; 

function Navbar(){
    return<>
    <body>
    <nav>
      <label class="logo">CINEMA</label>
      <ul>
        <li><Link className="link" to="/src/components/Forms/login.jsx">Login</Link></li>
        <li><Link className="link" to="/src/components/Movies/Movies.js">Movies</Link></li>
        <li><Link className="link" to="/src/components/Forms/AddMovie.jsx">Add Movie</Link></li>
        <li><Link className="link" to="/src/components/ContactUs">Contact Us</Link></li>
        <li><Link className="link" to="/AboutUs">About Us</Link></li>
      </ul>
    </nav>
  </body>
</>
}

export default Navbar;