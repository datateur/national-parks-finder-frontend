import "./App.css";

var map = L.map('map').setView([51.505, -0.09], 13);

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
