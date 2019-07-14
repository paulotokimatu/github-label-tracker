import styled from 'styled-components';

interface FlexProperties {
  alignItems?: 'initial' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  margin?: string;
  justifyContent?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'space-between'
    | 'space-around' | 'space-evenly' | 'stretch';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

const FlexContainer = styled.div<FlexProperties>`
  align-items: ${(props) => props.alignItems || 'initial'};
  display: flex;
  margin: ${(props) => props.margin || '0'};
  justify-content: ${(props) => props.justifyContent || 'initial'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
`;

export default FlexContainer;
