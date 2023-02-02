import "./App.css";
import axios from "axios";
import ActivitiesList from "./components/ActivitiesList";
import Map from "./components/Map";
import { useState, useEffect } from "react";

const App = () => {
  const [mapMarkers, setMapMarkers] = useState([]);

// call to get activities
  useEffect(() => {
    axios.get('https://national-parks-finder-backend.herokuapp.com/activities')
      .then((response) => {
        console.log(response.data.activities)
        const activities = response.data.activities
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);


  
// axios call to get topics

// axios call to filter locations by activity and topics
// sets response to setmapmarkers

// selectActivity function which adds an activity to an array to filter for
// must remove activity if not selected
// re




  return (
    <>
    <div className="App">
      <section className="sidebar">
        <h2> This is app</h2>
        <ActivitiesList
        // activitiesData={activities}
        // onSelectActivity={selectActivity}
        />
      </section>
      <p>this is map</p>
      <Map/>
      {/* // mapMarkers={mapMarkers} */}
    </div>
    </>
  );
}

export default App;
