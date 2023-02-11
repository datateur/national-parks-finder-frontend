import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({mapMarkers}) => {

  return (
    <MapContainer
      center = {[39.50, -98.35]}
      zoom = {4}
      scrollWheelZoom={true}>
    <TileLayer 
      url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
      maxZoom={19}
      attribution={'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
    />
    {mapMarkers.map((park) => (
    <Marker key={park.parkCode} position={[park.latitude, park.longitude]}>
    <Popup maxHeight={400} minWidth={500}> 
      {<section className="park-bio">
          <h2>{park.fullName}</h2>
          <img src={park.images[0].url} alt={park.images[0].altText}></img>
          <p>{park.description}</p>
          <h2>Contact</h2>
            <h3>Phone</h3>
            <p>{park.phoneNumbers.map((number) => (
                <p>
                {number['type']}: {number['phoneNumber']}
                </p>
            ))}</p>
            <h3>E-mail:</h3>
            <div>{park.emails.map((email) => (
              <p>
                {email}
              </p>
            ))}</div>
          <p>Fees: {}</p>
          <a href={park.url}>Park Website</a>
      </section>}
    </Popup>
    </Marker>
    ))}
    </MapContainer>
  );
};

export default Map;