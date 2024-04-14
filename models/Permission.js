const mongoose = require('mongoose');


 const permissionSchema = new mongoose.Schema({
 
    permissionname: {
        type: String,
        unique: true,
        required: true
    },
    permissiondescription:{
         type: String,
         required: true
    }
 });
 const Permission = new mongoose.model('permission', permissionSchema);






 
 module.exports = {
    Permission
 }