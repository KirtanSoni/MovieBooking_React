import './App.css';
import React,{Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Movies from './components/Movies';
import { Fragment } from 'react/cjs/react.production.min';


class App extends Component {
  render(){
    return (
      <Fragment>
      <Navbar/>
      <Movies/>
        <BrowserRouter>
            <switch>
              <Route exact path="/navbar" component={Navbar} />
              <Route exact path="/Movies" component={Movies} />
            </switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
