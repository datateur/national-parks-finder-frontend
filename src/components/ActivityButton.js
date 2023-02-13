import "./ActivityButton.css";
import { useState } from "react";

const ActivityButton = ({activity, selectActivity, deselectActivity}) => {
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

export default ActivityButton;