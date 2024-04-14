const { Role } = require("../models/Role");
const express = require('express');
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
  try {
    const newRole = new Role(data);
    await newRole.save();
    res.status(201).send("new role saved");
  } catch (error) {
    res.status(401).send("error occurred while saving new role");
  }
});

module.exports = app;