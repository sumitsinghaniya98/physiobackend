const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();



router.post("/login", async (req, res) => {
    const { username, password } = req.body;
   
    if(username && password) {
         const token = jwt.sign({ userID: username }, process.env.JWT_SECRET);
        res.send({msg:"Login successful", token: token});
    }else{
        res.send({msg:"Login failed"});
    }
    
});

module.exports = router;