import React from 'react';
import Section from '../Section';
import FeedBack from '../Feedback';
import Statistics from '../Statistics';
import { Container } from './App.styled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => {
      console.log(prevState[option]);
      return { [option]: prevState[option] + 1 };
    });
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
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedBack
            options={['good', 'neutral', 'bad']}
            onLeavFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            answer="No feedback given"
          />
        </Section>
      </Container>
    );
  }
}

export default App;
