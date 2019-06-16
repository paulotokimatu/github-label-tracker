import styled from 'styled-components';

const CircularButton = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  color: #DADADA;
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.3s background-color;

  :hover,
  :focus {
    background-color: rgba(255, 255, 255, 0.08);
  }

  :active {
    background-color: rgba(255, 255, 255, 0.12);
  }

  i {
    margin: 0;
  }
`;

export default CircularButton;
