import React from 'react';
import './Card-style.css';

const Cards=props=>{
    return (
    
      <div className="card text-center shadow">
      <div className='overflow'>
      <img src={props.imgsrc} className="card-thumbnail" alt=""/>
      </div>
        <div className="card-body text-dark">
        <h2 className='card-title'>{props.title}</h2>
    
      <p className="card-text text-secondary">
        {props.content}
        </p>
      <a href="#" className="btn btn-outline-success">Book Now</a>
      </div>
  </div>
    );
};

export default Cards;