import './App.css';
import React,{Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards";
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
