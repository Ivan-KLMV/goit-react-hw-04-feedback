import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
};

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
