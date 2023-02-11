import "./App.css";
import axios from "axios";
import ActivitiesList from "./components/ActivitiesList";
import TopicsList from './components/TopicsList'
import Map from "./components/Map";
import { useState, useEffect } from "react";

const App = () => {
  const [mapMarkers, setMapMarkers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);

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

  const selectTopic = (topic) => {
    const newTopicsList = [...selectedTopics];
    newTopicsList.push(topic);
    setSelectedTopics(newTopicsList)
  };

  const deselectTopic = (topic) => {
    const newTopicsList = selectedTopics.filter((filterTopic) => {
      return filterTopic !== topic;
    });
    setSelectedTopics(newTopicsList)
  };

// call to get all activities
useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/activities`)
      .then((response) => {
        setActivities(response.data.activities);
        return response.data;
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    }, []);


  //call to get filtered locations
    useEffect(() => {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/parks/filter`,
        {'activities': selectedActivities, 'topics': selectedTopics})
        .then((response) => {
            setMapMarkers(response.data);
            return response.data;
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }, [selectedActivities, selectedTopics]); // make this dependant on selectedActivities

  
// axios call to get all topics
useEffect(() => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/topics`)
    .then((response) => {
      setTopics(response.data.topics);
      return response.data;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  }, []);

  let number_of_parks = Object.keys(mapMarkers).length;


  return (
    <>
    <div className="App">
      <section className="sidebar">
        <div className='welcome'>
        <h2> Welcome to National Parks Finder!</h2>
        <p> Pick a filter below to begin finding parks. Click on a marker to 
          see more information.
        </p>
        </div>
        <h3 className='parks-total'> {number_of_parks} {number_of_parks === 1? 'park found' : 'parks found'}</h3>
        <ActivitiesList activities={activities}
        selectActivity={selectActivity}
        deselectActivity={deselectActivity}
        />
        <TopicsList topics={topics}
        selectTopic={selectTopic}
        deselectTopic={deselectTopic}
        />
      </section>
      <Map mapMarkers={mapMarkers}/>
    </div>
    </>
  );
}

export default App;
