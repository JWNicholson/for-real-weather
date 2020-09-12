import React from 'react';
import { Card, Container, Paper, Typography } from '@material-ui/core';
import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
     <Container maxWidth="sm" >
       <Card>
       <CurrentWeather />
       </Card>
     </Container>

      <footer>
        <Typography variant="h6">
          by John Nicholson
        </Typography>
      </footer>
    </div>
  );
}

export default App;
