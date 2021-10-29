const { response } = require('express');

//import {addMovie} from "../controllers/movieController";
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

//router.route('/:id').get(isSlotAvailable);
// exports.DataUpload = (req, res) => {
//     console.log(req.body)
//       // console.log(req.body)
//     const data = req.body;
//     const dataAdd = new movieSchemacopy(data);
//     const status = dataAdd.save(function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     });
//     res.json(status);
//   };
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
      // console.log(req.body)
    // const movieName=req.body.movieName;
    // const theatreName=req.body.theatreName;
    // const description=req.body.description;
    // const time=req.body.time;
    // console.log(req.body,"movie");
    // try{
    //     const movieObj=new movieSchemacopy({movieName,theatreName,description,time});
    //     movieObj.save().then((data)=>{
    //     console.log(data);
    //     res.json({data});
    // })
    // }
    // catch{
    //     res.status(500).json({message : "error"})
    // }
});

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

            if(err){
                if (err) res.status(400).json(err.message);
                else res.json(result);
            }
            else{
                res.send(result)
            }
    
        }),
    res.status(201).json(status));
 });
module.exports= router;