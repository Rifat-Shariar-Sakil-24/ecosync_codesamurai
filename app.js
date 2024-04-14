const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const check = {
    name:'shariar'
}

app.get('/', function(req,res){
    res.json(check);
})
  
app.listen(process.env.PORT || 4000,function(){
    console.log("server is running on port 4000");
})


