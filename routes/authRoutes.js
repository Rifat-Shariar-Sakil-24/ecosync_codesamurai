const express = require("express");
const { User } = require("../models/user");
const app = express.Router();


app.post("/auth/create",  async function (req, res) {
  const data = req.body;
  try {
    const newUser = new User(data);
    await newUser.save();
    res.status(201).send("new user saved");
  } catch (error) {
    res.status(401).send("error occurred while saving new user");
  }
});

module.exports = app;
