import React, { Component } from 'react';
// import FeedbackOptions from './components/feedbackOptions/feedbackOptions';
import Section from './components/Section/section';
// import Statistics from './components/statitics/statistics';
// import Notification from './components/Notification/notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback() || 1;
    return Math.round((good / total) * 100);
  };
  onHandleFeedback = e => {
    const name = e.target.innerText;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  render() {
    // const { good, neutral, bad } = this.state;
    // const { countTotalFeedback, countPositiveFeedbackPercentage } = this;
    // const objName = Object.keys(this.state);
    return (
      <div>
        <div>
          <Section title="Please leave feedback">
            {/* <FeedbackOptions options={objName} onHandleFeedback={this.onHandleFeedback} /> */}
            {/* <Section title="Statistics">
              {this.countTotalFeedback() ? (
                <Statistics
                  {...this.state}
                  total={this.countTotalFeedback()}
                  percentage={this.countPositiveFeedbackPercentage()}
                />
              ) : (
                <div>ytn</div>
              )}
            </Section> */}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
