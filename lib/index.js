import express, { response } from "express" 
const app = express();
import axios from "axios"; 
import weather from "./routers/weatherRouter.js"
import Weather from "./model/weather.js"
import train from "./routers/train.js";
import Train from "./model/train.js";

//testing connection
process.on("uncaughtException", function (err){
    console.log(err)
})

//active APIs 
const url = "https://api.weather.gov/gridpoints/BOX/71,90/forecast"
const mbtaUrl = "https://api-v3.mbta.com/alerts?page%5Boffset%5D=0&page%5Blimit%5D=3&sort=active_period&filter%5Bactivity%5D=BOARD%2CEXIT%2CRIDE&filter%5Bdatetime%5D=%22NOW%22"
const key = "92412f9a2666460aa165374119e7e1dc"

//middleware 
app.use(express.json());


//this works
// axios.get(url)
// .then((result) =>{
//     //console.log(result.data.properties.periods); 
//       let resultData = result.data.properties.periods
//     //   console.log(result.data.results.length)
//     for (let i = 0; i < resultData.length; i++){
//         console.log(resultData.length)
//     Weather.create({
//         name: resultData[i].name, 
//         startTime: resultData[i].startTime, 
//         isDayTime: resultData[i].isDayTime, 
//         temperatureUnit: resultData[i].temperatureUnit, 
//         detailedForecast: resultData[i].detailedForecast
//         })
//     }
// }).catch((err) => {
//     console.log(err)
// })


axios({
    method: "get", 
    url: mbtaUrl,
    params: {
    api_key: "92412f9a2666460aa165374119e7e1dc"
   } 
}).then(function(result){
    //console.log(result.data.data)
    let trainData = result.data.data
    //console.log(trainData.length); 
    for (let i = 0; i<trainData.length; i++){
        Train.create({
            cause: trainData[i].cause,
            created_at: trainData[i].created_at,
            effect: trainData[i].effect, 
            header: trainData[i].header, 
            severity: trainData[i].severity,
            timeframe: trainData[i].timeframe, 
            updated_at: trainData[i].updated_at
        })
    }
}).catch((err) =>{
    console.log("there is some kind of error", err)
})

    app.get("/", async (req,res) => {
    res.send("---Hello world---")
})

app.use("/weather", weather)
app.use("/train", train)

app.listen(3000, ( ) => {
    console.log("listening on port 3000")
})


