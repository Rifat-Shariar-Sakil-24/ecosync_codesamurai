const { Role } = require("../models/Role");
const express = require("express");
const { UserRole } = require("../models/UserRole");
const { Permission } = require("../models/Permission");
const { RolePermission } = require("../models/RolePermission");
const { User } = require("../models/user");
const app = express.Router();

app.get("/rbac/roles", async function (req, res) {
  try {
    const allRoles = await Role.find({});
    res.status(201).send(allRoles);
  } catch (error) {
    res.status(401).send("error occurred while loading all roles");
  }
});

app.post("/rbac/roles", async function (req, res) {
  const data = req.body;
  console.log(data);
  try {
    const newRole = new Role(data);
    await newRole.save();
    res.status(201).send("new role saved");
  } catch (error) {
    console.log(error);
    res.status(401).send("error occurred while saving new role");
  }
});


// app.post("/rbac/users/:userId/roles", async function (req, res) {
//   const username = req.params.userId;
//   const rolename = req.body.rolename;

//   const validUser = await User.findOne({ username: username });
//   const validRole = await Role.findOne({ rolename: rolename });

//   if (!validUser || !validRole) {
//     return res.status(404).send("User or Role not found");
//   }

//   const data = {
//     username: username,
//     rolename: rolename,
//   };

//   try {
//     await UserRole.findOneAndUpdate({ username }, { rolename });
//     return res.status(201).send("User has been assigned to role");
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("Error occurred while assigning role to user");
//   }
// });


app.post('/rbac/permissions', async function(req,res){
  const data = req.body;
  try {
    const newPermission = new Permission(data);
    await newPermission.save();
    res.status(201).send("new endpoit of permission is created");
  } catch (error) {
    console.log(error);
    res.status(401).send("error occurred while creating new permission of endpoint");
  }
  
})



app.get('/rbac/permissions', async function(req,res){
 
  try {
    const allPermissions = await Permission.find({});
    res.status(201).send(allPermissions);
  } catch (error) {
    res.status(401).send("error occurred while fetching permissions of endpoints");
  }
  
})



app.put('/rbac/roles/:roleId/permissions', async function(req,res){
  const roleName = req.params.roleId;
  const permissionName = req.body.permissionName;
  try {
    const role = await Role.findOne({ roleName });
    if (!role) {
      throw new Error('Role not found');
    }

    if (role.rolePermissions.includes(permissionName)) {
      throw new Error('Permission already exists for this role');
    }

    role.rolePermissions.push(permissionName);
    await role.save();
    res.status(201).send('permission added to role');

    console.log(`Permission '${permissionName}' added to role '${roleName}' successfully`);
  } catch (error) {
    console.error('Error adding permission to role:', error.message);
    res.status(401).send('error occurred while saving new permission to role');
  }
  
})




app.get('/rbac/roles/:roleId/permissions', async function(req,res){
  const roleName = req.params.roleId;
  try {
    const role = await Role.findOne({roleName});
    if(!role){
      throw new Error('Role not found');
    }
    const permissions = role.rolePermissions;
    res.status(201).send(permissions);
  } catch (error) {
    res.status(401).send('error occurred while fetching permissions of role');
  }



})


module.exports = app;


