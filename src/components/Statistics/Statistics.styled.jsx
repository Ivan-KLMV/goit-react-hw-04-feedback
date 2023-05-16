import styled from 'styled-components';

export const StatList = styled.ul`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 500;

  & > li {
    margin-bottom: 8px;

    &::first-letter {
      text-transform: capitalize;
    }

    & > span {
      font-size: 18px;
      margin-left: 8px;
    }
  }
`;

export const StatText = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 500;

  &::first-letter {
    text-transform: capitalize;
  }

  & > span {
    font-size: 18px;
    margin-left: 8px;
  }
`;
