import React, { useState} from 'react';
import axios from 'axios';
import Conditions from '../Conditions/Conditions';
import classes from '*.module.css';

const CurrentWeather = () => {

const KEY = process.env.REACT_APP_WTHR_API_KEY;
const BASE_URL = process.env.REACT_APP_WTHR_API_BASE_URL;

//set initial states
let [city, setCity] = useState('');
let [unit, setUnit] = useState('imperial')
const [currWthr, setCurrWthr] = useState({});
const [main, setMain] = useState('');


    function getCurrWthr(e) {
        e.preventDefault();
        // api call here
        axios
            .get(`${BASE_URL}q=${city}&units=${unit}&appid=${KEY}`)
                .then((response) => {
                        //console.log("Response: ", response.data.cod)
                        setCurrWthr(response.data);
                        // OpenWeather returns a multi-nested JSON object with arrays and objects within. The following is the only way I found so far to get nested elements into props
                        setMain(response.data.main);
                        
                })
                  .catch((error) => {
                      alert("Fetch error: ", error)
                  });  
    }
    console.log(main)
    return (
        <div>
           <h2>Current Weather Conditions</h2>
            <div>
              
                <Conditions
                 status={currWthr.cod}
                  name={currWthr.name}
                  temp={main.temp}
                  feels_like={main.feels_like}_
                />
                
            </div>
       
            <form onSubmit={getCurrWthr}>
                <input
                    type="text"
                    className={classes.textInput}
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        className={classes.radio}
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    F&deg;
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        className={classes.radio}
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    C&deg;
                </label>

                <button type="submit">Get Forecast</button>

            </form>

        </div>
    )
}

export default CurrentWeather
