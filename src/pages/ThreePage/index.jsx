import React, { useState } from 'react';
import './index.css';
import { weatherData } from '../../axios';

function ThreePage() {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const MY_WEATHER_API_KEY = "9fa5dee2a70257f8ac7554f0e73f2e71";

  function validate() {
    if (!cityName) {
      alert("Shahar nomini kiritishingiz kerak!");
      return false;
    }
    return true;
  }

  function handleAddCity(event) {
    event.preventDefault();

    let isValid = validate();
    if (!isValid) {
      return;
    }

    weatherData.get(`2.5/weather?q=${cityName}&appid=${MY_WEATHER_API_KEY}&units=metric`)
      .then(response => {
        if (response.status === 200) {
          setData(response.data);
          setError(false);
        }
      })
      .catch(err => {
        setError(true);
        console.log(err);
      });

    setCityName("");
  }

  return (
    <div className='container'>
      <h2 className='titleOne'>Howework Three</h2>

      <form onSubmit={handleAddCity} className='form'>
        <label htmlFor="city">Biror bir shaharni kiriting:</label>
        <input
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          id='city'
          name='city'
          type="text"
          placeholder='Enter city name...'
        />
        <button className='buttonOne'>Search</button>
      </form>

      <div className="datas">
        <div className="dataOne">
          {error && <p>Bunday shahar topilmadi!</p>}
          {data && data.main && (
            <ul>
              <li><strong>Harorat:</strong>{" "} {data.main.temp}°C</li>
              <li><strong>Namlik:</strong>{" "} {data.main.humidity}%</li>
              <li><strong>Shamol tezligi:</strong>{" "} {data.wind.speed} m/s</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ThreePage;