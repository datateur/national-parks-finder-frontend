import "./Activity.css";
import { useState, useEffect } from "react";

// presentational component for activities
// should only make a list of activities and display
const Activity = ({activity, selectActivity, deselectActivity}) => {
// create a state that holds wether a button is selected or unselected?
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    toggle? deselectActivity(activity) : selectActivity(activity)
    setToggle(!toggle);
  };

  return (
    <button onClick={handleClick}
      className={toggle? 'activity-button-selected' : 'activity-button-unselected'} >
      {activity}
    </button>
  );
};

//create a onSelectActivity function which adds a selected activity
// to a list of selected activities (which is then used to filter markers)

// className is used to identify when the button is clicked for css purposes

export default Activity;