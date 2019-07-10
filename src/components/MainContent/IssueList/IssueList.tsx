import React from 'react';
import styled from 'styled-components';

import FlexContainer from 'shared/FlexContainer';
import LoadingSpinner from 'shared/LoadingSpinner';
import SectionTitle from 'shared/SectionTitle';
import IssueDetails from '../IssueDetails/IssueDetails';

const StyledLabelTitle = styled.h2`
  font-weight: normal;
  margin: 0;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const ListHeader: React.FC<any> = ({ issues, selectedRepo, selectedLabel }) => (
  <React.Fragment>
    <StyledLabelTitle>{selectedLabel}</StyledLabelTitle>
    <FlexContainer alignItems='center' margin='0.5rem 0 1.5rem'>
      <SectionTitle as='h2'>
        Issues{ issues.isFetching
          ? null
          : ` (${issues.data[selectedRepo] ? issues.data[selectedRepo].length : 0})`
        }
      </SectionTitle>
      <div className='divider-middle'></div>
    </FlexContainer>
  </React.Fragment>
);

const LoadingContainer: React.FC<any> = () => (
  <FlexContainer alignItems='center' justifyContent='center' flexDirection='column' margin='2.5rem 0 1.5rem'>
    <LoadingSpinner />
    <h3>Loading...</h3>
  </FlexContainer>
);

const IssueList: React.FC<any> = ({ issues, selectedRepo, selectedLabel }) => (
  <div>
    <ListHeader issues={issues} selectedRepo={selectedRepo} selectedLabel={selectedLabel} />
    { issues.isFetching
      ? <LoadingContainer />
      : <div>
          {issues.data[selectedRepo].map((issue: any) => <IssueDetails key={issue.url} issue={issue} />)}
        </div>
    }
  </div>
);

export default IssueList;
