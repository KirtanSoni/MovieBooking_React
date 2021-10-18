import React,{useState} from 'react';
import { Link,useHistory,withRouter } from 'react-router-dom';
import './Card-style.css';

const Cards=(props)=>{
  console.log(props);
  const [single, setsingle] = useState(false);
    return (
      <div className="body">
      <div className="card text-center shadow">
      <div className='overflow'>
      <img src={props.imgsrc} className="img-fluid img-thumbnail" alt=""/>
      </div>
      <div className="card-body text-dark-white">
        <h2 className='card-title'>{props.title}</h2>
        <div className="Identifier" id={props.id}>
        {
          !single &&
        <Link to={`/Book/${props.id}`}>
          <button className="btn btn-primary">Book Now</button>
        </Link>
        }
        </div>
      </div>
  </div>
  </div>
  );
};

export default Cards;