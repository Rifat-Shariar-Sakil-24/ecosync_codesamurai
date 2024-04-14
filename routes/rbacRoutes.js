const { Role } = require("../models/Role");
const express = require('express');
const { UserRole } = require("../models/UserRole");
const app = express.Router();


app.get('/rbac/roles',async function(req,res){
    try {
      const allRoles = await Role.find({});
      res.status(201).send(allRoles);

    } catch (error) {
        res.status(401).send('error occurred while loading all roles');
    }
})



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

app.post('/rbac/users/:userId/roles',async function(req,res){
    const userId = req.params.userId;
    const roleId = req.body.roleId;

    const data = {
        userId : userId,
        roleId : roleId
    }

    try {
        const newUserRole = new UserRole(data);
        await newUserRole.save();
        res.status(201).send('user has been assigned to role');

    } catch (error) {
        res.status(401).send('error occurred while assinging role to user');
    }
})
module.exports = app;