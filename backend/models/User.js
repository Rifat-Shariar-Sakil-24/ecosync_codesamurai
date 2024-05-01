const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userPhoneNumber:{
        type : String,
        unique: true,
        required: true,
    },
    userMail:{
        type : String,
        unique: true,
        required: true,
    },
    userName: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        ref : 'Role'
    }
 });
 const User = mongoose.model('user', userSchema);

 
 module.exports = {
    User
 }