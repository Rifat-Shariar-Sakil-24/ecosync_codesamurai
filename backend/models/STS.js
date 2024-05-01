const mongoose = require("mongoose");

const stsschema = new mongoose.Schema({
    wardNumber: {
        type: String,
        required: true,
        unique: true
    },
    capacityInTonnes: {
        type: Number,
        required: true
    },
    gpsCoordinates: {
        type: [Number], 
        required: true
    },
    stsManagers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        validate: {
        validator: async function(stsManager) {
            const permission = await Permission.findOne({ permissionname: permissionname });
            return !!permission; 
        },
        message: props => `${props.value} is not a valid permissionname`
    }
      },
      
    ],
    vehicles : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle' // Reference to the trucks assigned to this STS
      }]
    
});


const STS = mongoose.model("sts", stsschema);

module.exports = {
    STS
}
