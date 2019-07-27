import { fireEvent } from '@testing-library/react';
import React from 'react';

import RepoSection from 'components/SideMenu/RepoSection/RepoSection';
import { connectRender } from './helpers/connectRender';
import MOCK_DATA from './mock-data/mock-data';

describe('Repo section', () => {
  // TODO implement
  // it('should get cached repo data, if available', () => {
  //   const { getByTestId } = connectRender(<SideMenu />);
  // });

  it('should add repos to list', () => {
    const { queryAllByTestId, getByTestId } = connectRender(
      <RepoSection />,
      {
        initialState: {
          issues: { ...MOCK_DATA.issuesReducer },
          repos: new Set(['foobar', MOCK_DATA.selectedRepo]),
          ui: {
            selectedLabels: MOCK_DATA.selectedLabel,
            selectedRepo: MOCK_DATA.selectedRepo,
          },
        },
      },
    );

    expect(queryAllByTestId('repoItem').length).toEqual(2);

    const form = getByTestId('addRepo');
    const input = form.firstElementChild as Element;
    fireEvent.input(input, { target: { value: 'new/repo' } });
    fireEvent.submit(form);

    expect(queryAllByTestId('repoItem').length).toEqual(3);
    expect(queryAllByTestId('repoItem')[2]).toHaveTextContent('new/repo');
  });

  it('should delete repo from list', () => {
    const { queryAllByTestId, getAllByLabelText } = connectRender(
      <RepoSection />,
      {
        initialState: {
          issues: { ...MOCK_DATA.issuesReducer },
          repos: new Set(['foobar', MOCK_DATA.selectedRepo]),
          ui: {
            selectedLabels: MOCK_DATA.selectedLabel,
            selectedRepo: MOCK_DATA.selectedRepo,
          },
        },
      },
    );

    expect(queryAllByTestId('repoItem').length).toEqual(2);

    fireEvent.focus(queryAllByTestId('repoItem')[0]);
    fireEvent.click(getAllByLabelText('delete repo')[0]);

    expect(queryAllByTestId('repoItem').length).toEqual(1);
    expect(queryAllByTestId('repoItem')[0]).toHaveTextContent(MOCK_DATA.selectedRepo);
  });

  it('should select a repo from list', () => {
    const { queryAllByTestId } = connectRender(
      <RepoSection />,
      {
        initialState: {
          issues: { ...MOCK_DATA.issuesReducer },
          repos: new Set(['foobar', MOCK_DATA.selectedRepo]),
          ui: {
            selectedLabels: MOCK_DATA.selectedLabel,
            selectedRepo: MOCK_DATA.selectedRepo,
          },
        },
      },
    );

    expect(queryAllByTestId('repoItem')[0]).not.toHaveStyle('background-color: #2E2727');
    expect(queryAllByTestId('repoItem')[1]).toHaveStyle('background-color: #2E2727');

    fireEvent.click(queryAllByTestId('repoItem')[0]);

    expect(queryAllByTestId('repoItem')[0]).toHaveStyle('background-color: #2E2727');
    expect(queryAllByTestId('repoItem')[1]).not.toHaveStyle('background-color: #2E2727');
  });
});
