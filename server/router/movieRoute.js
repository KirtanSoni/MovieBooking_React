
//import {addMovie} from "../controllers/movieController";
const express = require('express');
const movieSchemacopy=require('../models/movieSchema');
const addMovie=require('../controllers/movieController');
const router = express.Router();

//router.route('/:id').get(isSlotAvailable);
router.post('/movies/add',function(req, res){
    addMovie
});

module.exports= router;