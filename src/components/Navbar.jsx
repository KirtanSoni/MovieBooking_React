import react from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"; 

function Navbar(){
    return <nav className="navbar bg-primary container">
        <h4><Link className="link" to="/">Home</Link></h4>
        <h4><Link className="link" to="/src/components/Movies/Movies.js">Movies</Link></h4>
        <h4><Link className="link" to="/src/components/Plays">Plays</Link></h4>
        <h4><Link className="link" to="/src/components/ContactUs">Contact Us</Link></h4>
    </nav>
}

export default Navbar;