const mongoose = require("mongoose");
const { Vehicle } = require("./Vehicle");
const { STS } = require("./STS");

const stsVehicleSchema = new mongoose.Schema({
  stsId: {
    type: String,
    ref: "STS",
    required: true,

    validate: {
        validator: async function (value) {
          const STSWardNumber = await STS.findOne({ wardnumber: value });
          return !!STSWardNumber;
        },
        message: "STS Ward Number with this name does not exist.",
      },
  },
  vehiclenumber: {
    type: String,
    required: true,
    unique:true,
    validate: {
      validator: async function (value) {
        const vehicle = await Vehicle.findOne({ vechilenumber: value });
        return !!vehicle;
      },
      message: "Vehicle with this number does not exist.",
    },
    
  },
  volumeofwaste: {
    type: Number,
    required: true,
  },
  timeofarrival: {
    type: Date,
    required: true,
  },
  timeofdeparture: {
    type: Date,
    required: true,
  },
});

const STSVehicle = mongoose.model("stsvehicle", stsVehicleSchema);

module.exports = {
  STSVehicle,
};
