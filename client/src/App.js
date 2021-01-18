import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Counter from './Components/Counter';
import Profiles from './Components/Profiles';
import { INCREMENT, GET_USERS } from './Redux/Actions/ActionConstants';
import AppRouter from './Routers/AppRouter';

const initState = {
  count: 11,
  users: [],
  error: '',
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
