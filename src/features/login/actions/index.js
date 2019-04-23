import { UPDATE_USER } from '../constants';

const login = (user) => {
  return { type: UPDATE_USER, user };
};

export default login;
