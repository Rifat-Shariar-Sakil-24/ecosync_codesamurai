const mongoose = require("mongoose");

const stsschema = new mongoose.Schema({
    wardnumber: {
        type: String,
        required: true,
        unique: true
    },
    capacityintonnes: {
        type: Number,
        required: true
    },
    gpscoordinates: {
        type: [Number], 
        required: true
    },
    stsmanager:{
         type: String
    }
});


const STS = mongoose.model("sts", stsschema);

module.exports = {
    STS
}
