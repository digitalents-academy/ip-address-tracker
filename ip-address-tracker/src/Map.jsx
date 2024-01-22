import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css"

//Handles map
//add jsx to handle coordinates
function Map() {


  return ( 
    <MapContainer center={[60.194995, 24.947628]} zoom={13} className={styles.MapContainer}>
    <TileLayer
    attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
    url="https://{s}tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    </MapContainer>
   );
}

export default Map;