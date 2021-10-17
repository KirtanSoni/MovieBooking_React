const { response } = require('express');
const express = require('express')
const router=express.Router();
const userSchemacopy=require('../models/userSchema');
const bcrypts=require('bcrypt')

router.get('/',(req,res)=>{
    res.send('Hello world Router.js!!')
});


router.post('/register',async(req,res)=>{

    const { username, email, password } = req.body;

    const securePassword=await bcrypts.hash(password,12)

    if(!username || !email || !password)
        return res.status(422).json({ msg: "Please fill all fields!!" });

    try {
        const userExist=await userSchemacopy.findOne({ username: username })
        if(userExist)
            return res.status(422).json({ msg: "This username is already in Use." });
    
        const emailExist=await userSchemacopy.findOne({ email: email })
        if(emailExist)
            return res.status(422).json({ msg: "This Email is already in Use." });   
    
        if (password.length < 8)
            return res.status(422).json({ msg: "Password must be at least 8 characters." });


        const registeredUser=new userSchemacopy({
            username:username,
            email:email,
            password:securePassword,
        })
        await registeredUser.save();
        res.status(201).json("user registered");
            
    }
    catch(err){
        console.log(err);
    }
});
/*router.post('/logout',async (req, res) => {
    try {
        return res.json({ msg: "Logout Successfully!" })
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}),*/
router.post('/login',async (req, res) => {
    
    const { email, password } = req.body;
        
    if(!email || !password)
            return res.status(400).json({ msg: "Please fill all fields!!" });
    try {
        const userawail = await userSchemacopy.findOne({ email:email });

        if (!userawail)
            return res.status(500).json({ msg: "This email does not exist." });

        const isMatch = await bcrypts.compare(password, userawail.password);

        if (!isMatch)
            return res.status(500).json({ msg: "Password is Wrong." });
        else
            return res.json({msg:"succed"})
        
    } 
    catch (err) {
        return res.status(500).json({msg:"user error"});
    }
}),


module.exports=router;