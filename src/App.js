import "./App.css";
import axios from "axios";
import ActivitiesList from "./components/ActivitiesList";
import Map from "./components/Map";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [mapMarkers, setMapMarkers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);

  const selectActivity = (activity) => {
    console.log("This is selectActivity func")
    const newActivitiesList = [...selectedActivities];
    newActivitiesList.push(activity);
    setSelectedActivities(newActivitiesList)
    console.log(selectedActivities)
  };

  const deselectActivity = (activity) => {
    console.log('This is deselect func')
    const newActivitiesList = selectedActivities.filter((filterActivity) => {
      return filterActivity !== activity;
    });
    setSelectedActivities(newActivitiesList)
    console.log(selectedActivities)
    console.log("deselected")
  };

// call to get activities
useEffect(() => {
    axios.get('https://national-parks-finder-backend.herokuapp.com/activities')
      .then((response) => {
        console.log(response.data.activities);
        setActivities(response.data.activities);
        return response.data;
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    }, []);
 // dependency, useeffect is triggered every time this changes

  //call to get locations
  useEffect(() => {
    axios.get('https://national-parks-finder-backend.herokuapp.com/parks/locations')
      .then((response) => {
          setMapMarkers(response.data);
          console.log(response.data);
          return response.data;
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []); // make this dependant on selectedActivities

  
// axios call to get topics

// axios call to filter locations by activity and topics
// sets response to setmapmarkers

// selectActivity function which adds an activity to an array to filter for
// must remove activity if not selected
// re

// app should be the source of parks that get passed to maps
// all activities should be passed down to activitieslist and activitieslist listens
// listens for selections and passes back up a filtered list of activities
// app then passes the filteredActivities list into the call to /parks/filter
// and passes down the filtered parks locations to maps

  return (
    <>
    <div className="App">
      <Map mapMarkers={mapMarkers}/>
      <section className="sidebar">
        <h2> This is app</h2>
        <ActivitiesList activities={activities}
        selectActivity={selectActivity}
        deselectActivity={deselectActivity}
        />
      </section>
    </div>
    </>
  );
}

export default App;
