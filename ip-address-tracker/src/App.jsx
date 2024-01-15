import React from "react"
import arrow from "./assets/images/icon-arrow.svg"
import "./styles/App.css"

function App() {

  return (
    <div className="main">
      <div className="input-main">
        <div className="input-title">IP Address Tracker</div>
        <div className="input-field">
          <input className="input"/>
          <div className="input-button">
            <img src={arrow} className="input-arrow"/>
          </div>
        </div>
      </div>
      <div className="map-main"></div>
    </div>
  )
}

export default App
