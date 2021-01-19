import { GET_USERS, ADD_USER, LOGIN_USER } from '../Actions/ActionConstants';

const initState = {
  posts: [],
  users: [],
  currentUser: undefined,
  isAuthenticated: false,
};

const reducer = (state = initState, action) => {
  console.log('reducer', state, action);
  switch (action.type) {
    case GET_USERS:
      return {
        users: action.payload,
      };
    case ADD_USER:
      return {
        currentUser: action.payload,
        users: state.users.concat(action.payload),
        isAuthenticated: true,
      };
    case LOGIN_USER:
      return {
        currentUser: action.payload,
        isAuthenticated: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
