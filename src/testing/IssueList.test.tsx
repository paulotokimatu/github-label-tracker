import { render } from '@testing-library/react';
import React from 'react';

import IssueList from 'components/MainContent/IssueList/IssueList';
import MOCK_DATA from './mock-data/mock-data';

describe('Issue section', () => {
  it('should render the loading component if the app is fetching data', () => {
    const { queryByTestId } = render(
      <IssueList
        issues={{ ...MOCK_DATA.issuesReducer, isFetching: true }}
        selectedLabel={MOCK_DATA.selectedLabel}
        selectedRepo={MOCK_DATA.selectedRepo}
      />,
    );

    expect(queryByTestId('loadingIssues')).toBeTruthy();
    expect(queryByTestId('issueList')).toBeFalsy();
  });

  it('should render a list of components with issue details', () => {
    const { queryByTestId, queryByText, getAllByTestId } = render(
      <IssueList
        issues={{ ...MOCK_DATA.issuesReducer, isFetching: false }}
        selectedLabel={MOCK_DATA.selectedLabel}
        selectedRepo={MOCK_DATA.selectedRepo}
      />,
    );

    expect(
      getAllByTestId('comments').filter((commentEl) => {
        return commentEl.textContent === '10';
      }).length,
    ).toEqual(1);
    expect(queryByTestId('issueList')).toBeTruthy();
    expect(queryByText('foo1')).toBeTruthy();
    expect(queryByText('2019-04-12')).toBeTruthy();
    expect(queryByText('2019-04-05')).toBeTruthy();
    expect(queryByText(`Issues (${MOCK_DATA.issuesReducer.data.fakeRepoName.length})`)).toBeTruthy();
  });
});
