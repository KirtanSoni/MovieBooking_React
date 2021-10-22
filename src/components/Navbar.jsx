import react from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"; 

function Navbar(){
    return <nav className="navbar bg-primary">
        <h4><Link className="link" to="/src/components/Forms/login.jsx">Login</Link></h4>
        <h4><Link className="link" to="/src/components/Movies/Movies.js">Movies</Link></h4>
        <h4><Link className="link" to="/src/components/Forms/AddMovie.jsx">Add Movie</Link></h4>
        <h4><Link className="link" to="/src/components/ContactUs">Contact Us</Link></h4>
        <h4><Link className="link" to="/AboutUs">About Us</Link></h4>
    </nav>
}

export default Navbar;