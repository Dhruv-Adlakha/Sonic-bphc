import axios from 'axios';
import {
  GET_USERS,
  ADD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER,
} from './ActionConstants';

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
      console.log(users);
      dispatch({
        type: ADD_USER,
        payload: users.data.newUser,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const LoginUser = (user) => {
  return async (dispatch) => {
    try {
      console.log(user);
      const res = await axios({
        method: 'post',
        url: '/users/login',
        data: user,
      });
      console.log(res.data.user);
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: LOGIN_USER,
        payload: res.data.user,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const LogoutUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
    });
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    try {
      const updatedUser = await axios({
        method: 'patch',
        url: '/users',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });

      dispatch({
        type: UPDATE_USER,
        payload: updatedUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
