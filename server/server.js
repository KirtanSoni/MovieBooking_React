require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express')
const app = express()
const cors=require('cors')

const PORT=3080;

require('./DB/conn');
const routesUrl=require('./router/auth')
app.use(express.json())
app.use(cors())
app.use('/user',routesUrl);

app.get('/',(req,res)=>{
    res.send('Hello world!!');
});


app.listen(PORT,()=>{
    console.log('running');
})