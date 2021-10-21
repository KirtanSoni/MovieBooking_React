const seat = require('./seatSchema');

const mongoose = require('mongoose');

const movieSchema=new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
        trim: true
        
    },
    theatreName: {
        type: String,
        required: true,
        trim: true,
        
    },
    location: {
        type:String,
        required:true,
    },
    description: {
        type: String,
    },
    time:{
        type: Date, 
        required:true,
    },
    seats:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref: 'seat',
    }
})

module.exports=mongoose.model('movies',movieSchema);