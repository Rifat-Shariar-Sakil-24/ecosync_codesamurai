const mongoose = require('mongoose');


const rolePermissionSchema = new mongoose.Schema({
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true,
        unique: true
    },
    permissionIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Permission'
    }]
});

const RolePermission = mongoose.model('RolePermissionRelation', rolePermissionSchema);

module.exports = {
    RolePermission
}
