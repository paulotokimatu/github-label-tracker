import { fireEvent, wait } from '@testing-library/react';
import axios from 'axios';
import React from 'react';

import SideMenu from 'components/SideMenu/SideMenu';
import { connectRender } from './helpers/connectRender';
import MOCK_DATA from './mock-data/mock-data';

describe('Side menu', () => {
  const mockAxiosGet = jest.spyOn(axios, 'get');

  afterEach(() => {
    mockAxiosGet.mockRestore();
  });

  it('should hide Label section if no repo was selected', async () => {
    mockAxiosGet.mockResolvedValueOnce({ data: MOCK_DATA.labelsReducer.data.fakeRepoName });

    const { queryAllByTestId, queryByTestId } = connectRender(
      <SideMenu />,
      {
        initialState: {
          issues: { ...MOCK_DATA.issuesReducer },
          repos: new Set(['foobar', MOCK_DATA.selectedRepo]),
          ui: {
            selectedLabels: MOCK_DATA.selectedLabel,
            selectedRepo: null,
          },
        },
      },
    );

    expect(queryByTestId('labelList')).toBeFalsy();

    fireEvent.click(queryAllByTestId('repoItem')[0]);

    await wait(() => {
      expect(queryByTestId('labelList')).toBeTruthy();
    });
  });
});
