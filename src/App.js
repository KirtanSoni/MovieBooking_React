import './App.css';
import React,{Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar /> 
        
      </div>
    );
  }
}

export default App;
