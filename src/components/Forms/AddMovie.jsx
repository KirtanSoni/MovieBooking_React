import React from "react";
import { useState } from "react";
import axios from "axios";

function AddMovie(){
    const [error, setError] = useState({
    });
    const [movieobj, setMovieobj] = useState({
        movieName: "",
        theatreName: "",
        description: "",
        time: "",
       // Poster: "",
    });

    const movieData =
    (...prop) =>
    (event) => {
        console.log(event.target.value);
      setMovieobj({ ...movieobj, [prop]: event.target.value });
      console.log(movieobj);
    };

    const movieSubmit = (event) => {
        event.preventDefault();
        console.log(movieobj);
        axios.post("http://localhost:3080/movies/add",movieobj).then((res)=>{
            const success={password_error:"added successful!"};
            setError(success);
        }).catch((err)=>{
            const error3={password_error:"failed to add movie"};
            setError(error3);
        })
        
    }

    return <div className="AddMovie">
    <div className="container">
        <form method="POST">
            <div class="form-group">
                <label>Name of the Movie :</label> <input type="text" name="movieName" className="moviefields" onChange={movieData("movieName")}></input>
            </div>
            <div class="form-group mt-2">
                <label>Name of Theatre :</label> <input type="text" name="theatreName" className="moviefields" onChange={movieData("theatreName")}></input>
            </div>
            <div class="form-group mt-2">
                <label>Brief Description of movie :</label> <input type="text" name="description" className="moviefields" onChange={movieData("description")}></input>
            </div>
            <div class="form-group mt-2">
                <label>Show Time :</label> <input type="text" name="time" className="moviefields" onChange={movieData("time")}></input>
                {error && error.password_error}       
                </div>
            
            {/* < div class="form-group mt-2">
                <label>Select Movie Poster :</label> <input type="file"  name="Poster" class="moviefields" onchange={movieData("Poster")}></input>
                
            </div> */}
            <div class="form-group mt-2">
                <center><button className="submitbtn" onClick={movieSubmit}>Add Movie</button></center>
            </div>
        </form>
    </div>
    </div>
}
export default AddMovie;