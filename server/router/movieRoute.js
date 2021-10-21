
//import {addMovie} from "../controllers/movieController";
const express = require('express');
const movieSchemacopy=require('../models/movieSchema');
const seatSchemacopy=require('../models/seatSchema');
const addMovie=require('../controllers/movieController');
const router = express.Router();

//router.route('/:id').get(isSlotAvailable);
router.post('/add',(req, res)=>{
   // addMovie
    const name=req.body.movieName;
    const theatre=req.body.theatreName;
    
    
    const desc=req.body.description;
    const time=req.body.time;
   const movie = new movieSchemacopy({name,theatre,desc,time})
   const status=movie.save().then((movie=> {
     console.log("mail object=> ");
   })).catch((error1)=>{
       res.status(201).json({
           message:'authentication error'
       });
   })
   res.status(201).json(status);
});


router.post('/addseat',(req, res)=>{
    // addseat
     const movID=req.body.movie_ID;
     const userID=req.body.user_ID;
     const NUM=req.body.num;
    const seat = new seatSchemacopy({NUM,movID,userID})
    const status=seat.save().then((seat=> {
        
        seat.findByIdAndUpdate({_id:req.body.Movie_id},{$push:{seats: seat}}, function(err, result){

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
    })).catch((error1)=>{
        res.status(201).json({
            message:'authentication error'
        });
    })
    res.status(201).json(status);
 });
module.exports= router;