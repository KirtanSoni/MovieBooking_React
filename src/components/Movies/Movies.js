import { render } from '@testing-library/react';
import React  from 'react';
import Cards from '../cards/Card';
import './Movies.css';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../Auth';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from "react";


const Movies = () =>{
    const check=useAuth();
    const user = useSelector((state) => state.user);
    let items=['1','2'];
    
    const [mov, setMov] = useState([]);
    axios.get("http://localhost:3080/movies/Movies").then((res)=>{    
    setMov(res.data.movie);
    console.log(mov);

        
    });
    console.log(check);
    console.log(user);
    return (<div>
        {Object.keys(user).length !=0?<div>
            <div className="container-fluid d-flex justify-content-center">
            <div className="row">
            {mov.map((i)=>{
                return <div className="col-md-4"><Cards title={i.movieName} id={i._id} imgsrc="https://reactjsexample.com/content/images/2020/01/React-MovieCards-1.jpg" class="card-thumbnail" alt="" content={i.description}/></div>
            })}
        </div>
    </div>
        </div>:<Redirect to={{
            pathname: "/src/components/Forms/login.jsx",
        }}>
       </Redirect>}
    </div>
);
}
export default Movies;