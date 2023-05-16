import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 6px 12px;
  background-color: white;
  border: 1px solid darkgray;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1215686275),
    0px 1px 2px 0px rgba(0, 0, 0, 0.0784313725);
  text-transform: capitalize;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.0384313725);
    background-color: whitesmoke;
  }
`;
