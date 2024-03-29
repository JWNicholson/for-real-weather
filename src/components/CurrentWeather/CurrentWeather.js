import React, { useState } from 'react';
import axios from 'axios';
import Conditions from '../Conditions/Conditions';

//import styles from './CurrentWeather.module.css';
import {Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';

const CurrentWeather = () => {
	const api_key = 'paste your api key between these quotes';
	const weather_url = 'https://api.openweathermap.org/data/2.5/weather?';

	//set initial states
	//url parameters
	let [
		city,
		setCity
	] = useState('');
	let [
		unit,
		setUnit
	] = useState('imperial');
	//error states
	const [
		error,
		setError
	] = useState(false);
	const [
		loading,
		setLoading
	] = useState(false);
	//data states
	const [
		currWthr,
		setCurrWthr
	] = useState({});
	const [
		main,
		setMain
	] = useState('');
	const [
		weather,
		setWeather
	] = useState([]);
	const [
		wind,
		setWind
	] = useState({});
	const [
		sys,
		setSys
	] = useState({});

	function getCurrWthr (e) {
		e.preventDefault();
		if (city.length === 0) {
			return setError(true);
		}

		//reset state
		setError(false);
		setCurrWthr({});

		setLoading(true);

		// api call here
		axios
			.get(`${website_url}q=${city}&units=${unit}&appid=${api_key}`)
			.then((response) => {
				console.log('Response: ', response.data);
				//console.log("Weather: ", response.data.weather[0].icon)
				setCurrWthr(response.data);
				// OpenWeather returns a multi-nested JSON object with arrays and objects within. The following is the only way I found so far to get nested elements into props
				setMain(response.data.main);
				setWeather(response.data.weather[0]);
				setWind(response.data.wind);
				setSys(response.data.sys);

				setLoading(false);
			})
			.catch(() => {
				setError(true);
				setLoading(false);
			});
	}

	return (
	<Box m={4}>
            <Typography variant="h4" component="h2" gutterBottom>
                Current Weather
            </Typography>
			<Box m={4}>
			<form onSubmit={getCurrWthr}>
					<FormControl onSubmit={getCurrWthr}>
						
						<TextField
							id="cityInput"
							label="Enter city"
							variant="outlined"
							onChange={(e) => setCity(e.target.value)}
						/>
						<Box m={3}>
						<RadioGroup
							aria-label="unit"
							name="unit"
							value={unit}
							onChange={(e) => setUnit(e.target.value)}
						>
							<FormControlLabel value="imperial" control={<Radio />} label="F&deg;" />
							<FormControlLabel value="metric" control={<Radio />} label="C&deg;" />
						</RadioGroup >
						</Box>
						<Button type="submit" variant="contained" size="small" color="secondary">
							Get Weather
						</Button>
						</FormControl>
				</form>
                </Box>	
				<Conditions
					error={error}
					loading={loading}
					unit={unit}
					status={currWthr.cod}
					name={currWthr.name}
					temp={main.temp}
					feels_like={main.feels_like}
					low_temp={main.temp_min}
					hi_temp={main.temp_max}
					humidity={main.humidity}
					weather_icon={weather.icon}
					main_weather={weather.main}
					description={weather.description}
					wind_speed={wind.speed}
					wind_direction={wind.deg}
					sunrise={sys.sunrise}
					sunset={sys.sunset}
				/>
	</Box>
		
	);
};

export default CurrentWeather;
