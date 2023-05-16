import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(key => (
        <li key={key}>
          <Button type="button" onClick={() => onLeaveFeedback(key)}>
            {key}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
