import React from 'react';
import { render } from 'react-native-testing-library';

import { RedirectorLogic, mapStateToProps } from '../RedirectorLogic';
import NavigatorMock from '../../lib/mocks/navigator';

describe('#mapStateToProps', () => {
  it('should return the user from state', () => {
    const state = { user: { email: 'test@test.com' } };
    expect(mapStateToProps(state)).toEqual({
      user: {
        email: 'test@test.com',
      },
    });
  });
});

describe('#RedirectorLogic', () => {
  describe('#componentDidMount', () => {
    it('should redirect to to select pictures if existing user', () => {
      render(<RedirectorLogic navigation={NavigatorMock} user={{ email: 'test@test.com' }} />);
      expect(NavigatorMock.replace).toHaveBeenCalledWith('SelectPictures');
    });

    it('should redirect to Connect facebook if not existing user', () => {
      render(<RedirectorLogic navigation={NavigatorMock} user={null} />);
      expect(NavigatorMock.replace).toHaveBeenCalledWith('ConnectFacebook');
    });
  });

  describe('#render', () => {
    it('should mach the snapshot', () => {
      const container = render(<RedirectorLogic navigation={NavigatorMock} user={null} />);
      expect(container).toMatchSnapshot();
    });
  });
});
