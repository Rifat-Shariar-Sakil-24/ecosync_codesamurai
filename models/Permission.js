const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  endpoint: {
    type: String,
    required: true,
    unique: true,
  },
  endpointdescription: {
    type: String,
    required: true,
  },
});

const Permission = new mongoose.model("permission", permissionSchema);

module.exports = {
  Permission,
};
