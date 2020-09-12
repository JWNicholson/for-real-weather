import React from 'react';
import styles from './Conditions.module.css';
import { Typography } from '@material-ui/core';


const Conditions = (props) => {
//console.log("Unit",props.unit)
//console.log("Humidity ", props.humidity)
// console.log("wind speed: ", props.wind_speed)
// console.log("wind direction ", props.wind_direction)


    return (
     <div >
           {props.error && <small className={styles.error}>Enter a valid city.</small>}
           {props.loading && <div className={styles.Loader} />}
           {props.status === 200 ? 
           <div>
              <Typography variant="h4" component="h3" gutterBottom>
               {props.name}
              </Typography>
                
                {/* {props.temp && props.unit==="imperial" ? <div>YES</div> : <div>NO</div>} */}

               {props.temp && props.unit==="imperial" ?
                  <Typography>
                    <p><strong>Temperature {Math.round(props.temp)}</strong> F&deg;</p>
                    <p><strong>Feels like {Math.round(props.feels_like)}</strong> F&deg;</p>
                  </Typography>
                :
                 <Typography>
                    <p><strong>Temperature {Math.round(props.temp)}</strong> C&deg;</p>
                    <p><strong>Feels like {Math.round(props.feels_like)}</strong> C&deg;</p>
                 </Typography>
            }

              <Typography>
                  <p><strong>Humidity</strong> {Math.round(props.humidity)}%</p>
                  <p><strong>Wind</strong> {Math.round(props.wind_speed)}</p>
                  <p><strong>Direction</strong> {Math.round(props.wind_direction)}&deg;</p>
                  <p><strong>Conditions</strong> - {props.main_weather}</p>
                  </Typography>
               
               <div>
               <img src={"http://openweathermap.org/img/wn/" + props.weather_icon + "@2x.png"} alt="weather icon"/>
               </div>
                {/* <h6>Response Code is {props.status}</h6> */}
            </div> : 
                   null
                }
       </div>
  
    )
}

export default Conditions;

