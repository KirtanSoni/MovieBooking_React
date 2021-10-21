//import movies from "../models/movieSchema"
//const asyncHandler = require('express-async-handler');
//import mongoose from "mongoose";
const movies=require('../models/movieSchema');
/*
export const isSlotAvailable = asyncHandler(async (req, res) => {
    const seat = await movieSchemacopy.findOne({
        doctor: mongoose.Types.ObjectId(req.params.id),
        date: req.query.date,
        slot_no: req.query.slot,
    }).exec();
    res.json(booking);
});*/

const MovieController={
    
} 
var seatsBooked = (async(req,res)=>{
  //  const [seats]
});
const addMovie = (async (req, res) => {
    movies.create(
        {
            movieName: req.body.movieName,
            theatreName: req.body.theatreName,
            description: req.body.description,
            time: req.body.time,
        },
        (err, result) => {;
            if (err) res.status(400).json(err.message);
            else res.json(result);
        }
    );
});

module.exports= {addMovie};