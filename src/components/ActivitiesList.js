import "./ActivitiesList.css";
import axios from "axios";
import { useState, useEffect } from "react";

const ActivitiesList = () => {

  // useEffect(() => {
  //   axios.get(`${process.env.BACKEND_URL}/activities`)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error:", error);
  //     });
  // }, []);

  return (
    <h3>Activities</h3>
  )
};

export default ActivitiesList;