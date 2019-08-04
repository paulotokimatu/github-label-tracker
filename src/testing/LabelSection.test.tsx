import { fireEvent } from '@testing-library/react';
import React from 'react';

import axios from 'axios';
import LabelSection from 'components/SideMenu/LabelSection/LabelSection';
import { connectRender } from './helpers/connectRender';
import MOCK_DATA from './mock-data/mock-data';

jest.mock('axios');

describe('Label section', () => {
  const mockAxiosGet = jest.spyOn(axios, 'get');

  afterEach(() => {
    mockAxiosGet.mockRestore();
  });

  it('should show a loading component when fetching label data', () => {
    const { queryByTestId } = connectRender(
      <LabelSection />,
      {
        initialState: {
          labels: {
            ...MOCK_DATA.labelsReducer,
            isFetching: true,
          },
          ui: {
            selectedRepo: MOCK_DATA.selectedRepo,
          },
        },
      },
    );

    expect(queryByTestId('loadingLabels')).toBeTruthy();
    expect(queryByTestId('labelList')).toBeFalsy();
  });

  it('should tell the user if no label of a repo was found', () => {
    const { queryByTestId } = connectRender(
      <LabelSection />,
      {
        initialState: {
          labels: {
            ...MOCK_DATA.labelsReducer,
            data: {
              [MOCK_DATA.selectedRepo]: [],
            },
          },
          ui: {
            selectedRepo: MOCK_DATA.selectedRepo,
          },
        },
      },
    );

    expect(queryByTestId('labelListEmpty')).toBeTruthy();
    expect(queryByTestId('labelList')).toBeFalsy();
  });

  it('should show an empty list if no repo was selected', () => {
    const { queryByTestId } = connectRender(
      <LabelSection />,
      {
        initialState: {
          labels: { ...MOCK_DATA.labelsReducer },
          ui: {
            selectedRepo: null,
          },
        },
      },
    );

    expect(queryByTestId('labelListEmpty')).toBeTruthy();
    expect(queryByTestId('labelList')).toBeFalsy();
  });

  it('should render a list of labels if there is a selected repo', () => {
    const { queryAllByTestId, queryByTestId } = connectRender(
      <LabelSection />,
      {
        initialState: {
          labels: { ...MOCK_DATA.labelsReducer },
          ui: {
            selectedRepo: MOCK_DATA.selectedRepo,
          },
        },
      },
    );

    expect(queryByTestId('labelList')).toBeTruthy();
    expect(queryAllByTestId('labelItem').length).toEqual(2);
  });

  it('should fetch issues', () => {
    mockAxiosGet.mockResolvedValueOnce({ data: [] });

    const { queryAllByTestId } = connectRender(
      <LabelSection />,
      {
        initialState: {
          labels: { ...MOCK_DATA.labelsReducer },
          ui: {
            selectedRepo: MOCK_DATA.selectedRepo,
          },
        },
      },
    );

    fireEvent.click(queryAllByTestId('labelItem')[0]);
    const labelName = queryAllByTestId('labelItem')[0].textContent;

    expect(mockAxiosGet).toHaveBeenCalledWith(
      `https://api.github.com/repos/${MOCK_DATA.selectedRepo}/issues?labels=${labelName}`,
    );
  });

  it('should be able to refresh the list label', () => {
    mockAxiosGet.mockResolvedValueOnce({ data: [] });

    const { getByTestId } = connectRender(
      <LabelSection />,
      {
        initialState: {
          labels: { ...MOCK_DATA.labelsReducer },
          ui: {
            selectedRepo: MOCK_DATA.selectedRepo,
          },
        },
      },
    );

    fireEvent.click(getByTestId('refreshLabels'));

    expect(mockAxiosGet).toHaveBeenCalledWith(
      `https://api.github.com/repos/${MOCK_DATA.selectedRepo}/labels?per_page=100`,
    );
  });
});
