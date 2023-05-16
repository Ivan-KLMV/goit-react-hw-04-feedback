import { Component } from 'react';
import { FeedbackOptions, Statistics, Section, Notification } from './index';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedIncrement = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    const valuesOfState = Object.values(this.state);
    return valuesOfState.reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeeds = this.countTotalFeedback();
    const goodFeeds = this.state.good;

    return Math.round((goodFeeds * 100) / totalFeeds);
  };

  render() {
    return (
      <>
        <Section title="please leave feedback">
          {
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.feedIncrement}
            />
          }
        </Section>
        <Section title="statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              namesOfItem={Object.keys(this.state)}
              values={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
