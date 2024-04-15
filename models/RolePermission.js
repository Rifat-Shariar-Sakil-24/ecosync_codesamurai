const mongoose = require('mongoose');

const { Permission } = require('./Permission');
const { Role } = require('./Role');

const rolePermissionSchema = new mongoose.Schema({
    rolename: {
        type: String,
        ref: 'Role',
        required: true,
        unique: true,
        validate: {
            validator: async function(rolename) {
                const role = await Role.findOne({ rolename: rolename });
                return !!role; 
            },
            message: props => `${props.value} is not a valid rolename`
        }
    },
    permissionnames: {
        type: [{
            type: String,
            ref: 'Permission',
            validate: {
                validator: async function(permissionname) {
                    const permission = await Permission.findOne({ permissionname: permissionname });
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
