import "./ActivitiesList.css";
import Activity from './Activity.js'

const ActivitiesList = ({activities, selectActivity, deselectActivity}) => {

  return (
    <section className='activities-list-section'>
    <div className='activities-menu'><h3>Activities</h3></div>
    <ul className='activities-list'>
      {activities.map((activity) =>
      (<Activity key={activity}
      activity={activity}
      selectActivity={selectActivity} 
      deselectActivity={deselectActivity}
      />))}
    </ul>
    </section>
  )
};

export default ActivitiesList;