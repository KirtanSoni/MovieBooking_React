import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Cards from './cards/Card';



class Movies extends Component{

    render(){
    return (
    
           <div className="container-fluid d-flex justify-content-center">
               <div className="row">
                   <div className="col-md-4">
                       <Cards title="movie 1" content="Some quick example text to build on the card title and make up the bulk of the card's content"/>
                   </div>
                   <div className="col-md-4">
                   <Cards title="movie 2" content="Some quick example text to build on the card title and make up the bulk of the card's content"/>
                   </div>
                   <div className="col-md-4">
                   <Cards title="movie 3" content="Some quick example text to build on the card title and make up the bulk of the card's content"/>
                   </div>
               </div>
           </div>
      
    );
}
}
export default Movies;