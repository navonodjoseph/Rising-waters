import express from "express"
import Train from "../model/train.js"
const train = express.Router(); 

//list routes 
train.get("/", async (req, res) => {
    const train = await Train.find({})
    res.json(train)
})

train.get('/:id', async(req, res) =>{
    const characters = await Train.findById(req.param.id)
    res.json(character)
})

train.post("/", async (req, res) => {
    const train = await Train.create(req.body)
    res.json(train)
})

train.delete("/:id", async (req, res) => {
    const train = await Train.findOneAndDelete(
        {id: req.params.id},
        req.body,
        {new: true},
        ) 
    res.json(train)
})

export default train 