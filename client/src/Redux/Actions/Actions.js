import axios from 'axios';

import { INCREMENT, DECREMENT, GET_USERS, ADD_USER } from './ActionConstants';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get('/users');
      dispatch({
        type: GET_USERS,
        payload: users.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    try {
      const users = await axios.post('/users', user);
      dispatch({
        type: ADD_USER,
        payload: users.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
