import './App.css';
import React,{Component} from 'react';
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from 'react-router';
import { BrowserRouter,Switch,withRouter,Link } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import Login from './components/Forms/login';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Plays from './components/Plays';
import AddMovie from './components/Forms/AddMovie';
import TwoComponent from './components/newcomponent/TwoComponent';

//to change navbar routes update "path" of the Route tag below with the absolute path of component you want to render
//and paste the same path in navbar.jsx in the link tab
function App() {
    return (
      <>
        <BrowserRouter>
          <Navbar /> 
            <Route path="/src/components/Forms/login.jsx" exact>
              <Login />
            </Route>
            <Route path="/AboutUs" exact>
              <Home />
            </Route>
            <Route path="/src/components/Movies/Movies.js">
              <Movies />
            </Route>
            
            <Route path="/src/components/Plays">
              <Plays />
            </Route>

            <Route path="/src/components/Forms/AddMovie.jsx">
              <AddMovie />
            </Route>
            
            <Route path="/src/components/ContactUs">
              <ContactUs />
            </Route>
            <Route path="/Book/:id">
              <TwoComponent/>
              {/* <Link to={'/Book/:id'}><button className="btn btn-primary">Proceed</button></Link> */}
            </Route>
        </BrowserRouter> 

        {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props=>
          <>
            <Navbar/>
            <Movies/>
          </>
          }/>
          <Route path="/Movies" component={Movies}/>
          <Route path="/Book/:id" render={props=>
          <>
          <div class="container-fluid">
          <div class="row">
            <div class="col-lg-5">
            <MovieDisplay/>
            </div>
            <div class="col-lg-6">
            <Grid/>
            </div>
          </div>
          </div>
          </>
          }/>
        </Switch>
        </BrowserRouter> */}
      </>
    );
}

export default App;
