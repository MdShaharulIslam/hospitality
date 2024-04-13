import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const ContactMap = () => {
  return (
    <div className="map-container" >
      <MapContainer
        center={[24.8526, 89.3730]}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "50vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="shaharul islam"
        />
        <Marker position={[24.8526, 89.3730]}>
          <Popup>Bogura Bangladesh</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
