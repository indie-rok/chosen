/**
 * @format
 */
import { mount } from 'enzyme';
import 'react-native';
import React from 'react';

import App from '../App';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const component = mount(<App />);
  expect(component).toMatchSnapshot();
});
