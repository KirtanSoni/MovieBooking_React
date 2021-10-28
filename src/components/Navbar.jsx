import react from "react";
import {Link,useHistory} from "react-router-dom"
import "./Navbar.css"; 


function Navbar(){
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("user");
    console.log("user log out");
    history.push("/src/components/Forms/login.jsx");
  };
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
        <li><button className="link" id="logout" onClick={logout}>LOGOUT</button></li>
      </ul>
    </nav>
  </body>
</>
}

export default Navbar;