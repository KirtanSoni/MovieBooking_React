import './App.css';
import React,{Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Movies from './components/Movies';
import { Fragment } from 'react/cjs/react.production.min';
import Demo from './components/demo';
import Login from './components/Forms/login';

class App extends Component {
  render(){
    return (
      <Login />
      // <Fragment>
      // <Navbar/>
      // <Demo />
      // <Movies/>
      //   <BrowserRouter>
      //       <switch>
      //         <Route exact path="/Movies" component={Movies} />
      //       </switch>
      //   </BrowserRouter>
      // </Fragment>
    );
  }
}

export default App;
