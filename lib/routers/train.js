import express from "express"
import Train from "../model/train.js"

const train = express.Router(); 

//list route 
train.get("/", async (req, res) => {
    const train = await Train.find({})
    res.json(train)
})

train.post("/", async (req, res) => {
    const train = await Train.create(req.body)
    res.json(train)
})

export default train 