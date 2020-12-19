import PropTypes from 'prop-types'; 
import style from './FeedbackOptions.module.css';


const FeedbackBtn = ({ option, onLeaveFeedback }) => {
  return (
    <button
      className={style.button}
      type="button"
      onClick={() => onLeaveFeedback(option)} 
      key={option}
    >
      {option}
    </button>
  );
};


function FeedbackOption({ options, onLeaveFeedback }) {
  return options.map(option => FeedbackBtn({ option, onLeaveFeedback })); 
};

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
