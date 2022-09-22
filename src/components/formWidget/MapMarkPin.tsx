import { divIcon, LatLngExpression, LatLngLiteral, LatLngTuple } from "leaflet";
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
import { renderToStaticMarkup } from "react-dom/server";
import { GrServers } from "react-icons/gr";
import { AiFillHome, AiOutlineWifi } from "react-icons/ai";

import L from "leaflet";
import { IconType } from "react-icons/lib";
import Icon from "components/util/Icon";
import { radioPinIcon } from "./FormWidgetTabMap";
import { Form } from "antd";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

L.Marker.prototype.options.icon = DefaultIcon;

function MyComponent() {
  const map = useMapEvents({
    click: (e) => {
      console.log(e);
    },
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
  const form = Form.useFormInstance();
  const map = useMapEvent("move", (event) => {
    const z = event.target.getZoom();
    const c = event.target.getCenter();
    // console.log(z, c);
    form.setFieldsValue({
      latlng: [c.lat, c.lng],
    });
    setCenter([c.lat, c.lng]);

    // router.push(`?lng=${c.lng}&lat=${c.lat}&zoom=${z}`);
  });
  return null;
}

const marker = {
  transform: "perspective(40px) rotateX(20deg) rotateZ(-45deg)",
  transformOrigin: "50% 50%",
  borderRadius: "50% 50% 50% 0",
  padding: "0 3px 3px 0",
  width: "40px",
  height: "40px",
  background: "#ffffff",
  position: "absolute",
  left: "50%",
  top: "50%",
  margin: "-2.2em 0 0 -1.3em",
  boxShadow: "-2px 2px 3px 1px rgba(0, 0, 0, .5)",
} as React.CSSProperties;

let markerCenter = {
  transformOrigin: "0% 0%",
  left: "-55%",
  top: "-125%",
  content: "",
  width: "30px",
  height: "30px",
  fontSize: "20px",
  color: "#ffffff",
  padding: "2px 5px",
  background: "#565656",
  position: "absolute",
  borderRadius: "50%",
} as React.CSSProperties;

type Props = {
  latlng?: Array<number>;
  iconMarker?: any;
  color?: string;
};

const MapMarkPin = ({ iconMarker, color }: Props) => {
  const position: LatLngExpression = [13.8112248, 100.5556357];
  const [pCenter, setpCenter] = useState<LatLngTuple>([
    13.8112248, 100.5556357,
  ]);

  // set background color pin
  markerCenter.background = color;

  const iconMarkup = renderToStaticMarkup(
    <div>
      <div style={marker}></div>
      <div style={markerCenter}>
        {radioPinIcon.find((e) => e.name === iconMarker)?.element}
      </div>
    </div>
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup,
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  return (
    <Form.Item name="latlng" label="">
      <div style={{ width: "100%", height: "300px", marginBottom: "10px" }}>
        {/* <div>
        lat:{pCenter[0].toString()},lng:{pCenter[1].toString()}, [
          {pCenter.toString()}]
        </div> */}
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
          {iconMarker ? (
            <Marker position={pCenter} icon={customMarkerIcon}></Marker>
          ) : null}
        </MapContainer>
      </div>
    </Form.Item>
  );
};

export default MapMarkPin;
