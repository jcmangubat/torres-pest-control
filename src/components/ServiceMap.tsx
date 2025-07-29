import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";

const createFAIcon = (colorClass: string = "text-green-600") => {
  return L.divIcon({
    html: `<i class="fas fa-map-marker-alt ${colorClass} text-2xl"></i>`,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    className: "custom-fa-icon", // you can style this if needed
  });
};

type Region = {
  name: string;
  position: [number, number];
  description: string;
};

type ServiceMapProps = {
  regions: Region[];
};

const ServiceMap: React.FC<ServiceMapProps> = ({ regions }) => {
  return (
    <MapContainer
      center={[10.5, 122.5]}
      zoom={5.5}
      className="h-[1000px] w-full z-0"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {regions.map((region) => (
        <Marker
          key={region.name}
          position={region.position}
          icon={createFAIcon("text-red-600")}
        >
          <Popup>
            <strong>{region.name}</strong>
            <br />
            {region.description}
          </Popup>

          <Tooltip
            direction="top"
            offset={[0, -30]}
            opacity={0.9}
            permanent={false}
          >
            {region.description}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ServiceMap;
