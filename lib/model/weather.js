import mongoose from "../db/connection.js"

const WeatherForecast = new mongoose.Schema({
    name: String, 
    startTime: String, 
    isDaytime: String, 
    temperatureUnit: String, 
    detailedForecast: String,  
})

export default mongoose.model("WeatherForecast", WeatherForecast); 