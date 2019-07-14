import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import AlertType from 'core/models/AlertType';
import { alertActions } from 'redux/actions';
import { AppState } from 'redux/reducers';

const StyledAlert = styled.div<{ type: AlertType }>`
  background: ${(props) => props.type === 'error' ? '#cb403c' : (props.type === 'info' ? 'blue' : 'green')};
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  font-weight: 600;
  margin: 0 1.5rem;
  min-height: 50px;
  min-width: 250px;
  max-width: 400px;
  position: absolute;
  right: 0;
  top: 2.5rem;
  z-index: 10;
`;

const AlertIcon = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
  flex-grow: 0;
  font-size: 1.5rem;
  padding: 0.5rem;
`;

const AlertContent = styled.div`
  padding: 1rem;
  flex-grow: 10;
`;

const AlertHeader = styled.h3`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem !important;
  text-transform: uppercase;
`;

const CloseButtonContainer = styled.div`
  background-color: rgba(255, 255, 255, 0);
  border-radius: 2px;
  cursor: pointer;
  padding: 0 2px;
  transition: 0.2s background-color;

  :hover, :focus {
    background-color: rgba(255, 255, 255, 0.1);
  }

  :active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  & i {
    margin: 0;
  }
`;

const mapStateToProps = (state: AppState) => {
  return {
    alert: state.alert,
  };
};

const Alert: React.FC<any> = ({ alert, hideAlert }) => {
  if (!alert.isOn) {
    return null;
  }

  return (
    <StyledAlert type={alert.type}>
      <AlertIcon>
        <Icon name={alert.type === 'error' ? 'exclamation' : (alert.type === 'info' ? 'info' : 'check')} />
      </AlertIcon>
      <AlertContent>
        <AlertHeader>
          { alert.type }
          <CloseButtonContainer onClick={hideAlert}>
            <Icon name='close' />
          </CloseButtonContainer>
        </AlertHeader>
        { alert.text }
      </AlertContent>
    </StyledAlert>
  );
};

export default connect(mapStateToProps, {
  hideAlert: alertActions.hideAlert,
})(Alert);
