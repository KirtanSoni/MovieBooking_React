import './App.css';
import React,{Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar /> 
        <Movies />
      </div>
    );
  }
}

export default App;
