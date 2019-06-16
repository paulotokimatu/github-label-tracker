import styled from 'styled-components';

const StyledInput = styled.input`
  background: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.1rem;
  max-width: 300px;
  padding: .7rem 1rem;
  transition: 0.3s all;
  width: 100%;

  :hover {
    border: 2px solid rgba(255, 255, 255, 0.7);
    color: rgba(255, 255, 255, 0.7);
  }

  :focus,
  :active {
    border: 2px solid #DADADA;
    color: #DADADA;
  }
`;

export default StyledInput;
