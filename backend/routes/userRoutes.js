const express = require("express");
const { User } = require("../models/user");
const { UserRole } = require("../models/UserRole");
const { Role } = require("../models/Role");
const app = express.Router();


app.get("/users/roles", async function (req, res) {
  try {
    const allRoles = await Role.find({});
    res.status(201).send(allRoles);
  } catch (error) {
    console.log(error);
    res.status(401).send("error occurred while loading all roles");
  }
});



app.put("/users/:userId/roles", async function (req, res) {
  const _id = req.params.userId;
  const userRole = req.body.roleName;

  try {
    const validUser = await User.findOne({ _id });
    const validRole = await Role.findOne({ roleName:userRole });

    if (!validUser || !validRole) {
      return res.status(404).send("User or Role not found");
    }

    const data = req.body;
    await User.findOneAndUpdate({ _id }, { userRole });
    return res.status(201).send("User Role Updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error occurred while assigning role to user");
  }
});


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
  const _id = req.params.userId;

  try {
    const userInfo = await User.find({ _id });
    res.status(201).send(userInfo);
  } catch (error) {
    res.status(401).send("error occurred while fetching user info");
  }
});

app.put("/users/:userId", async function (req, res) {
  const _id = req.params.userId;
  const tobeupdatedBody = req.body;

  try {
    const validUser = await User.findOne({ _id });
    //console.log(valiUser);
    if (!validUser) {
      return res.status(401).send("user not found");
    }
    await User.findOneAndUpdate({ _id }, tobeupdatedBody);
    res.status(201).send("user info updated");
  } catch (error) {
    console.log(error);
    res.status(401).send("error occurred while updating user info");
  }
});

// // app.delete("/users/:userId", async function (req, res) {
// //   const userId = req.params.userId;

// //   try {
// //     await User.findByIdAndDelete({ _id: userId });
// //     res.status(201).send("user deleted");
// //   } catch (error) {
// //     res.status(401).send("error occurred while deleting user");
// //   }
// // });

// //create user
app.post("/users", async function (req, res) {
  const data = req.body;
  try {
    const givenRole = data.userRole;
    const existRole = await Role.findOne({roleName:givenRole});
    if (!existRole) {
      return res.status(400).json({ error: 'Role not found' });
    }

    const userMail = data.userMail;
    const existMail = await User.findOne({userMail});
    if (existMail) {
      return res.status(400).json({ error: 'Mail already exists' });
    }

    const newUser = new User(data);
    await newUser.save();
    
    res.status(201).send("new user saved");
  } catch (error) {
    console.log(error);
    res.status(401).send("error occurred while saving new user");
  }
});

// app.put("/users/:userId/roles", async function (req, res) {
//   const username = req.params.userId;
//   const rolename = req.body.rolename;

//   const validUser = await User.findOne({ username: username });
//   const validRole = await Role.findOne({ rolename: rolename });

//   if (!validUser || !validRole) {
//     return res.status(404).send("User or Role not found");
//   }

//   try {
//     await UserRole.findOneAndUpdate({ username }, { rolename });
//     res.status(201).send("role updated");
//   } catch (error) {
//     console.log(error);
//     res.status(401).send("error occurred while updating user role");
//   }
// });


module.exports = app;
