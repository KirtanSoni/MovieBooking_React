import './App.css';
import React,{Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from 'react-router';
import { BrowserRouter,Switch,withRouter,Link } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import { Fragment } from 'react/cjs/react.production.min';
import Demo from './components/demo';
import Login from './components/Forms/login';
import Grid from './components/Grid/Grid'
import MovieDisplay from './components/Movie Display/MovieDisplay';

function App() {
    return (
      <>
        <BrowserRouter>
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
        </BrowserRouter>
      </>
    );
}

export default App;
