import Grid from '../Grid/Grid'
import MovieDisplay from '../Movie Display/MovieDisplay'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { useAuth } from '../Auth';
import { useSelector } from 'react-redux';
const TwoComponent = () => {
    const check=useAuth();
    const user = useSelector((state) => state.user);
    console.log(check);
    console.log(user);
    return (
        <div>
            {Object.keys(user).length !=0?<div>
              <MovieDisplay/>
              <Grid/>
            </div>:<Redirect to={{
                pathname: "/src/components/Forms/login.jsx",
            }}>
           </Redirect>}
        </div>
    )
}

export default TwoComponent;
