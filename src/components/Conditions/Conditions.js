import React from 'react';
import styles from './Conditions.module.css';



const Conditions = (props) => {
//console.log("Unit",props.unit)
console.log("Humidity ", props.humidity)
// console.log("wind speed: ", props.wind_speed)
// console.log("wind direction ", props.wind_direction)


    return (
     <div >
           {props.error && <small className={styles.error}>Enter a valid city.</small>}
           {props.loading && <div className={styles.Loader} />}
           {props.status === 200 ? 
           <div>
                <h3>{props.name}</h3>
                {/* {props.temp && props.unit==="imperial" ? <div>YES</div> : <div>NO</div>} */}

               {props.temp && props.unit==="imperial" ?
                  <div>
                    <p><strong>Temperature {Math.round(props.temp)} F&deg;</strong></p>
                    <p><strong>Feels like {Math.round(props.feels_like)} F&deg;</strong></p>
                  </div>
                :
                 <div>
                    <p><strong>Temperature {Math.round(props.temp)} C&deg;</strong></p>
                    <p><strong>Feels like {Math.round(props.feels_like)} C&deg;</strong></p>
                 </div>
            }
                  <p><strong>Humidity</strong> {Math.round(props.humidity)}%</p>

                  <p><strong>Wind</strong> {Math.round(props.wind_speed)}</p>
                  <p><strong>Direction</strong> {Math.round(props.wind_direction)}&deg;</p>
                  
            <div>
               <p><strong>Conditions</strong> - {props.main_weather}</p>
            </div>
                   
               <div>
               <img src={"http://openweathermap.org/img/wn/" + props.weather_icon + "@2x.png"} alt="weather icon"/>
               <div>
               {/* {capitalize_eachWord(capDescription)} */}
               {/* {props.description} */}
               </div>
               </div>
                {/* <h6>Response Code is {props.status}</h6> */}
            </div> : 
                   null
                }
       </div>
  
    )
}

export default Conditions;

