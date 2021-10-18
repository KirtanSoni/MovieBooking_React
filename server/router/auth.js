const { response } = require('express');
const express = require('express')
const router=express.Router();
const userSchemacopy=require('../models/userSchema');
const bcrypt=require('bcrypt')

router.get('/',(req,res)=>{
    res.send('Hello world Router.js!!')
});
router.post('/register',(req,res)=>{
    console.log("res--",req.body)
    const username=req.body.logname;
    const password=req.body.logpass;
    const email=req.body.logemail;
  
    if (!(email && password && username)) {
      res.status(400).send("All input is required");
    }
    userSchemacopy.findOne(
      { $or: [{ username: username }, { email: email }] },
      function (err, user) {
        if (user) {
          console.log("exist");
          return res
            .status(409)
            .send({ message: "User Already Exist. Please Login" });
        } else {
        
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
        
            const user = new userSchemacopy({username,email,password:hash})
            const status=user.save().then((user=> {
              console.log("mail object=> ");
            })).catch((error1)=>{
                res.status(201).json({
                    message:'authentication error'
                });
            })
            res.status(201).json(status);
       
        }
      }
    );
});
/*router.post('/logout',async (req, res) => {
    try {
        return res.json({ msg: "Logout Successfully!" })
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}),*/
router.post('/login',async (req, res) => {
    
    const email=req.body.logemail;
    const password=req.body.logpass;
        
    if(!email || !password)
            return res.status(400).json({ msg: "Please fill all fields!!" });
    try {
        const userawail = await userSchemacopy.findOne({ email:email });

        if (!userawail)
            return res.status(500).json({ msg: "This email does not exist." });

        const isMatch = await bcrypt.compare(password, userawail.password);

        if (!isMatch)
            return res.status(500).json({ msg: "Password is Wrong." });
        else
            return res.json({msg:"login success"});
    } 
    catch (err) {
        return res.status(500).json({msg:"user error"});
    }
})


module.exports=router;