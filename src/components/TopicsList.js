import "./TopicsList.css";
import TopicButton from './TopicButton'

const TopicsList = ({topics, selectFilter, deselectFilter}) => {

  return (
    <>
    <h3>Topics</h3>
    <ul className='topics-list'>
      {topics.map((topic) =>
      (<TopicButton key={topic}
      topic={topic}
      selectFilter={selectFilter} 
      deselectFilter={deselectFilter}
      />))}
    </ul>
    </>
  )
};

export default TopicsList;