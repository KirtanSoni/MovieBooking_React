import React,{useState} from 'react';
import { Link,useHistory,withRouter } from 'react-router-dom';
import './CardNoButton.css';

const CardNoButton=(props)=>{
    return (
      <div className="body">
      <div className="card text-center shadow">
      <div className='overflow'>
        All eyes this way please!
      </div>
      <div className="card-body text-dark-white">
        <h2 className='card-title'>{props.props.title}</h2>
        <div className="Identifier" id={props.props.id}>
        </div>
      </div>
  </div>
  </div>
  );
};

export default CardNoButton;