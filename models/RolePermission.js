const mongoose = require('mongoose');

const { Permission } = require('./Permission');
const { Role } = require('./Role');

const rolePermissionSchema = new mongoose.Schema({
    roleId: {
        type: String,
        ref: 'Role',
        required: true,
        unique: true,
        validate: {
            validator: async function(roleId) {
                const role = await Role.findOne({ rolename: roleId });
                return !!role; 
            },
            message: props => `${props.value} is not a valid rolename`
        }
    },
    permissionIds: {
        type: [{
            type: String,
            ref: 'Permission',
            validate: {
                validator: async function(permissionId) {
                    const permission = await Permission.findOne({ permissionname: permissionId });
                    return !!permission; 
                },
                message: props => `${props.value} is not a valid permissionname`
            }
        }],
        validate: [
            {
                validator: function(array) {
                    return array.length === new Set(array).size;
                },
                message: props => `Duplicate permissionIds found`
            }
        ]
    }
});

const RolePermission = mongoose.model('RolePermissionRelation', rolePermissionSchema);

module.exports = {
    RolePermission
};
