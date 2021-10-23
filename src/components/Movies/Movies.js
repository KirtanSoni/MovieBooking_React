import { render } from '@testing-library/react';
import React  from 'react';
import Cards from '../cards/Card';
import './Movies.css';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../Auth';
import { useSelector } from 'react-redux';


const Movies = () =>{
    const check=useAuth();
    const user = useSelector((state) => state.user);
    console.log(check);
    console.log(user);
    return (<div>
        {Object.keys(user).length !=0?<div>
            <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Cards title="movie 1" id="1" imgsrc="https://reactjsexample.com/content/images/2020/01/React-MovieCards-1.jpg" class="card-thumbnail" alt="" content="Some quick example text to build on the card title and make up the bulk of the card's content"/>
                </div>
            <div className="col-md-4">
                <Cards title="movie 2" id="2" imgsrc="https://reactjsexample.com/content/images/2020/01/React-MovieCards-1.jpg" class="card-thumbnail" alt="" content="Some quick example text to build on the card title and make up the bulk of the card's content"/>
            </div>
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