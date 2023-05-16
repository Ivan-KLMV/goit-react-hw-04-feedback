import PropTypes from 'prop-types';
import { StatText } from '../Statistics/Statistics.styled';

export const Notification = ({ message }) => {
  return <StatText>{message}</StatText>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
