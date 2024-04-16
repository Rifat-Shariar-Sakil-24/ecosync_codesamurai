const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  vechilenumber: {
    type: String,
    required: true,
    unique: true,
  },
  vehicletype: {
    type: String,
    required: true,
    enum: ["Open Truck", "Dump Truck", "Compactor", "Container Carrier"],
  },
  vehiclecapacity: {
    type: Number,
    required: true,
    enum: [3, 5, 7],
  },
});


const Vehicle = new mongoose.model("vehicle", vehicleSchema);





const stsVehicleSchema = new mongoose.Schema({
    stsId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "STS",
        required: true
    },
    vehiclenumber: {
        type: String,
        required: true,
        ref : "Vehicle"
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

const STSVehicle = mongoose.model("stsvehicle", stsVehicleSchema);


const LandfillVehicleSchema = new mongoose.Schema({
    
    vehiclenumber: {
        type: String,
        required: true,
        ref : "Vehicle"
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
  Vehicle,
  STSVehicle,
  LandfillVehicle
};
