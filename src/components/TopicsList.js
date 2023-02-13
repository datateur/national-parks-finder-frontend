import "./TopicsList.css";
import TopicButton from './TopicButton';
import { useState } from 'react';

const TopicsList = ({topics, selectTopic, deselectTopic}) => {
  const [showTopics, setShowTopics] = useState(false);

  return (
    <section className='topics-list-section'>
    <div className='topics-menu' 
      onClick={() => setShowTopics(!showTopics)}>
    <h3 className='title'>Topics <span className='arrow'>{showTopics? '▼':'◀'}</span></h3>
    </div>
    <div className='topics-list' id={showTopics? 'show-dropdown' : 'hide-dropdown'}>
    <ul>
      {topics.map((topic) =>
      (<TopicButton key={topic}
      topic={topic}
      selectTopic={selectTopic} 
      deselectTopic={deselectTopic}
      />))}
    </ul>
    </div>
    </section>
  )
};

export default TopicsList;