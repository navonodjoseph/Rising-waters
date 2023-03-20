# Boston Transportation API 
The city of Boston has a well-documented API for its public transportation, including up-to-date information on transportation alerts. For my first API project, I decided to dig into this dataset using Express, MongoDB, and Postman. 

I choose this project because I wanted to work with a well-documented API that provided real-time updates with a complex dataset. The [MBTA V3 API](https://www.mbta.com/developers/v3-api) provides live bus and train schedules. You can also call train/bus predictions, find parking lots, bike racks, or see a comprehensive list of road alerts. Even escalator information is available here. 

### Boston transportation (`/trains`)
This is also the first ever API I've built, and I'm proud of the span of data I was able to work with. The MBTA has dozens (likely hundreds) of data endpoints. I love the potential of this dataset. It does have information that makes life easier for anybody in Boston, especially if you're trying to find a parking lot or need an escalator. After reading more about the dataset on the [city's Swagger page](https://api-v3.mbta.com/docs/swagger/index.html#/Alert/ApiWeb_AlertController_index), I realized that the `/alerts` endpoint would be a great place to start. Because I'm so new to these concepts, I wanted to make sure I was both properly engaging with the massive dataset, but also not breaking off more than I could chew. The complexity of this dataset grows when you add in the APIs other features like `/predictions` and `/routes`, and I could see myself building out the functionality as a stretch project down the line. 

### Transportation Endpoints
These are the current endpoints for `/trains`. 
|  URL       | PATH | METHOD | DESCRIPTION                           |
|------------|------|--------|---------------------------------------|
| /trains    | /    | GET    | lists city-wide transportation alerts |
| /trains/id | /id  | GET    | alert for specific dataset            |
| /trains    | /    | POST   | update/create transportation alert    |
| /trains/id | /id  | DELETE | delete transportation alert           |


### Weather (`/weather`)
The other data component is the weather API from the [National Weather Service](https://www.weather.gov/documentation/services-web-api) to get an API that highlights up-to-date weather alerts for Boston. 

### Weather Endpoints
These are the current endpoints for `/weather`.
|  URL          | PATH | METHOD | DESCRIPTION              |
|---------------|------|--------|--------------------------|
| /weather      | /    | GET    | lists 7-day forecast     |
| /weather/date | /day | GET    | forecast on specific day |


### What I learned
This project was completed as part of my Software Engineering course at General Assembly. It marked a couple of important first in my development as a software engineer.

#### Axios requests 
I ended up making two concurrent requests using an API key. It wasn't necessarily hard to do, but it did require me to loop through the dataset and build a corresponding model that seeded the data to MongoDB. 
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
This is also my first project where I used `async` `await`, and `catch` which helped me log errors and work through some of the issues I had debugging and knowing where my issues were. I'm just scratching the surface with error handling, but I realize now how essential it is to build an application. 

#### Improving my ability to read the documentation 
At this point in my development, I've begun to rely more on documentation to understand key concepts of Node.js, Express, and Mongoose. 

### Possible next steps
There is so much more to do with this project. I could see further exploring the MBTA V3 API to make the database more useful. Adding the prediction feature or even plotting the parking lots in the city would add to my project's utility and meaning. 

Another possible route would be to explore historical transportation trends. The MBTA also has a large dataset that charts the usage of specific lines dating back to 2016. I could find a way to chart this information to illustrate greater trends in the evolution of transportation in Boston.  
