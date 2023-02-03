import "./Activity.css";
import "./Activity.css";

// presentational component for activities
// should only make a list of activities and display
const Activity = ({activity}) => {

  return (
    <button
      /* onClick={() => onSelectActivity()} */
      /* className={selectedActivity} */>
      {activity}
      </button>
  );
};

//create a onSelectActivity function which adds a selected activity
// to a list of selected activities (which is then used to filter markers)

// className is used to identify when the button is clicked for css purposes

export default Activity;