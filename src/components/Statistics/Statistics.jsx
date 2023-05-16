import PropTypes from 'prop-types';
import { StatList, StatText } from './Statistics.styled';

export const Statistics = ({
  namesOfItem,
  values,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatList>
        {namesOfItem.map(name => (
          <li key={name}>
            {name}:<span>{values[name]}</span>
          </li>
        ))}
      </StatList>
      <StatText>
        total:<span>{total}</span>
      </StatText>
      <StatText>
        positive feedback:
        <span>{!positivePercentage ? 0 : positivePercentage}</span>%
      </StatText>
    </>
  );
};

Statistics.propTypes = {
  namesOfItem: PropTypes.arrayOf(PropTypes.string.isRequired),
  values: PropTypes.objectOf(PropTypes.number.isRequired),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
