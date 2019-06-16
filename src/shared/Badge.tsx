import styled from 'styled-components';

const Badge = styled.div<any>`
  align-content: center;
  background-color: ${(props) => props.active ? '#5833CA' : '#4F4F4F'};
  border-radius: 20px;
  display: flex;
  font-weight: bold;
  justify-content: center;
  padding: 0.25rem;
  text-shadow: 0px 1px 1px #000000;
  width: 38px;
`;

export default Badge;
