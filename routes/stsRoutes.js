const express = require("express");
const { STS } = require("../models/STS");


const app = express.Router();

app.post('/sts', async function(req,res){
    const data = req.body;
    try {
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
module.exports = app;
