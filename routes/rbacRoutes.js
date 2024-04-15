const { Role } = require("../models/Role");
const express = require("express");
const { UserRole } = require("../models/UserRole");
const { Permission } = require("../models/Permission");
const { RolePermission } = require("../models/RolePermission");
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

app.post("/rbac/users/:userId/roles", async function (req, res) {
  const userId = req.params.userId;
  const roleId = req.body.roleId;

  const data = {
    userId: userId,
    roleId: roleId,
  };

  try {
    const newUserRole = new UserRole(data);
    await newUserRole.save();
    res.status(201).send("user has been assigned to role");
  } catch (error) {
    res.status(401).send("error occurred while assinging role to user");
  }
});


app.post('/rbac/permissions', async function(req,res){
  const data = req.body;
  try {
    const newPermission = new Permission(data);
    await newPermission.save();
    res.status(201).send("new endpoit of permission is created");
  } catch (error) {
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



app.post('/rbac/roles/:roleId/permissions', async function(req,res){
  const roleId = req.params.roleId;
  const permissionId = req.body.permissionId;

  const data = {
    roleId: roleId,
    permissionIds: [permissionId]
  }

  try {
    const existRolePermission = await RolePermission.findOne({roleId:roleId});
    if(!existRolePermission){
      const newRolePermission = await RolePermission(data);
      newRolePermission.save();
    }
    else{
      existRolePermission.permissionIds.push(permissionId);
    } 
    res.status(201).send('permission assigned to role'); 
  } catch (error) {
    
    res.status(401).send('error occurred while assigning permission to role');
  }



})




app.get('/rbac/roles/:roleId/permissions', async function(req,res){
  const roleId = req.params.roleId;
  try {
    const permissionsOfaRole = await RolePermission.find({roleId:roleId});
    res.status(201).send(permissionsOfaRole);
  } catch (error) {
    res.status(401).send('error occurred while fetching permissions of role');
  }



})
module.exports = app;


