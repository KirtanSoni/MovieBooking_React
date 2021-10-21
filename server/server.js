require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express')
const app = express()
const cors=require('cors')

const PORT=3080;

require('./DB/conn');
const routesUrl=require('./router/auth')
const routesUrl1= require('./router/movieRoute')
app.use(express.json())
app.use(cors())

app.use('/user',routesUrl);
app.use('/movies',routesUrl1);

app.get('/',(req,res)=>{
    res.send('Hello world!!');
});


app.listen(PORT,()=>{
    console.log('running');
})