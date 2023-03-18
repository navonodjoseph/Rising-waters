import Train from "../model/train.js"
import WeatherForecast from "../model/weather.js"

const alertSchema = new Schema({alert: String})

const parentSchema = new Schema ({
    children: [alertSchema]
}) 

// async function alertSeed(){
//     const weatherData = await WeatherForecast.find({})
//     weatherData.forEach(async (d) => {
//         const t = await Train.find({header: d.trainData})
//     })
// }