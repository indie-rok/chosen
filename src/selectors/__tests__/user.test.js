import { getUser } from '../user';

describe('#user', () => {
  it('should return the correct selector for the complete state', () => {
    const state = { otherKey: {}, user: { firstName: 'Emmanue', phone: 13441232 } };
    expect(getUser(state)).toEqual({ firstName: 'Emmanue', phone: 13441232 });
  });
});
