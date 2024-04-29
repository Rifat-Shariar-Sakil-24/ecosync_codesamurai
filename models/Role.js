const mongoose = require('mongoose');


const roleSchema = new mongoose.Schema({
    
    rolename: {
        type: String,
        unique: true,
        required: true
    },
    roledescription: {
        type:String,
        required: true
    },
   
 });
 const Role = mongoose.model('role', roleSchema);

 


 
 module.exports = {
    Role
 }