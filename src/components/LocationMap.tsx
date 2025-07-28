import {
  MapContainer,
  TileLayer,
  Marker,
  LayersControl,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix broken marker icon paths (Vite needs this workaround)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const position: [number, number] = [7.118246885181027, 125.49535579013283];

const LocationMap = () => {
  return (
    <div className="w-full h-[340px]">
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://stamen.com/">Stamen</a>'
          url="https://tiles.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}{r}.png?api_key=02cd7782-da88-4ad1-9d99-f2c60f5e8a54"
        />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://stamen.com/">Stamen</a>'
          url="https://tiles.stadiamaps.com/tiles/stamen_terrain_lines/{z}/{x}/{y}{r}.png?api_key=02cd7782-da88-4ad1-9d99-f2c60f5e8a54"
        />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://stamen.com/">Stamen</a>'
          url="https://tiles.stadiamaps.com/tiles/stamen_terrain_labels/{z}/{x}/{y}{r}.png?api_key=02cd7782-da88-4ad1-9d99-f2c60f5e8a54"
        />
        <Marker position={position}>
          <Popup>Torres Pest Control</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
