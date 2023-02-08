import "./TopicButton.css";
import { useState } from "react";

const TopicButton = ({topic, selectTopic, deselectTopic}) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    toggle? deselectTopic(topic) : selectTopic(topic)
    setToggle(!toggle);
  };

  return (
    <button onClick={handleClick}
      className={toggle? 'topic-button-selected' : 'topic-button-unselected'} >
      {topic}
    </button>
  );
};

export default TopicButton;