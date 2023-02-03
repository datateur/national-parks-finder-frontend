import "./ActivitiesList.css";
import axios from "axios";
import { useState, useEffect } from "react";

//container component for activities
// holds the activity (wether its clicked or unclicked)
// modifies the data
// sends the data to app
const ActivitiesList = ({activities}) => {


  return (
    <>
    <h3>Activities</h3>
    <ul>
      {/* {activities.map()} */}
    </ul>
    </>
  )
};

export default ActivitiesList;