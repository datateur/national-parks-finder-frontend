import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({mapMarkers}) => {

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
          <Marker key={park.parkCode}
          position={[park.latitude, park.longitude]}>
            <Popup>

              {<section className="park-bio">
                <h2>{park.full_name}</h2>
                <p>{park.description}</p>
                <h2>Contacts</h2>
                <p>Phone: {park.contacts.phoneNumbers}</p>
                <li>Fees {park.entranceFees.cost}</li>

              
              
              
              </section>}
            </Popup>
          </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;