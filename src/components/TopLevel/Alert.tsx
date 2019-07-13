import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledAlert = styled.div<any>`
  background: ${(props) => props.type === 'error' ? '#cb403c' : (props.type === 'info' ? 'blue' : 'green')};
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-weight: 600;
  margin: 0 1.5rem;
  min-height: 50px;
  min-width: 250px;
  max-width: 400px;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 2.5rem;
  z-index: 10;
`;

const mapStateToProps = (state: any) => {
  return {
    alert: state.alert,
  };
};

const Alert: React.FC<any> = ({ alert }) => {
  if (!alert.isOn) {
    return null;
  }

  return (
    <StyledAlert type={alert.type}>
      { alert.text }
    </StyledAlert>
  );
};

export default connect(mapStateToProps)(Alert);
