import express, { response } from "express" 
const app = express();
import axios from "axios"; 
import characters from "./routers/characterRouter.js"
import Character from "./model/swapi.js"
import weather from "./routers/weatherRouter.js"
import Weather from "./model/weather.js"

import fs, { readFile, writeFile }  from "fs" 


const url = "https://api.weather.gov/gridpoints/BOX/71,90/forecast"

//middleware 
app.use(express.json());

//axios request 
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
// fs.readFile('./db/test.txt', (err, data)=> {
//     if(err) throw err; 
//     console.log(data.toString());
// })


// const dataSet = JSON.stringify(swappiData.data); 

// fs.writeFile('./db/swapi2.json', dataSet, err =>{
//     if(err)
//     console.log(err);
//     else{
//         console.log("File has been writtten successfully")
//     }
// }) 


//app.use("/char", characters)
app.use("/weather", weather)


app.listen(3000, ( ) => {
    console.log("listening on port 3000")
})


