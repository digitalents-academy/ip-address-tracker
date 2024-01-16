import { useState } from 'react';
import axios from 'axios';
import arrow from "./assets/images/icon-arrow.svg";
import "./styles/App.css";

function IPlookup() {
  const [query, setQuery] = useState(null)

  async function address() {
    const apiKey = "at_xqIYtoLkrk8OBkudtIizO5uRzKTVG";
  
    try {
      const response = await axios.get("https://geo.ipify.org/api/v2/country,city?apiKey=at_xqIYtoLkrk8OBkudtIizO5uRzKTVG&ipAddress=" + query, { params: { apiKey: apiKey } })
      console.log(response.data);
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
          onChange={(e) => setQuery(e.target.value)}/>
        <img src={arrow} className="input-arrow" onClick={() => address()}/>
      </div>
      </div>
      <div className="map-main"></div>
    </div>
  )
}

export default IPlookup;
