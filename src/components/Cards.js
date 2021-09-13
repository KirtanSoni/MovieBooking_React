import React from 'react';
import './Card.css';
function Cards(){
    return (
    
      <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card">
    <div class="card-header">
      <h2>Movie-name</h2>
      </div>
      <img src="https://reactjsexample.com/content/images/2020/01/React-MovieCards-1.jpg" class="card-thumbnail" alt=""/>
    <div class="card-body">
      <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
      <div class="d-grid gap-2 col-4 mx-auto">
      <button type="button" className="btn btn-primary">Book</button>
      </div>
      </div>
  </div>
  </div>

  <div class="col">
        <div class="card">
    <div class="card-header">
      <h2>Movie-name</h2>
      </div>
      
      <img src="https://reactjsexample.com/content/images/2020/01/React-MovieCards-1.jpg" class="img-thumbnail" alt=""/>
    <div class="card-body">
      <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div class="d-grid gap-2 col-4 mx-auto">
      <button type="button" className="btn btn-primary">Book</button>
      </div>
    </div>
  </div>
  </div>
      </div>
    );
}

export default Cards;