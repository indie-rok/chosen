import userReducer from '../user';
import login from '../../features/login/actions';

describe('#user', () => {
  it('should update the state when necesary', () => {
    const oldState = { email: 'test@test.com', firstName: 'Emmanuel', facebookToken: '123' };
    const newData = login({ email: 'newEmail@email.com' });
    expect(userReducer(oldState, newData)).toEqual({
      email: 'newEmail@email.com',
      facebookToken: '123',
      firstName: 'Emmanuel',
    });
  });

  it('should create the state when necesary', () => {
    const newData = login({ email: 'test@test.com', facebookToken: '123' });
    expect(userReducer(null, newData)).toEqual({
      email: 'test@test.com',
      facebookToken: '123',
    });
  });

  it('should return previous state when unknow action', () => {
    const action = { type: 'UNKNOWN' };
    const state = { email: 'email@email.com' };
    expect(userReducer(state, action)).toEqual({ email: 'email@email.com' });
  });
});
