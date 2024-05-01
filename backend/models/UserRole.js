const mongoose = require('mongoose');
const userRoleRelationSchema = new mongoose.Schema({
    username: {
        type: String,
        ref: 'User',
        required: true,
        unique: true,
    },
    rolename: {
        type: String,
        ref: 'Role',
        required: true
    }
});

const UserRole = mongoose.model('userrolerelation', userRoleRelationSchema);

module.exports = {
    UserRole
}
