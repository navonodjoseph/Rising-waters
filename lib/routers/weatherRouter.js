import express from "express"
import WeatherForecast from "../model/weather.js"

const weather = express.Router(); 

//list route 
weather.get("/", async (req, res) => {
    const weather = await WeatherForecast.find({})
    res.json(weather)
})

weather.get("/:name", async (req, res) => {
    const weather = await WeatherForecast.findOne({name: req.params.name})
    res.json(weather)
})

// weather.post("/", async (req, res) => {
//     const weather = await WeatherForecast.create(req.body)
//     res.json(weather)
// })

export default weather 