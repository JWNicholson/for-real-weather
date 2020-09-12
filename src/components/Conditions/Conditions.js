import React from 'react';
import styles from './Conditions.module.css';

import { TableContainer, Typography, Paper, Table, TableRow, TableCell, TableBody } from '@material-ui/core';


const Conditions = (props) => {
	//console.log("Unit",props.unit)
	//console.log("Humidity ", props.humidity)
	// console.log("wind speed: ", props.wind_speed)
	// console.log("wind direction ", props.wind_direction)

	

	return (
		
		<div>
			
			{props.error && <small className={styles.error}>Enter a valid city.</small>}
			{props.loading && <div className={styles.Loader} />}

			{props.status === 200 ? (
				//start table
            // check if there is a way to eliminate writing props.unit check twice in mui tables
				<div id="startOutput">
					<Typography variant="h4" component="h3" gutterBottom>
						{props.name}
					</Typography>

					<TableContainer component={Paper}>
						<Table aria-label="weather table">
							<TableBody>
								<TableRow>
									<TableCell>Temperature</TableCell>
									{props.unit === 'imperial' ? (
										<TableCell align="left">{Math.round(props.temp)} F&deg;</TableCell>
									) : (
										<TableCell align="left">{Math.round(props.temp)} C&deg;</TableCell>
									)}
								</TableRow>

								<TableRow>
									<TableCell>Feels like</TableCell>

									{props.unit === 'imperial' ? (
										<TableCell align="left">{Math.round(props.feels_like)} F&deg;</TableCell>
									) : (
										<TableCell align="left">{Math.round(props.feels_like)} C&deg;</TableCell>
									)}
								</TableRow>

								<TableRow>
									<TableCell>Humidity</TableCell>
									<TableCell align="left">{Math.round(props.humidity)}%</TableCell>
								</TableRow>

								<TableRow>
									<TableCell>Wind</TableCell>

                           {props.unit === "imperial" ?
                              <TableCell align="left">{Math.round(props.wind_speed)}mh</TableCell>
                            :
                            <TableCell align="left">{Math.round(props.wind_speed)}kh</TableCell>
                            }
								</TableRow>

								<TableRow>
									<TableCell>Wind direction</TableCell>
									<TableCell align="left">{Math.round(props.wind_direction)}&deg;</TableCell>
								</TableRow>

								<TableRow>
									<TableCell>Conditions</TableCell>
									<TableCell align="left">{props.main_weather}</TableCell>
								</TableRow>

								
							</TableBody>
						</Table>

                  <Table>
                     <TableBody>
                     <TableRow>
									<TableCell align="center">
										<img
											src={'http://openweathermap.org/img/wn/' + props.weather_icon + '@2x.png'}
											alt="weather icon"
										/>
									</TableCell>
								</TableRow>
                     </TableBody>
                  </Table>


					</TableContainer>
					{/* end table */}
				</div>
			) : null}
		</div>
	);
};

export default Conditions;
