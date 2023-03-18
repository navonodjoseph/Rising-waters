import mongoose from "./connection.js";
import WeatherForecast from "../model/weather.js"
import weather from "../routers/weatherRouter.js";
import Train from "../model/train.js"
import train from "../routers/train"


WeatherForecast
    .insertMany({weather})
    .then(mongoose.disconnect)
    .then(()=> console.log("done"))
    .catch(()=> console.log("err"))

Train
    .insertMany({train})
    .then(mongoose.disconnect)
    .then(()=> console.log("done"))
    .catch(()=> console.log("err"))
