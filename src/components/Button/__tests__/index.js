import React from 'react';
import { Alert } from 'react-native';

import { render, fireEvent } from 'react-native-testing-library';
import Button from '../index';

test('should verify two questions', () => {
  const { getByTestId } = render(<Button />);
  Alert.alert = jest.fn();
  const component = getByTestId('bananaFresh');
  fireEvent.press(component);

  expect(Alert.alert).toHaveBeenCalled();
  expect(Alert.alert).toHaveBeenCalledWith('xd');
});
