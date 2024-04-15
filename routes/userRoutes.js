const express = require("express");
const { User } = require("../models/user");
const { UserRole } = require("../models/UserRole");
const { Role } = require("../models/Role");
const app = express.Router();

app.get("/users/roles", async function (req, res) {
  try {
    const allUserRoles = await UserRole.find({});
    const tobePassed = [];

    await Promise.all(
      allUserRoles.map(async function (userRole) {
        const userId = userRole.userId;
        const userInfo = await User.findOne({ _id: userId });

        const roleId = userRole.roleId;
        const roleInfo = await Role.findOne({ _id: roleId });

        const object = {
          userId: userId,
          username: userInfo.username,
          roleId: roleId,
          rolename: roleInfo.rolename,
        };

        tobePassed.push(object);
      })
    );
    res.status(201).send(tobePassed);
  } catch (error) {
    console.error("Error occurred while fetching user roles:", error);
    res.status(401).send("Error occurred while fetching user roles");
  }
});

app.get("/users", async function (req, res) {
  try {
    const allUsers = await User.find({});
    res.status(201).send(allUsers);
  } catch (error) {
    res.status(401).send("fetching error of all Users");
  }
});

app.get("/users/:userId", async function (req, res) {
  const userId = req.params.userId;

  try {
    const userInfo = await User.find({ _id: userId });
    res.status(201).send(userInfo);
  } catch (error) {
    res.status(401).send("error occurred while fetching user info");
  }
});

app.put("/users/:userId", async function (req, res) {
  const userId = req.params.userId;
  const tobeupdatedBody = {
    username: req.body.username,
  };

  try {
    await User.findByIdAndUpdate({ _id: userId }, tobeupdatedBody);
    res.status(201).send("user info updated");
  } catch (error) {
    res.status(401).send("error occurred while updating user info");
  }
});

app.delete("/users/:userId", async function (req, res) {
  const userId = req.params.userId;

  try {
    await User.findByIdAndDelete({ _id: userId });
    res.status(201).send("user deleted");
  } catch (error) {
    res.status(401).send("error occurred while deleting user");
  }
});

app.post("/users", async function (req, res) {
  const data = req.body;
  try {
    const newUser = new User(data);
    await newUser.save();
    res.status(201).send("new user saved");
  } catch (error) {
    res.status(401).send("error occurred while saving new user");
  }
});

app.put("/users/:userId/roles", async function (req, res) {
  const userId = req.params.userId.toString();
  const roleId = req.body.roleId;

  try {
    await UserRole.findOneAndUpdate({ userId: userId }, { roleId: roleId });
    res.status(201).send("role updated");
  } catch (error) {
    console.log(error);
    res.status(401).send("error occurred while updating user role");
  }
});
module.exports = app;
