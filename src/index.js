require('dotenv').config();
const express = require('express');
const data = require("../models/models");
const app = express();
app.use(express.json());
const router = express.Router();
require("../connection/conn");
const port = process.env.PORT || 3000;

router.get('/get' , async (req , res) => {
    const getdata = await data.find();
    res.send(getdata);
});

router.post('/add' , async (req , res) => {
    const getdata = new data({
        username:req.body.username,
        password:req.body.password
    });
    try {
        await getdata.save();
        res.send("data saved successfully");
    } catch (error) {
        res.send(error);
    }
    
});

app.use('/api' , router);

app.listen(port , (err) => {
    if(!err){
        console.log("server is running at http://localhost:3000");
    }else{
        console.log("some error occur" + err);
    }
});