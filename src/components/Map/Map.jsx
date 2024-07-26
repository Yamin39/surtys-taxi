import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    <div>
      <MapContainer center={[51.85926656541001, -2.2396687446038883]} zoom={18} className="shadow z-[1]" style={{ height: "27rem", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.85926656541001, -2.2396687446038883]}>
          <Popup>
            Surty&apos;s Private Hire <br /> 23 Archibald Street
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
