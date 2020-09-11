import React from 'react';
import styles from './Conditions.module.css';

const Conditions = (props) => {
console.log("Unit",props.unit)
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
                    <p><strong>Temperature is {Math.round(props.temp)} F&deg;</strong></p>
                    <p><strong>Feels like {Math.round(props.feels_like)} F&deg;</strong></p>
                  </div>
                :
                 <div>
                    <p><strong>Temperature is {Math.round(props.temp)} C&deg;</strong></p>
                    <p><strong>Feels like {Math.round(props.feels_like)} C&deg;</strong></p>
                 </div>
            }
                   
               
                
               
                <h6>Response Code is {props.status}</h6>
            </div> : 
                   null
                }
       </div>
  
    )
}

export default Conditions;

