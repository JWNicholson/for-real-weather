
<h1>For Real Weather</h1>
This project is an app, using Open Weather Map's API JSON to display data in a card.Ultimately, it is an exercise passing props through React components.

![app-example](https://github.com/JWNicholson/for-real-weather/blob/master/images/ForRealWeather-2_JWNicholson-sm.jpg) 

<h2>WHY?</h2>
I wanted to build yet another weather app, concentrating on form controlled dynamic data using Material-UI for styling. 
Working with API's can be fun, they're like a puzzle. Open Weather Map's response has objects that are 2 or more layers deep, sometimes in an array. This makes it good for   practing traversing JSON, which can take a little time to get comfortable with.
 Due to time constraints I avoided Test Driven Developement for the start of this project.

<h3>Build status -</h3>
Working & Ongoing.I plan to add features later such as:    

* Changing the temperature measuremnt radio button to a slider

* Converting Wind Direction from degrees to SSE, N, etc. 

* Dynamically changing backgrounds corresponding to weather data and time of day.

<h3>Example JSON data</h3>

    {
      "coord": {"lon": -122.08,"lat": 37.39},
      "weather": [
     {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
    ],
      "base": "stations",
      "main": {
        "temp": 282.55,
        "feels_like": 281.86,
        "temp_min": 280.37,
        "temp_max": 284.26,
        "pressure": 1023,
        "humidity": 100
      },
     .....
    }
  

<h3>Tech stack used</h3>

* React js - https://reactjs.org/docs/getting-started.html

* Create React - App https://github.com/facebook/create-react-app

* Create React App's built in environment variables to protect the API from being loaded to this respository.

<h3>React Dependencies Added</h3>

* Axios js for the API call.- https://github.com/axios/axios

* Material-UI for styling. -https://material-ui.com/
    
<h2></h2>
Feel free to fork this repo and start learning. I am going to asume you know something about React,HTML,and CSS already.

After forking and cloning the master branch: 
* Run 'npm install' in your command line, to install the dependencies.
* In CurrentWeather.js, paste your API key between the single quotes in the const api_key.
* Head over to Open Weather Map and get started. Make sure the API call url hasn't changed. If it has, change the const weather_url accordingly.

API-https://openweathermap.org/guide

They have an excellent free plan. Just make an account, subscribe to a data set, and generate your api key. I recommend starting with Current Weather data set - https://openweathermap.org/current. Documentations is on that page.

