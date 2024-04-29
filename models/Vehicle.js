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
  vehiclestatus:{
    type: String,
    required : true,
    enum: ["Idle", "Busy",],

  }
});

const Vehicle = new mongoose.model("vehicle", vehicleSchema);

module.exports = {
  Vehicle,
};
