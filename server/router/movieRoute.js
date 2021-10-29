const { response, query } = require('express');

const express = require('express');
const movieSchemacopy=require('../models/movieSchema');
const seatSchemacopy=require('../models/seatSchema');
const router = express.Router();




router.get('/Movies',async (req,res)=>{
        try{
            const movie = await movieSchemacopy.find();
            res.send({movie})   
        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }     
    
});

router.post('/add',(req, res) => {
    console.log(req.body)
    const movieName=req.body.movieName;
    const theatreName=req.body.theatreName;
    const description=req.body.description;
    const time=req.body.time;
    const movie = new movieSchemacopy({movieName,theatreName,description,time})
    const status=movie.save().then((user=> {
        console.log("mail object=> ");
      })).catch((error1)=>{
          res.status(201).json({
              message:'authentication error'
          });
      })
      res.status(201).json(status);
});

router.delete('/add',(req,res)=>{
    console.log(req.query,"query");
    const id=req.query.id;
    const data=movieSchemacopy.find(
        { _id: id },
         (err,mov)=>{
        if(mov.length == 1){
           const movieobj=mov[0]
           movieSchemacopy.deleteOne({_id:id}).then(
            res.status(200).json({movieobj})
           ).catch((Err)=>{
               res.status(409).json({ msg: "doesnt get data"});
           })
        }
        else
           res.status(409).json({ msg: "doesnt get data"});
    })
})

router.get('/bookedseat',async (req, res)=>{
    const movID=req.body.movie_ID;
    const bookedseats =  await seatSchemacopy.find({"Movie":movID}).sort("seat_No");
    res.json(bookedseats);
});

router.post('/addseat',(req, res)=>{
    // addseat
     const movID=req.body.movie_ID;
     const userID=req.body.user_ID;
     const NUM=req.body.num;
    const seat = new seatSchemacopy({NUM,movID,userID})
    const status=seat.save().then((seat=> {
        
        //seat.findByIdAndUpdate({_id:req.body.Movie_id},{$push:{seats: seat}}, function(err, result){

            // if(err){
            //     if (err) res.status(400).json(err.message);
            //     else res.json(result);
            // }
            // else{
            //     res.send(result)
            // }
    
        }),
    res.status(201).json(status));
 });
module.exports= router;