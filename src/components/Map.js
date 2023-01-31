import "./Map.css";

const Map = () => {
  var map = window.L.map('map').setView([51.505, -0.09], 13);

  window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  var marker = window.L.marker([51.5, -0.09]).addTo(map);

};

export default Map;