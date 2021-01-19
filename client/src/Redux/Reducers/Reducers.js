import {
  GET_USERS,
  ADD_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from '../Actions/ActionConstants';

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
        ...state,
        users: action.payload,
        isAuthenticated: true,
      };
    case ADD_USER:
      return {
        ...state,
        currentUser: action.payload,
        users: state.users.concat(action.payload),
        isAuthenticated: true,
      };
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: undefined,
        isAuthenticated: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
