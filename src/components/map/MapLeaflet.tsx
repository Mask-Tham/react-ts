import { LatLngExpression, LatLngLiteral, LatLngTuple } from "leaflet";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import L from "leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

L.Marker.prototype.options.icon = DefaultIcon;

export const MoveCenterMapCode = `
<script>
interface MoveMap {
  setCenter:React.Dispatch<React.SetStateAction<LatLngTuple>>
}

function MoveMap({setCenter}:MoveMap) {
  const map = useMapEvent("move", (event) => {
    const z = event.target.getZoom();
    const c = event.target.getCenter();
    setCenter([c.lat,c.lng])
    
  });
  return null
}

const MapLeaflet = (props: Props) => {
  
  const position: LatLngExpression = [13.8112248, 100.5556357];
  const [pCenter, setpCenter] = useState<LatLngTuple>([13.8112248, 100.5556357])
  
  return (
    <div style={{ width: "500px", height: "500px" }}>
    <div>lat:{pCenter[0].toString()},lng:{pCenter[1].toString()},[{pCenter.toString()}]</div>
    <MapContainer
    style={{ height: "100%", width: "100%" }}
    center={position}
    zoom={13}
    scrollWheelZoom={true}
    >
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MoveMap setCenter={setpCenter}/>
    <Marker position={pCenter}>
    </Marker>
    </MapContainer>
    </div>
    );
  };
</script>
`;

type Props = {};

function MyComponent() {
  const map = useMapEvents({
    locationfound: (location) => {
      console.log("location found:", location);
    },
  });
  return null;
}

interface MoveMap {
  setCenter: React.Dispatch<React.SetStateAction<LatLngTuple>>;
}

function MoveMap({ setCenter }: MoveMap) {
  const map = useMapEvent("move", (event) => {
    const z = event.target.getZoom();
    const c = event.target.getCenter();
    // console.log(z, c);
    setCenter([c.lat, c.lng]);

    // router.push(`?lng=${c.lng}&lat=${c.lat}&zoom=${z}`);
  });
  return null;
}



const MapLeaflet = (props: Props) => {
  const position: LatLngExpression = [13.8112248, 100.5556357];
  const [pCenter, setpCenter] = useState<LatLngTuple>([
    13.8112248, 100.5556357,
  ]);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <div>
        lat:{pCenter[0].toString()},lng:{pCenter[1].toString()},
        [{pCenter.toString()}]
      </div>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MoveMap setCenter={setpCenter} />
        <Marker position={pCenter}></Marker>
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;
