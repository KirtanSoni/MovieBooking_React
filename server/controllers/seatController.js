
const asyncHandler =require('express-async-handler');
//import mongoose from "mongoose";

const seatSchemacopy=require('../models/seatSchema');
const movieSchemacopy=require('../models/movieSchema');

 const addSeat = asyncHandler(async (req, res) => {
    seat.create(
        {
            seat_no : req.body.seat_no,
            Movie: req.body.Movie_id,
            user: req.body.user_id,
        },
        (err, result) => {
            
            movie.findByIdAndUpdate({_id:req.body.Movie_id},{$push:{seats: result}}, function(err, result){

                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
        
            })
        
            if (err) res.status(400).json(err.message);
            else res.json(result);
        }

    );

});