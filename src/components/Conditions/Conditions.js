import React from 'react';
import styles from './Conditions.module.css';

const Conditions = (props) => {

    return (
     <div >
     
           {props.error && <small className={styles.error}>Enter a valid city.</small>}
           {props.loading && <div className={styles.Loader} />}
           {props.status === 200 ? 
           <div>
                <h3>{props.name}</h3>
                <p><strong>Temperature is {Math.round(props.temp)}</strong></p>
                <p><strong>Feels like {Math.round(props.feels_like)}</strong></p>
                <h6>Response Code is {props.status}</h6>
            </div> : 
                   null
                }
       </div>
  
    )
}

export default Conditions;

