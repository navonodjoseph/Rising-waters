# Transporatation and weather alerts
The city of Boston has a well-documented API for its public transporatation, including up-to-date information on transportation alerts. For my first API project, I decided to dig into this dataset using Express, MongoDB, and Postman. 

## Summary: 
I choose this project because I wanted to work with a well-documented API that provided real-time updates with a complex dataset. The [MBTA V3 API](https://www.mbta.com/developers/v3-api) provides live bus and train schedules. You can also call train/bus predictions, find parking lots, bike racks, or see a comprehensive list of road alerts. Even escalator information is available here. 

### Boston transportation (`/trains`)
This is also the first ever API I've built, and I'm proud of the span of data I was able to work with. The MBTA has dozens (likely hundreds) of data end-points. I love the potential of this dataset. It really does have information that makes life easier for anybody in Boston, especially if you're trying to find a parking lot or need an escalator. After reading more about the dataset on the [City's Swagger page](https://api-v3.mbta.com/docs/swagger/index.html#/Alert/ApiWeb_AlertController_index), I realized that the `/alerts` endpoint would be a really great place to start. Because I'm so new to these concepts, I really wanted to make sure I was both proerly engaging with the massive dataset, but also not breaking off more than I could chew. The complexity of this dataset really grows when you add in the APIs other features like `/predictions` and `/routes`, and I could see myself building out the functionality as a stretch project down the line. 

### Transportation Endpoints
These are the current endpoints for `/trains`. 
|  URL       | PATH | METHOD | DESCRIPTION                           |
|------------|------|--------|---------------------------------------|
| /trains    | /    | GET    | lists city-wide transportation alerts |
| /trains/id | /id  | GET    | alert for specific dataset            |
| /trains    | /    | POST   | update/create transportation alert    |
| /trains/id | /id  | DELETE | delete transportation alert           |


### Weather (`/weather`)
The other data component the weather API from the [National Weather Service](https://www.weather.gov/documentation/services-web-api) to get an API that highlights up-to-date and weather alerts for Boston. 

### Weather Endpoints
These are the current endpoints for `/weather`.
|  URL          | PATH | METHOD | DESCRIPTION              |
|---------------|------|--------|--------------------------|
| /weather      | /    | GET    | lists 7-day forecast     |
| /weather/date | /day | GET    | forecast on specific day |


### What I learned
This project was completed as part of my Software Engineering course at General Assembly. It marked a couple important first in my development as a software engineer. Before this project, I had never made an Axios request. I ended up making two concurrent requests using an API key. It wasn't necessarily hard to do, but it did require me to loop through the dataset and build a corresponding model that seeded the data to MongoDB. 
```
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
        ...
```
#### Error handling and asynchronous code 
This is also my first project where I used `async` `await`, and `catch` which helped me log errors and work through some of the issues I had creating a correct path with the MBTA dataset. 
* improving my ability to read documentation 
* error handling 
