import "./ActivitiesList.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Activity from './Activity.js'

//container component for activities
// holds the activity (wether its clicked or unclicked)
// modifies the data
// sends the data to app
const ActivitiesList = ({activities}) => {
  const [selectedActivities, setSelectedActivities] = useState([]);

  const selectActivity = (activity) => {
    console.log("This is selectActivity func")
    const newActivitiesList = [...selectedActivities];
    newActivitiesList.push(activity);
    setSelectedActivities(newActivitiesList)
    console.log(activity)
  };


  return (
    <>
    <h3>Activities</h3>
    <ul className='activities-list'>
      {activities.map((activity) => (<Activity activity={activity} selectActivity={selectActivity} />))}
    </ul>
    </>
  )
};

export default ActivitiesList;