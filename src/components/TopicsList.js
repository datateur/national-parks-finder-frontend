import "./TopicsList.css";
import TopicButton from './TopicButton';
import { useState } from 'react';

const TopicsList = ({topics, selectTopic, deselectTopic}) => {
  const [showTopics, setShowTopics] = useState(true);

  return (
    <section className='topics-list-section'>
    <div className='topics-menu' 
      onClick={() => setShowTopics(!showTopics)}>
    <h3>Topics</h3></div>
    <div id={showTopics? 'show-dropdown' : 'hide-dropdown'}>
    <ul className='topics-list'>
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