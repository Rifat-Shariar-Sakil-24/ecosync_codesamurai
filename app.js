require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require('./routes/authRoutes.js');
const rbacRoutes = require('./routes/rbacRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const vehicleRoutes = require('./routes/vehicleRoutes.js');
const stsRoutes = require('./routes/stsRoutes.js');



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.set('view engine', 'ejs');



const url = 'mongodb+srv://'+process.env.CLUSTERUSERNAME+':'+process.env.CLUSTERUSERPASS+'@cluster0.qrtll88.mongodb.net/ecosync_codesamurai'

connectDB().then(() => {
    console.log("Connected to DB");
}).catch(err => console.log(err));

async function connectDB() {
    try {
        await mongoose.connect(url);   
    } 
    catch (error) {
        throw new Error('Error connecting to MongoDB: ' + error.message);
    }
    
}






app.get('/', function(req,res){
    res.render('home');
   // db.collection.dropIndexes()
})
app.get('/login', function(req,res){
    res.render('login');
})





app.use(authRoutes);
app.use(rbacRoutes);
app.use(userRoutes);
app.use(vehicleRoutes);
app.use(stsRoutes);


app.listen(process.env.PORT || 4000,function(){
    console.log("server is running on port 4000");
})


