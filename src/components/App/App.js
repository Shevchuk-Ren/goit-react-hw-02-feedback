import React from 'react';
import Section from '../Section/Section';
import FeedBack from '../Feedback/Feedback';
import Statistics from '../Statistics/Statistics';
import './App.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeGoodFeedBack = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  changeNeutralFeedBack = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  changeBadFeedBack = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    console.log('Click bad');
  };

  countTotalFeedback = () => {
    const total = this.state.bad + this.state.neutral + this.state.good;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.state.bad + this.state.neutral + this.state.good;
    const precentage = total ? (this.state.good * 100) / total : 0;
    return Math.round(precentage);
  };

  render() {
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedBack
            good={this.changeGoodFeedBack}
            neutral={this.changeNeutralFeedBack}
            bad={this.changeBadFeedBack}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            onLeaveFeedback="No feedback given"
          />
        </Section>
      </div>
    );
  }
}

export default App;
