# Transporatation and weather alerts
The city of Boston has a well-documented API for its public transporatation, including up-to-date information on transportation alerts. 

## Summary: 
I choose this project because I wanted to work with a well-documented API that provided real-time updates with a dataset that I wan not familiar with before the project. 

### Boston transportation
This is also the first ever API I've built, and I'm proud of the breadth of data I was able to work with. The MBTA has dozens (likely hundreds) of data end-points. After reading more about the dataset on the City's Swagger page, I realized that the `/alerts` endpoint would come with challenges, specifically finding how to build the correct path to get a general alert. This took me some time, and, after familiarizing myself with the city's API, I was able to build out the correct path for my purposes, `https://api-v3.mbta.com/alerts?page%5Boffset%5D=0&page%5Blimit%5D=3&sort=active_period&filter%5Bactivity%5D=BOARD%2CEXIT%2CRIDE&filter%5Bdatetime%5D=%22NOW%22`. That's a long path, right? 

### Weather
The other data component the weather API from the National Weather Service to get an API that highlights up-to-date city and weather alerts for Boston. 
