const mongoose = require("mongoose");

const schema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const data = new mongoose.model("userdata" , schema);

module.exports = data;
