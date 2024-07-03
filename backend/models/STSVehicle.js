const mongoose = require("mongoose");
const { Vehicle } = require("./Vehicle");
const { STS } = require("./STS");

const stsVehicleSchema = new mongoose.Schema({
  stsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "STS",
    required: true,zz
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true, 
    unique: true
  },
  volumeofWaste: {
    type: Number,
    required: true,
  },
  timeOfArrival: {
    type: Date,
    required: true,
  },
  timeOfDeparture: {
    type: Date,
    required: true,
  },
  vehiclePosition: {
    type: String,
    enum : ["on STS", "on Landfill", "on Road"]
  },
  destinedLandfill : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Landfill",
  }
});

const STSVehicle = mongoose.model("stsvehicle", stsVehicleSchema);

module.exports = {
  STSVehicle,
};
