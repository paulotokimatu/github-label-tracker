import styled from 'styled-components';

const FlexContainer = styled.div<any>`
  align-items: ${(props) => props.alignItems || 'initial'};
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'initial'};
`;

export default FlexContainer;
