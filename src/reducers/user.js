const initalState = { facebookToken: null, email: null, firstName: null, lastName: null };

export default function UserReducer(state = initalState, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state.user, ...action.user };
    default:
      return state;
  }
}
