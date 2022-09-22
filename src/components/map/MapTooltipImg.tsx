import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Image } from "antd";

type Props = {};
export const MapTooltipImgCode = `
<script>
const position: LatLngExpression = [13.8112248, 100.5556357];
const img = require("assets/logo/logo192.png");
</script>
<template>
<div style={{height: "300px", width: "100%" }}>
    <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Tooltip>
            <Image src={img} width={100} height={100}/>
          </Tooltip>
        </Marker>
    </MapContainer>
</div>
</template>
`;
const MapTooltipImg = (props: Props) => {
  const position: LatLngExpression = [13.8112248, 100.5556357];
  const img = require("assets/logo/logo192.png");
  return (
    <div style={{ height: "300px", width: "100%" }}>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Tooltip>
            <Image src={img} width={100} height={100} />
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapTooltipImg;
