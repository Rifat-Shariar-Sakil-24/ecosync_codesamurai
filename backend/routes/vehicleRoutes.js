const express = require("express");
const { Vehicle } = require("../models/Vehicle");
const { STSVehicle } = require("../models/STSvehicle");

const app = express.Router();

// app.post('/vehicles',async function(req,res){
//     const data = req.body;
//     data.vehiclestatus = "Idle";
//     try {
//         const newVehicle = new Vehicle(data);
//         await newVehicle.save();
//         res.status(201).send('new vehicle created');
//     } catch (error) {
//         console.log(error);
//         res.status(401).send('error occurred while creating new vehicle');
//     }
// })

// app.get('/vehicles',async function(req,res){
   
//     try {
//         const allVehicles = await Vehicle.find({});
//         res.status(201).send(allVehicles);
//     } catch (error) {
//         //console.log(error);
//         res.status(401).send('error occurred while fetching all vehicles');
//     }
// })



// app.post('/vehicles/stsvehicles', async function(req,res){
//     const data = req.body;
//     try {
//         const newStsVehicle = new STSVehicle(data);
//         await newStsVehicle.save();
//         res.status(201).send('new STS vehicle created');
//     } catch (error) {
//       //  console.log(error);
//         res.status(401).send('error occurred while creating new STS vehicle');
//     }
// })

// app.get('/vehicles/stsvehicles', async function(req,res){
    
//     try {
//         const allSTSVehicles = await STSVehicle.find({});
//         res.status(201).send(allSTSVehicles);
//     } catch (error) {
//         //console.log(error);
//         res.status(401).send('error occurred while fetching all STS vehicle');
//     }
// })


module.exports = app;
