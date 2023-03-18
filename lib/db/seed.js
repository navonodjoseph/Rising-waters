import axios from "axios"
import Train from "../model/train.js"
import WeatherForecast from "../model/weather.js"

//active APIs 
const url = "https://api.weather.gov/gridpoints/BOX/71,90/forecast"
const mbtaUrl = "https://api-v3.mbta.com/alerts?page%5Boffset%5D=0&page%5Blimit%5D=3&sort=active_period&filter%5Bactivity%5D=BOARD%2CEXIT%2CRIDE&filter%5Bdatetime%5D=%22NOW%22"


async function seed() {
    await WeatherForecast.deleteMany({})
    await Train.deleteMany({})

    axios.get(url)
        .then((result) => {
            //console.log(result.data.properties.periods); 
            let resultData = result.data.properties.periods
            //   console.log(result.data.results.length)
            for (let i = 0; i < resultData.length; i++) {
                console.log(resultData.length)
                WeatherForecast.create({
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


    axios({
        method: "get",
        url: mbtaUrl,
        params: {
            api_key: "92412f9a2666460aa165374119e7e1dc"
        }
    })
        .then(function (result) {
            //console.log(result.data.data)
            let trainData = result.data.data
            console.log(trainData);
            for (let i = 0; i < trainData.length; i++) {
                console.log(trainData.length)
                Train.create({
                    cause: trainData[i].attributes.cause,
                    created_at: trainData[i].attributes.created_at,
                    effect: trainData[i].attributes.effect,
                    header: trainData[i].attributes.header,
                    severity: trainData[i].attributes.severity,
                    timeframe: trainData[i].attributes.timeframe,
                    updated_at: trainData[i].attributes.updated_at
                })
            }
        }).catch((err) => {
            console.log("something isn't right", err)
        })


}

