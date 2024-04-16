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
        const username = userRole.username;
        const userInfo = await User.findOne({ username: username });

        const rolename = userRole.rolename;
        const roleInfo = await Role.findOne({ rolename: rolename });

        const object = {
          username: userInfo.username,
          rolename: roleInfo.rolename,
        };

        tobePassed.push(object);
      })
    );
    res.status(201).send(allUserRoles);
  } catch (error) {
   // console.error("Error occurred while fetching user roles:", error);
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
  const username = req.params.userId;

  try {
    const userInfo = await User.find({ username });
    res.status(201).send(userInfo);
  } catch (error) {
    res.status(401).send("error occurred while fetching user info");
  }
});

app.put("/users/:userId", async function (req, res) {
  const username = req.params.userId;
  const tobeupdatedBody = {
    username: req.body.username,
  };

  const validUser = await User.findOne({ username });
  if (!validUser) {
    return res.status(404).send("user not found");
  }

  try {
    await User.findOneAndUpdate({ username }, tobeupdatedBody);
    res.status(201).send("user info updated");
  } catch (error) {
    console.log(error);
    res.status(401).send("error occurred while updating user info");
  }
});

// app.delete("/users/:userId", async function (req, res) {
//   const userId = req.params.userId;

//   try {
//     await User.findByIdAndDelete({ _id: userId });
//     res.status(201).send("user deleted");
//   } catch (error) {
//     res.status(401).send("error occurred while deleting user");
//   }
// });

//create user
app.post("/users", async function (req, res) {
  const data = req.body;
  try {
    const newUser = new User(data);
    await newUser.save();

    const dataUserRole = {
      username: req.body.username,
      rolename: "Unassigned",
    };
    const newUserRole = new UserRole(dataUserRole);
    await newUserRole.save();

    res.status(201).send("new user saved");
  } catch (error) {
    console.log(error);
    res.status(401).send("error occurred while saving new user");
  }
});

app.put("/users/:userId/roles", async function (req, res) {
  const username = req.params.userId;
  const rolename = req.body.rolename;

  const validUser = await User.findOne({ username: username });
  const validRole = await Role.findOne({ rolename: rolename });

  if (!validUser || !validRole) {
    return res.status(404).send("User or Role not found");
  }

  try {
    await UserRole.findOneAndUpdate({ username }, { rolename });
    res.status(201).send("role updated");
  } catch (error) {
    console.log(error);
    res.status(401).send("error occurred while updating user role");
  }
});

module.exports = app;
