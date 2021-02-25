const FeedbackList = ({ onLeaveFeedback }) => (
  <div>
    <button onClick={() => onLeaveFeedback('good')}>Good</button>
    <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
    <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
  </div>
);

// defaultProps = {}
// propTypes = {}

export default FeedbackList;
