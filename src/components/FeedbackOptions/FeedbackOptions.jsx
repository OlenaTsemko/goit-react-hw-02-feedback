import { Component } from 'react';

class FeedbackList extends Component {
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <div>
        <button onClick={() => onLeaveFeedback('good')}>Good</button>
        <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      </div>
    );
  }
}

export default FeedbackList;
