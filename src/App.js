import "./App.css";
import axios from "axios";
import ActivitiesList from "./components/ActivitiesList";
import TopicsList from './components/TopicsList'
import TypesList from './components/TypesList'
import Map from "./components/Map";
import { useState, useEffect } from "react";

const App = () => {
  const [parksData, setParksData] = useState([]);
  const [activities, setActivities] = useState([]);
  const [topics, setTopics] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  //const [selectedFilters, setSelectedFilters] = useState({'activities':[], 'topics': [], 'types':[]})
  
  let number_of_parks = Object.keys(parksData).length;
  // const selectFilter = (filter) => {
  //   var setFilter;
  //   var selectedList;

  //   if (filter in activities){
  //     setFilter = setSelectedActivities;
  //     selectedList = selectedActivities;
  //     console.log(setFilter)
  //     console.log(selectedList)
  //   }

  //   else if (filter in topics){
  //     setFilter = setSelectedTopics;
  //     selectedList = selectedTopics;
  //   }

  //   else if (filter in types){
  //     setFilter = setSelectedTypes;
  //     selectedList = selectedTypes;
  //   };

  //   const newFilterList = [...selectedList];
  //   newFilterList.push(filter);
  //   setFilter(newFilterList);
  // };

  // const deselectFilter = (filter) => {
  //   var setFilter;
  //   var selectedList;

  //   if (filter in activities){
  //     setFilter = setSelectedActivities;
  //     selectedList = selectedActivities;
  //   }

  //   else if (filter in topics){
  //     setFilter = setSelectedTopics;
  //     selectedList = selectedTopics;
  //   }

  //   else if (filter in types){
  //     setFilter = setSelectedTypes;
  //     selectedList = selectedTypes;
  //   };

  //   const newFilterList = selectedList.filter((x) => {
  //     return x !== filter;
  //   });
  //   setFilter(newFilterList)
  // };

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

  const selectType = (type) => {
    const newTypesList = [...selectedTypes];
    newTypesList.push(type);
    setSelectedTypes(newTypesList)
  };

  const deselectType = (type) => {
    const newTypesList = selectedTypes.filter((filterType) => {
      return filterType !== type;
    });
    setSelectedTypes(newTypesList)
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
  
// call to get all topics
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

// call to get all park types
useEffect(() => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/types`)
    .then((response) => {
      setTypes(response.data.types);
      return response.data;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  }, []);

  //call to get all or filtered parks
  useEffect(() => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/parks/filter`,
      {'activities': selectedActivities, 'topics': selectedTopics, 'types': selectedTypes})
      .then((response) => {
          setParksData(response.data);
          return response.data;
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [selectedActivities, selectedTopics, selectedTypes]);

  return (
    <>
    <div className="App">
      <section className="sidebar">
        <div className='welcome'>
        <h2> Welcome to National Parks Finder!</h2>
        <p> Pick a filter below to begin finding parks. Click on a marker to 
          see park information.
        </p>
        </div>
        <h3 className='parks-total'> {number_of_parks} {number_of_parks === 1? 'site found' : 'sites found'}</h3>
        <ActivitiesList activities={activities}
        selectActivity={selectActivity}
        deselectActivity={deselectActivity}
        />
        <TopicsList topics={topics}
        selectTopic={selectTopic}
        deselectTopic={deselectTopic}
        />
        <TypesList types={types}
        selectType={selectType}
        deselectType={deselectType}
        />
      </section>
      <Map parksData={parksData}/>
    </div>
    </>
  );
}

export default App;
