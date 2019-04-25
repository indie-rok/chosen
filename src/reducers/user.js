import { UPDATE_USER } from '../features/login/constants';

const initalState = null;

export default function UserReducer(state = initalState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state.user, ...action.user };
    default:
      return state;
  }
}
