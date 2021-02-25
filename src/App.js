import { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';
import Container from 'components/Container';

import FeedbackWithClass from 'components/FeedbackWithClass';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const countLeftFeedbackHandler = value =>
    setState(prevState => ({
      ...state,
      [value]: prevState[value] + 1,
    }));

  const countTotalFeedback = arrayOfValues =>
    arrayOfValues.reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / total) * 100);

  const keys = Object.keys(state);
  const values = Object.values(state);
  const total = countTotalFeedback(values);
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className="App">
      <h1>React hw 2 - Feedback with Hook</h1>

      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={countLeftFeedbackHandler}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>

      <FeedbackWithClass />
    </div>
  );
};

export default App;
