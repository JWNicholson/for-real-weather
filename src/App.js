import React from 'react';

import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Real Weather
      </header>
     <main>
       <CurrentWeather />
     </main>

      <footer>
        by John Nicholson
      </footer>
    </div>
  );
}

export default App;
