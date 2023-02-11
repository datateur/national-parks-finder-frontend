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
    <Popup maxHeight={400} minWidth={500} maxWidth={500}> 
      {<section className="park-bio">
          <h1>{park.fullName}</h1>
          <a href={park.url} target='_blank' rel='noreferrer noopener'>Official Park Website</a>
          <img src={park.images[0].url} alt={park.images[0].altText}></img>
          <p>{park.description}</p>
          <h2>Standard Hours</h2>
          <div>
            <p>{park.operatingHours.map((site) => (
              <>
              <b>{site['name']}</b><br/><br/>
              Monday: {site.standardHours.monday} <br/>
              Tuesday: {site.standardHours.tuesday} <br/>
              Wednesday: {site.standardHours.wednesday} <br/>
              Thursday: {site.standardHours.thursday} <br/>
              Friday: {site.standardHours.friday} <br/>
              Saturday: {site.standardHours.saturday} <br/>
              Sunday: {site.standardHours.sunday} <br/><br/>
              </>
            ))}
            </p>
          </div>

          <h2>Fees</h2>
          <p>{park.fees.map((fee) => (
            <>
            <b> {fee.title} </b> <br/>
            Cost: ${fee.cost} <br/>
            {fee.description} <br/><br/>
            </>
          ))}
          </p>

          <h2>Contact</h2>
          <div className='contacts'>
            <h3>Phone:</h3>
            <p>{park.phoneNumbers.map((number) => (
                <>
                {number['type']}: {number['phoneNumber']}
                <br/></>
            ))}</p>
            <h3>E-mail:</h3>
            <p>{park.emails.map((email) => (
              <><br/>
                {email}
              </>
            ))}</p>
            </div>

      </section>}
    </Popup>
    </Marker>
    ))}
    </MapContainer>
  );
};

export default Map;