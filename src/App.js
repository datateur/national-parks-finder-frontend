import "./App.css";
import axios from "axios";
import ActivitiesList from "./components/ActivitiesList";
import Map from "./components/Map";
import { useState, useEffect } from "react";

const App = () => {
  const [mapMarkers, setMapMarkers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);

  const selectActivity = (activity) => {
    const newActivitiesList = [...selectedActivities];
    newActivitiesList.push(activity);
    setSelectedActivities(newActivitiesList)
  };

  const deselectActivity = (activity) => {
    const newActivitiesList = selectedActivities.filter((filterActivity) => {
      return filterActivity !== activity;
    });
    setSelectedActivities(newActivitiesList)
  };

// call to get all activities
useEffect(() => {
    axios.get('https://national-parks-finder-backend.herokuapp.com/activities')
      .then((response) => {
        setActivities(response.data.activities);
        return response.data;
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    }, []);

  //call to get locations
  // useEffect(() => {
  //   axios.get('https://national-parks-finder-backend.herokuapp.com/parks/locations')
  //     .then((response) => {
  //         setMapMarkers(response.data);
  //         console.log(response.data);
  //         return response.data;
  //     })
  //     .catch((error) => {
  //       console.log("Error:", error);
  //     });
  // }, []);

  //call to get filtered locations
    useEffect(() => {
      axios.post('https://national-parks-finder-backend.herokuapp.com/parks/filter',
        {'activities': selectedActivities})
        .then((response) => {
            setMapMarkers(response.data);
            return response.data;
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }, [selectedActivities]); // make this dependant on selectedActivities

  
// axios call to get topics


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
