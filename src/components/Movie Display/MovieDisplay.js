import React from 'react'
import { useLocation } from 'react-router'
import CardNoButton from '../ButtonCard/CardNoButton';
import Movies from '../Movies/Movies';

const MovieDisplay = () => {
    const location=useLocation();
    let movie_id=location.pathname.split('/')[2];
    let description;
    const obj={
        id:movie_id,
        imgsrc:"",
        title:"",
    }
    console.log(movie_id);
    return (
        <div >
            <CardNoButton props={obj}/>
        </div>
    )
}

export default MovieDisplay
