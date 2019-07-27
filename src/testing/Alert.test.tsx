import { fireEvent } from '@testing-library/react';
import React from 'react';

import Alert from 'components/TopLevel/Alert';
import { connectRender } from './helpers/connectRender';

describe('<Alert />', () => {
  test('should be rendered if receives a truthy alert.isOn and be hidden when clicking close', () => {
    const { getByTestId, queryByTestId } = connectRender(
      <Alert />,
      {
        initialState: {
          alert: { isOn: true, text: 'foo' },
        },
      },
    );

    expect(getByTestId('alertText').textContent).toEqual('foo');

    fireEvent.click(getByTestId('close'));
    expect(queryByTestId('alertText')).toBeNull();
  });
});
