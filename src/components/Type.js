import "./Type.css";
import { useState } from "react";

const TypeButton = ({type, selectType, deselectType}) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    toggle? deselectType(type) : selectType(type)
    setToggle(!toggle);
  };

  return (
    <button onClick={handleClick}
      className={toggle? 'type-button-selected' : 'type-button-unselected'} >
      {type}
    </button>
  );
};

export default TypeButton;