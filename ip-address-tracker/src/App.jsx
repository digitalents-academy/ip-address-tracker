import { useState } from 'react';
import axios from 'axios';
import arrow from "./assets/images/icon-arrow.svg";
import "./styles/App.css";

function App() {
  const [query, setQuery] = useState(null);
  const [result, setResult] = useState(null);

  function isNumber(char) {
    return /^\d+$/.test(char);
  }
  
  async function address() {
    const apiKey = "at_xqIYtoLkrk8OBkudtIizO5uRzKTVG";
  
    try {
      let response;
      if (isNumber(query[0])) {
        response = await axios.get("https://geo.ipify.org/api/v2/country,city?apiKey=at_xqIYtoLkrk8OBkudtIizO5uRzKTVG&ipAddress=" + query, { params: { apiKey: apiKey } })
      } else {
        response = await axios.get("https://geo.ipify.org/api/v2/country,city?apiKey=at_xqIYtoLkrk8OBkudtIizO5uRzKTVG&domain=" + query, { params: { apiKey: apiKey } })
      }
      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.error('Something went wrong getting Geolocation from API!', error);
    }
  }

  return (
    <div className="main">
      <div className="input-main">
        <div className="input-title">IP Address Tracker</div>
        <div className="input-field">
          <input
            className="input" 
            placeholder="Search for any IP address or domain"
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="input-button">
            <img src={arrow} className="input-arrow" onClick={() => address()}/>
          </div>
        </div>
      </div>
      {result && (
        <div className="card">
        <div className="card-image">
          <p className='header'>IP ADDRESS</p>
          <p className='result'>{result.ip}</p>
        </div>
        <div className="card-image">
          <p className='header'>LOCATION</p>
          <p className='result'>{result.location.region}</p>
        </div>
        <div className="card-image">
          <p className='header'>TIMEZONE</p>
          <p className='result'>{result.location.timezone}</p>
        </div>
        <div className="card-image-last">
          <p className='header'>ISP</p>
          <p className='result'>{result.isp}</p>
        </div>
      </div>
      )}
    </div>
  )
}

export default App;
