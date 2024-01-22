import * as ReactLeaflet from "react-leaflet"
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css"

//handles map
//add jsx to handle coordinates
function Map() {


  return ( 
    <ReactLeaflet.MapContainer center={[60.194995, 24.947628]} zoom={13} className={styles.MapContainer}>
    <ReactLeaflet.TileLayer
    attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    </ReactLeaflet.MapContainer>
   );
}

export default Map;