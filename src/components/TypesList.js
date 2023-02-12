import "./TypesList.css";
import TypeButton from './Type';
import { useState } from 'react';

const TypesList = ({types, selectType, deselectType}) => {
  const [showTypes, setShowTypes] = useState(true);

  return (
    <section className='types-list-section'>
    <div className='types-menu' 
      onClick={() => setShowTypes(!showTypes)}>
    <h3 className='title'>Park Types <span className='arrow'>{showTypes? '▼':'◀'}</span></h3>
    </div>
    <div className='types-list' id={showTypes? 'show-dropdown' : 'hide-dropdown'}>
    <ul>
      {types.map((type) =>
      (<TypeButton key={type}
      type={type}
      selectType={selectType} 
      deselectType={deselectType}
      />))}
    </ul>
    </div>
    </section>
  )
};

export default TypesList;