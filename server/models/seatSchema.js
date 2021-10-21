//import movies from "./movieSchema.js"
//import users from "./userSchema.js";
const mongoose = require('mongoose');

const seatSchema=new mongoose.Schema({
    seat_No: {
        type: Number,
        required: true,
        trim: true,
    },
    Movie: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'movies',
        required: true,
    },
    user:
    {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'users',
        required:true,
    }
})

module.exports=mongoose.model('seat',seatSchema);