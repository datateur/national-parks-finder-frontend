import "./ActivitiesList.css";
import Activity from './Activity.js'
import { useState } from 'react';

const ActivitiesList = ({activities, selectActivity, deselectActivity}) => {
  const [showActivities, setShowActivities] = useState(true);


  return (
    <section className='activities-list-section'>
      <div className='activities-menu' 
      onClick={() => setShowActivities(!showActivities)}>
      <h3 className='title'>Activities<span className='arrow'>{showActivities? '▼':'◀'}</span></h3>
      </div>
      <div className='activities-list' id={showActivities? 'show-dropdown' : 'hide-dropdown'}>
        <ul>
          {activities.map((activity) =>
          (<Activity key={activity}
          activity={activity}
          selectActivity={selectActivity} 
          deselectActivity={deselectActivity}
          />))} 
        </ul>
      </div>
    </section>
  )
};

export default ActivitiesList;