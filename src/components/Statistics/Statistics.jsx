import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      {/* Проверяем чтобы было какое-то значение, в противном случае выводим нотификацию */}
      {total > 0 && (
        <ul className={style.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive Feedback: {positiveFeedback} %</li>
        </ul>
      )}
      {total === 0 && <Notification message="No reviews yet" />}
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
