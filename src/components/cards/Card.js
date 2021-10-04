import React from 'react';
import './Card-style.css';

const Cards=props=>{
    return (
    
      <div className="body">
      <div className="card text-center shadow">
      <div className='overflow'>
      <img src={props.imgsrc} className="img-fluid img-thumbnail" alt=""/>
      </div>
        <div className="card-body text-dark-white">
        <h2 className='card-title'>{props.title}</h2>
  
      <a href="#" className="btn btn-outline-success">Book Now</a>
      </div>
  </div>
  </div>
    );
};

export default Cards;