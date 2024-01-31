import * as ReactLeaflet from "react-leaflet"
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css"

//handles map
//add jsx to handle coordinates
function Map({ coordinates, marker }) {

  return ( 
    <ReactLeaflet.MapContainer
        key={coordinates[0]} 
        center={coordinates} 
        zoom={16} 
        className={styles.MapContainer}>
        <ReactLeaflet.TileLayer
            attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ReactLeaflet.Marker key={marker[0]} position={marker}></ReactLeaflet.Marker>
    </ReactLeaflet.MapContainer>
   );
}

export default Map;