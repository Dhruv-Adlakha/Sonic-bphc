import {
  GET_USERS,
  ADD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER,
  GET_POSTS,
  ADD_POST,
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
    case UPDATE_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
