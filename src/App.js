import "./App.css";

var map = window.L.map('map').setView([51.505, -0.09], 13);

window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function App() {
  return (
    <div className="App">
      <main>
      </main>
    </div>
  );
}

export default App;
