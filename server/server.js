require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors=require('cors');

const PORT=3080;

require('./DB/conn');
const routesUrl=require('./router/auth')
const routesUrl1= require('./router/movieRoute')
app.use(express.json())
app.use(express.static("public"))

const stripe=require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems= new Map([
    [1,{priceInRupees:100, name:'Silver'}],
    [2,{priceInRupees:200, name:'Gold'}],
])

app.use(cors())

app.use('/user',routesUrl);
app.use('/movies',routesUrl1);

app.get('/',(req,res)=>{
    res.send('Hello world!!');
});


app.listen(PORT,()=>{
    console.log('running');
})