import express, { response } from "express" 
const app = express();
import axios from "axios"; 
import weather from "./routers/weatherRouter.js"
import Weather from "./model/weather.js"

//active APIs 
const url = "https://api.weather.gov/gridpoints/BOX/71,90/forecast"

//middleware 
app.use(express.json());

//axios request weather 
axios.get(url)
.then((result) =>{
    //console.log(result.data.properties.periods); 
      let resultData = result.data.properties.periods
    //   console.log(result.data.results.length)
    for (let i = 0; i < resultData.length; i++){
        console.log(resultData.length)
    Weather.create({
        name: resultData[i].name, 
        startTime: resultData[i].startTime, 
        isDayTime: resultData[i].isDayTime, 
        temperatureUnit: resultData[i].temperatureUnit, 
        detailedForecast: resultData[i].detailedForecast
        })
    }
}).catch((err) => {
    console.log(err)
})




    app.get("/", async (req,res) => {
    res.send("---Hello world---")
})

app.use("/weather", weather)


app.listen(3000, ( ) => {
    console.log("listening on port 3000")
})


