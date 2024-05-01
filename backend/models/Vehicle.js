const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  vechileNumber: {
    type: String,
    unique: true,
    required: true,
    
  },
  vehicleType: {
    type: String,
    required: true,
    enum: ["Open Truck", "Dump Truck", "Compactor", "Container Carrier"],
  },
  vehicleCapacity: {
    type: Number,
    required: true,
    enum: [3, 5, 7],
  },
  fuelCostPerKilometerUnloaded:{
    type: Number,
    required: true
  },
  fuelCostPerKilometerLoaded:{
    type: Number,
    required: true
  }

});

const Vehicle = new mongoose.model("vehicle", vehicleSchema);

module.exports = {
  Vehicle,
};
