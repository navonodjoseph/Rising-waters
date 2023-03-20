# Transporatation and weather alerts
The city of Boston has a well-documented API for its public transporatation, including up-to-date information on transportation alerts. For my first API project, I decided to dig into this dataset. 

## Summary: 
I choose this project because I wanted to work with a well-documented API that provided real-time updates with a complex dataset. The [MBTA V3 API](https://www.mbta.com/developers/v3-api) provides real-time information to schedules and alerts. You can also call train/bus predictions, find parking lots, and bike racks. Even escalator information is available here. 

### Boston transportation
This is also the first ever API I've built, and I'm proud of the breadth of data I was able to work with. The MBTA has dozens (likely hundreds) of data end-points. After reading more about the dataset on the [City's Swagger page](https://api-v3.mbta.com/docs/swagger/index.html#/Alert/ApiWeb_AlertController_index), I realized that the `/alerts` endpoint would come with challenges, specifically finding how to build the correct path to get a general alert. After some trial and error, I was able to generate the correct path for my purposes. 


### Weather
The other data component the weather API from the [National Weather Service](https://www.weather.gov/documentation/services-web-api) to get an API that highlights up-to-date city and weather alerts for Boston. 

### Weather Endpoints
|  URL          | PATH | METHOD | DESCRIPTION              |
|---------------|------|--------|--------------------------|
| /weather      | /    | GET    | lists 7-day forecast     |
| /weather/date | /day | GET    | forecast on specific day |


### Transportation Endpoints
|  URL       | PATH | METHOD | DESCRIPTION                           |
|------------|------|--------|---------------------------------------|
| /trains    | /    | GET    | lists city-wide transportation alerts |
| /trains/id | /id  | GET    | alert for specific dataset            |
| /trains    | /    | POST   | update/create transportation alert    |
| /trains/id | /id  | DELETE | delete transportation alert           |
