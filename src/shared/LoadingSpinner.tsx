import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  width: 80px;
  height: 80px;
  position: relative;

  &,
  ::before,
  ::after {
    background: transparent;
    border-radius: 50%;
    border-style: solid;
    border-color: transparent;
    border-top-color: #DADADA;
    border-width: 6px;

    animation: ${rotate} 4s linear infinite;
  }

  ::before {
    content: '';
    width: calc(80px - 6px * 2);
    height: calc(80px - 6px * 2);
    position: absolute;
    margin: 0px;
    animation-duration: 3s;
  }

  ::after {
    content: '';
    width: calc(80px - 6px * 4);
    height: calc(80px - 6px * 4);
    position: absolute;
    margin: 6px;
    animation-duration: 2s;
  }
`;

export default LoadingSpinner;
