import "./ActivitiesList.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Activity from './Activity.js'

//container component for activities
// holds the activity (wether its clicked or unclicked)
// modifies the data
// sends the data to app
const ActivitiesList = ({activities, selectActivity, deselectActivity}) => {




  return (
    <>
    <h3>Activities</h3>
    <ul className='activities-list'>
      {activities.map((activity) =>
      (<Activity 
      activity={activity}
      selectActivity={selectActivity} 
      deselectActivity={deselectActivity}
      />))}
    </ul>
    </>
  )
};

export default ActivitiesList;