import axios from 'axios';
import { GET_USERS, ADD_USER, LOGIN_USER } from './ActionConstants';

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

export const LoginUser = (user) => {
  return async (dispatch) => {
    try {
      const userg = await axios.post('/users/login', user);
      dispatch({
        type: LOGIN_USER,
        payload: userg.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
