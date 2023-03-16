import express from "express"
import Character from "../model/swapi.js"

const characters = express.Router(); 

//list route 
characters.get("/", async (req, res) => {
    const characters = await Character.find({})
    res.json(characters)
})

//get id
characters.get('/:id', async (req, res) => {
    const character = await Character.findById(req.params.id)
    res.json(character)
})

characters.post("/", async (req, res) => {
    const character = await Character.create(req.body)
    res.json(character)
})

export default characters 