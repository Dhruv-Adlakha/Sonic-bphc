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
  ERROR_OCCUR,
  ERROR_RESOLVE,
  ADD_LIKE,
  ADD_DISLIKE,
} from '../Actions/ActionConstants';

const initState = {
  posts: [],
  users: [],
  currentUser: undefined,
  isAuthenticated: false,
  loading: false,
  error: false,
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
        error: false,
      };
    case ADD_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        loading: false,
        error: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        loading: false,
        error: false,
      };
    case DELETE_USER:
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: undefined,
        isAuthenticated: false,
        loading: false,
        error: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        currentUser: action.payload,
        users: state.users.map((user) => {
          if (user._id !== action.payload._id) return user;
          else return action.payload;
        }),
        loading: false,
        error: false,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
        loading: false,
        error: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          if (action.payload._id !== post._id) return post;
        }),
        loading: false,
        error: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ERROR_OCCUR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case ERROR_RESOLVE:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case ADD_LIKE:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          if (post._id !== action.payload._id) return post;
          else {
            post.likes.push(state.currentUser._id);
            return post;
          }
        }),
        error: false,
        loading: false,
      };

    case ADD_DISLIKE:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          if (post._id !== action.payload._id) return post;
          else {
            post.dislikes.push(state.currentUser._id);
            return post;
          }
        }),
        error: false,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
