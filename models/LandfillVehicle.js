const mongoose = require("mongoose");

const LandfillVehicleSchema = new mongoose.Schema({
    vehiclenumber: {
        type: String,
        required: true,
        validate: {
            validator: async function(value) {
                const vehicle = await mongoose.model("Vehicle").findOne({ vechilenumber: value });
                return !!vehicle;
            },
            message: "Vehicle with this number does not exist."
        }
    },
    volumeofwaste: {
        type: Number,
        required: true
    },
    timeofarrival: {
        type: Date,
        required: true
    },
    timeofdeparture: {
        type: Date,
        required: true
    }
});

const LandfillVehicle = mongoose.model("landfillvehicle", LandfillVehicleSchema);

module.exports = {
    LandfillVehicle
};
