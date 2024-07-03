const express = require("express");
const { STS } = require("../models/STS");
const { User } = require("../models/user");


const app = express.Router();

app.post('/sts', async function(req,res){
    const data = req.body;
    try {
        const wardNumber = data.wardNumber;
        const sts = await STS.findOne({wardNumber});
        
        if(sts){
            return res.status(401).send('STS by this name already exists');
        }
        const userIds = data.stsManagers;
        console.log(userIds);
        for (const userId of userIds) {
            //console.log(userId);
            const user  = await User.findOne({_id:userId});
            if(user.userRole!="STS Manager") {
                return res.status(401).send('user is not STS Manager');
            }
        }
        const newSTS = new STS(data);
        await newSTS.save();
        res.status(201).send('new STS is created');
    } catch (error) {
        console.log(error);
        res.status(401).send('error occurred while creating new STS');
    }

})

app.get('/sts', async function(req,res){
    const data = req.body;
    try {
        const allSTS = await STS.find({});
        res.status(201).send(allSTS);
    } catch (error) {
        res.status(401).send('error occurred while fetching all STS');
    }

})

app.post("/sts/:stsId/vehicles", async function (req, res) {
  const stsId = req.params.stsId;
  const vehicleIds = req.body.vehicleIds; // Assuming you're passing an array of vehicle IDs

  try {
    const sts = await STS.findOne({ _id: stsId });
    if (!sts) {
      return res.status(404).send("No STS found with this ID");
    }

    sts.vehicles.push(...vehicleIds);

    await sts.save();

    //console.log("Vehicles added to STS:", sts.vehicles);
    res.status(201).send("Vehicles added to STS");
  } catch (error) {
    console.error(error);
    res.status(401).send("Error occurred while adding vehicles to STS");
  }
});



app.get("/sts/:stsId/vehicles", async function (req, res) {
    const stsId = req.params.stsId;
 
    try {
      const sts = await STS.findOne({ _id: stsId });
      if (!sts) {
        return res.status(404).send("No STS found with this ID");
      }
  
      console.log(sts.vehicles);
      res.status(201).send(sts.vehicles);
    } catch (error) {
      console.error(error);
      res.status(401).send("Error occurred while adding vehicles to STS");
    }
  });



  app.post("/sts/:stsId/stsVehicles", async function (req, res) {
    const stsId = req.params.stsId;
    const vehicleIds = req.body.vehicleIds; // Assuming you're passing an array of vehicle IDs
  
    try {
      const sts = await STS.findOne({ _id: stsId });
      if (!sts) {
        return res.status(404).send("No STS found with this ID");
      }
  
      sts.vehicles.push(...vehicleIds);
  
      await sts.save();
  
      //console.log("Vehicles added to STS:", sts.vehicles);
      res.status(201).send("Vehicles added to STS");
    } catch (error) {
      console.error(error);
      res.status(401).send("Error occurred while adding vehicles to STS");
    }
  });

module.exports = app;
