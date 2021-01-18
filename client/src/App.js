import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  INCREMENT,
  GET_USERS,
  ADD_USER,
} from './Redux/Actions/ActionConstants';
import AppRouter from './Routers/AppRouter';

const initState = {
  posts: [],
  users: [],
  isAuthenticated: false,
};

const reducer = (state = initState, action) => {
  console.log('reducer', state, action);
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case GET_USERS:
      return {
        users: action.payload,
      };
    case ADD_USER:
      return {
        users: state.users.concat(action.payload),
        isAuthenticated: true,
      };
    default:
      return {
        ...state,
      };
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
