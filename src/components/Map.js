import "./Map.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// var map = null;

const Map = ({mapMarkers}) => {

  // map component makes an http request every time the end user clicks on a filter
  // the map then rerenders with only the filtered markers
  // the initial render shows all parks
  // the map then listens to a filter button click event for each rerender


  return (
    <MapContainer
    center = {[39.50, -98.35]}
    zoom = {4}
    scrollWheelZoom={true}
    >
      <TileLayer 
        url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
        maxZoom={19}
        attribution={'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
      />
      {mapMarkers.map((park) => (
          <Marker position={[park.latitude, park.longitude]}>
            <Popup>
              {park.park_name}
            </Popup>
          </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;