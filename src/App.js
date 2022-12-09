// Example taken from: https://dev.to/imshines/a-simple-weather-app-using-react-and-openweathermap-api-10m2

import logo from './logo.svg';
import './styles/App.css';
import React from 'react';
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
