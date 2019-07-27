import { render } from '@testing-library/react';
import React from 'react';

import InstructionScreen from 'components/MainContent/InstructionScreen/InstructionScreen';
import MOCK_DATA from './mock-data/mock-data';

describe('<InstructionScreen />', () => {
  it('should render instruction steps', () => {
    const { getByTestId, queryByText } = render(<InstructionScreen instructions={MOCK_DATA.instructions} />);

    expect(getByTestId('instructions').children.length).toEqual(2);
    expect(queryByText('foo1')).toBeTruthy();
    expect(queryByText('bar1')).toBeTruthy();
    expect(queryByText('baz1')).toBeTruthy();
  });
});
