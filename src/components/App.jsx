import { useState } from 'react';
import { FeedbackOptions, Statistics, Section, Notification } from './index';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const feedIncrement = key => {
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const valuesOfState = Object.values(options);
    return valuesOfState.reduce((a, b) => a + b, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeeds = countTotalFeedback();
    const goodFeeds = good;

    return Math.round((goodFeeds * 100) / totalFeeds);
  };

  return (
    <>
      <Section title="please leave feedback">
        {
          <FeedbackOptions
            options={Object.keys(options)}
            onLeaveFeedback={feedIncrement}
          />
        }
      </Section>
      <Section title="statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            namesOfItem={Object.keys(options)}
            values={options}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
