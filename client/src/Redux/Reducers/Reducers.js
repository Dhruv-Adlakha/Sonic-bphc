import {
  GET_USERS,
  ADD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER,
  GET_POSTS,
  ADD_POST,
  DELETE_USER,
  DELETE_POST,
  LOADING,
} from '../Actions/ActionConstants';

const initState = {
  posts: [],
  users: [],
  currentUser: undefined,
  isAuthenticated: false,
  loading: false,
};

const reducer = (state = initState, action) => {
  console.log('reducer', state, action);
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case DELETE_USER:
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: undefined,
        isAuthenticated: false,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
