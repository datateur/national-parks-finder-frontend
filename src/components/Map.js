import "./Map.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// var map = null;

const Map = ({mapMarkers}) => {
//   var marker = window.L.marker([51.5, -0.09]).addTo(map);

  // map component makes an http request every time the end user clicks on a filter
  // the map then rerenders with only the filtered markers
  // the initial render shows all parks
  // the map then listens to a filter button click event for each rerender
  console.log('inside Map!');
  console.log({mapMarkers});


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
        ></TileLayer>
        {mapMarkers.map((park) => (
          <Marker
            position={[park.location.lat, park.location.long]}
          />
        ))}
        {/* // <Marker position={[39.50, -98.35]}>
        //   <Popup>
        //     A pretty CSS3 popup. <br /> Easily customizable.
        //   </Popup>
        // </Marker> */}
    </MapContainer>
  );
};

export default Map;