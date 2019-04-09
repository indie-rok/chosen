/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";

// Note: test renderer must be required after react-native.
import { shallow } from "enzyme";

it("renders correctly", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
