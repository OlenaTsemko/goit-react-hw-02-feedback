import { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';

import './App.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCount = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = arrayOfValues =>
    arrayOfValues.reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = (good, total) =>
    Math.round((good / total) * 100);

  render() {
    const { good, neutral, bad } = this.state;

    const values = Object.values(this.state);
    const total = this.countTotalFeedback(values);
    const positivePercent = this.countPositiveFeedbackPercentage(good, total);

    return (
      <div className="App">
        <h1>React hw 2 - Feedback</h1>

        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleCount} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercent}
          />
        </Section>
      </div>
    );
  }
}

export default App;
