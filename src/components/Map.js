import "./Map.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';

// var map = null;

const Map = () => {

  var map = window.L.map('map-display').setView([51.505, -0.09], 13);

  window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);


//   var marker = window.L.marker([51.5, -0.09]).addTo(map);

  // map component makes an http request every time the end user clicks on a filter
  // the map then rerenders with only the filtered markers
  // the initial render shows all parks
  // the map then listens to a filter button click event for each rerender

  // useEffect(() => {
  //   axios.get(`${process.env.BACKEND_URL}/parks/locations`)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log("Error:", error);
  //   });
  // }, []);

  return (
    <MapContainer
    center = {[51.505, -0.09]}
    zoom = {13}
    />
  );
};

export default Map;