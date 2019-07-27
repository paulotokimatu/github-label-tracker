import React from 'react';

import MainContent from 'components/MainContent/MainContent';
import { connectRender } from './helpers/connectRender';
import MOCK_DATA from './mock-data/mock-data';

describe('<MainContent />', () => {
  it('should render the instruction screen if there are selected label and app is not fetching data', () => {
    const { queryByTestId } = connectRender(
      <MainContent />,
      {
        initialState: {
          issues: {
            data: {
              fakeRepoName: [],
            },
            isFetching: false,
          },
          ui: {
            selectedLabels: MOCK_DATA.selectedLabel,
            selectedRepo: null,
          },
        },
      },
    );

    expect(queryByTestId('instructions')).toBeTruthy();
    expect(queryByTestId('issueList')).toBeFalsy();
  });

  it('should render a loading component if the app is fetching data', () => {
    const { queryByTestId } = connectRender(
      <MainContent />,
      {
        initialState: {
          issues: { ...MOCK_DATA.issuesReducer },
          ui: {
            selectedLabels: MOCK_DATA.selectedLabel,
            selectedRepo: MOCK_DATA.selectedRepo,
          },
        },
      },
    );

    expect(queryByTestId('loadingIssues')).toBeTruthy();
    expect(queryByTestId('issueList')).toBeFalsy();
  });

  it('should render a list of issues', () => {
    const { queryByTestId } = connectRender(
      <MainContent />,
      {
        initialState: {
          issues: {
            ...MOCK_DATA.issuesReducer,
            isFetching: false,
          },
          ui: {
            selectedLabels: MOCK_DATA.selectedLabel,
            selectedRepo: MOCK_DATA.selectedRepo,
          },
        },
      },
    );

    expect(queryByTestId('instructions')).toBeFalsy();
    expect(queryByTestId('issueList')).toBeTruthy();
  });
});
