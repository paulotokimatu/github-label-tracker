const MOCK_DATA = {
  instructions: [
    {
      example: 'foo1',
      text: 'bar1',
      title: 'baz1',
    },
    {
      example: 'foo2',
      text: 'bar2',
      title: 'baz2',
    },
  ],
  issuesReducer: {
    data: {
      fakeRepoName: [
        {
          comments: 10,
          created_at: '2019-04-05T13:32:41Z',
          title: 'foo1',
          updated_at: '2019-04-12T22:28:56Z',
          url: 'bar1',
        },
        {
          comments: 5,
          created_at: '2019-01-01T13:32:41Z',
          title: 'foo2',
          updated_at: '2019-03-07T22:28:56Z',
          url: 'bar2',
        },
      ],
    },
    isFetching: true,
  },
  labelsReducer: {
    data: {
      fakeRepoName: [
        {
          color: '4d9221',
          name: 'foo',
        },
        {
          color: '0074d9',
          name: 'bar',
        },
      ],
    },
    isFetching: false,
  },
  selectedLabel: 'fakeLabelName',
  selectedRepo: 'fakeRepoName',
};

export default MOCK_DATA;
