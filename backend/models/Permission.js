const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  permissionName: {
    type: String,
    required: true,
    unique: true,
  },
  permissionDescription: {
    type: String,
    required: true,
  },
});

const Permission = new mongoose.model("permission", permissionSchema);

module.exports = {
  Permission,
};
