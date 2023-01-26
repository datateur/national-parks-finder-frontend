import "./App.css";

let map;

function initMap() {
  map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
      <div id="map"></div>
      <p>hi there</p>
      <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_zMsyhGAE1XHXQa7bT1B1sZph09pl-B4&callback=initMap"
    ></script>
      </main>
    </div>
  );
}

export default App;
