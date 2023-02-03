import "./ActivitiesList.css";
import Activity from './Activity.js'

const ActivitiesList = ({activities, selectActivity, deselectActivity}) => {

  return (
    <>
    <h3>Activities</h3>
    <ul className='activities-list'>
      {activities.map((activity) =>
      (<Activity key={activity}
      activity={activity}
      selectActivity={selectActivity} 
      deselectActivity={deselectActivity}
      />))}
    </ul>
    </>
  )
};

export default ActivitiesList;