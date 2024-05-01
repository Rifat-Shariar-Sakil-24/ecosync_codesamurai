const express = require("express");
const { User } = require("../models/user");
const { UserRole } = require("../models/UserRole");
const app = express.Router();


app.post("/auth/create",  async function (req, res) {
  const data = req.body;
  try {
    const newUser = new User(data);
    await newUser.save();
    res.status(201).send("new user saved");

    const dataUserRole = {
      username : req.body.username,
      rolename : 'Unassigned'
  }
  const newUserRole = new UserRole(dataUserRole);
  await newUserRole.save();

  } catch (error) {
    res.status(401).send("error occurred while saving new user");
  }
});

module.exports = app;
