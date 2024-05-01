const mongoose = require('mongoose');
const { Permission } = require('./Permission');


const roleSchema = new mongoose.Schema({
    roleName: {
        type: String,
        unique: true,
        required: true
    },
    roleDescription: {
        type: String,
        required: true
    },
    rolePermissions: {
        type: [{
            type: String,
            ref: 'Permission'
        }],
        validate: {
            validator: async function(value) {
                const permissionDocs = await Permission.find({ permissionName: { $in: value } });
                return permissionDocs.length === value.length;
            },
            message: props => `One or more permissions in ${props.path} do not exist in the Permission table.`
        }
    }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = {
    Role
};
