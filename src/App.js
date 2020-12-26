//import React, { Component } from 'react'; // для хуков не нужен
import { useState } from 'react'; // Импортируем useState
import Section from './components/Section/Section.jsx';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx';
import { Data } from './data/data';
import Statistics from './components/Statistics/Statistics.jsx';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    const total = countTotalFeedback(); 
    return total ? Math.round((good / total) * 100) : 0; // находим общее кол-во good, если таких нет - выводим ноль.
  };

  const total = countTotalFeedback(); 
  const positiveFeedback = countPositiveFeedback(); 

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Data} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={positiveFeedback}
        />
      </Section>
    </div>
  );
}

export default App;
