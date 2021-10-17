
const mongoose = require('mongoose');
const URI = process.env.MONGODB_URL;

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connection Successfull');
}).catch((err)=>{
    console.log("Some error");
    console.log(err);
    
})