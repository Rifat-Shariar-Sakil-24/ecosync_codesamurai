const mongoose = require("mongoose");

const stsschema = new mongoose.Schema({
    wardnumber: {
        type: String,
        required: true
    },
    capacityintonnes: {
        type: Number,
        required: true
    },
    gpscoordinates: {
        type: [Number], 
        required: true
    }
});


const STS = mongoose.model("sts", stsschema);

module.exports = {
    STS
}
