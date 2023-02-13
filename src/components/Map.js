import "./Map.css";
import Slideshow from './Slideshow';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({parksData}) => {

  return (
    <MapContainer
      center = {[43, -80]}
      zoom = {3}
      scrollWheelZoom={true}>
    <TileLayer 
      url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
      maxZoom={19}
      attribution={'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
    />
    {parksData.map((park) => (
    <Marker key={park.parkCode} position={[park.latitude, park.longitude]}>
    <Popup maxHeight={500} minWidth={600} maxWidth={600}> 
      {<section className="park-bio">
          <h1>{park.fullName}, {park.states}</h1>
          {/* <Slideshow park={park}/> */}
          <img src={park.images[0].url} alt={park.images[0].altText}></img>
          <div className='info'>
          <p>{park.description}</p>
          <a href={park.url} target='_blank' rel='noreferrer noopener'>Visit Park Website</a>
          </div>
          <h2>Address</h2>
          <div className='info'>{park.addresses.map((address) => (
              <>
              {address.line1} {address.line2} {address.line3}<br/>
              {address.city}, {address.state} {address.postalCode}
              </>
            ))}
          </div>
          <h2>Standard Hours</h2>
          <div className='info'>{park.operatingHours.map((site) => (
              <>
              <h3>{site['name']}</h3>
              Monday: {site.standardHours.monday} <br/>
              Tuesday: {site.standardHours.tuesday} <br/>
              Wednesday: {site.standardHours.wednesday} <br/>
              Thursday: {site.standardHours.thursday} <br/>
              Friday: {site.standardHours.friday} <br/>
              Saturday: {site.standardHours.saturday} <br/>
              Sunday: {site.standardHours.sunday} <br/>
              <p>{site.description}</p>
              </>
            ))}
          </div>

          <h2>Fees</h2>
          <div className='info'>{park.fees.map((fee) => (
            <li>
            <h3>{fee.title}</h3>
            Cost: ${fee.cost} <br/>
            {fee.description} <br/>
            </li>
          ))}
          </div>

          <h2>Contact</h2>
          <div className='info'>
            <h3>Phone:</h3>
            <p>{park.phoneNumbers.map((number) => (
                <>
                <b>{number['type']}:</b> {number['phoneNumber']}
                <br/></>
            ))}</p>
            <h3>E-mail:</h3>
            <p>{park.emails.map((email) => (
              <>
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