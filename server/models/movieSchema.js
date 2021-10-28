const seat = require('./seatSchema');

const mongoose = require('mongoose');

const movieSchema=new mongoose.Schema({
    movieName: {
        type: String,
    },
    theatreName: {
        type: String, 
    },
    description: {
        type: String,
    },
    time:{
        type: String,
    }
})

module.exports=mongoose.model('movies',movieSchema);