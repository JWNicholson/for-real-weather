import React, { useState} from 'react';
import axios from 'axios';
import Conditions from '../Conditions/Conditions';

import styles from  './CurrentWeather.module.css'

const CurrentWeather = () => {

const KEY = process.env.REACT_APP_WTHR_API_KEY;
const BASE_URL = process.env.REACT_APP_WTHR_API_BASE_URL;

//set initial states
//url parameters
let [city, setCity] = useState('');
let [unit, setUnit] = useState('imperial');
//error states
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
//data states
const [currWthr, setCurrWthr] = useState({});
const [main, setMain] = useState('');


    function getCurrWthr(e) {
        e.preventDefault();
        if(city.length === 0){
            return setError(true);
        }

        //reset state
        setError(false);
        setCurrWthr({});
        
        setLoading(true);

        // api call here
        axios
            .get(`${BASE_URL}q=${city}&units=${unit}&appid=${KEY}`)
                .then((response) => {
                        //console.log("Response: ", response.data.cod)
                        setCurrWthr(response.data);
                        // OpenWeather returns a multi-nested JSON object with arrays and objects within. The following is the only way I found so far to get nested elements into props
                        setMain(response.data.main);
                        
                        setLoading(false);
                })
                  .catch(() => {
                      setError(true);
                      setLoading(false);
                  });  
    }
    console.log(main)
    return (
        <div className={styles.weatherWrapper}>
           <h2>Current Weather Conditions</h2>
            <div >

            <form onSubmit={getCurrWthr}>
                <input
                    type="text"
                    className={styles.textInput}
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        className={styles.radio}
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
                        className={styles.radio}
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    C&deg;
                </label>

                <button type="submit" className={styles.Button}>Get Forecast</button>

            </form>
              
                <Conditions
                  error={error}
                  loading={loading}
                  status={currWthr.cod}
                  unit={unit}
                  name={currWthr.name}
                  temp={main.temp}
                  feels_like={main.feels_like}_
                />
                
            </div>
       
           

        </div>
    )
}

export default CurrentWeather
