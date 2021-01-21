import axios from 'axios';
import {
  GET_USERS,
  ADD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER,
  GET_POSTS,
  ADD_POST,
  LOADING,
  DELETE_USER,
  DELETE_POST,
  ERROR_RESOLVE,
  ERROR_OCCUR,
} from './ActionConstants';

export const errorHandler = () => {};

export const getUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: 'LOADING',
    });
    try {
      const users = await axios.get('/users');
      dispatch({
        type: GET_USERS,
        payload: users.data,
      });
      return users;
    } catch (error) {
      dispatch({
        type: ERROR_OCCUR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_RESOLVE,
        });
      }, 1000);
    }
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    try {
      const users = await axios.post('/users', user);
      console.log(users);
      dispatch({
        type: ADD_USER,
        payload: users.data.newUser,
      });
      localStorage.setItem('token', users.data.token);
      return users;
    } catch (error) {
      dispatch({
        type: ERROR_OCCUR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_RESOLVE,
        });
      }, 1500);
    }
  };
};

export const LoginUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
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
      return res.data.user;
    } catch (error) {
      dispatch({
        type: ERROR_OCCUR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_RESOLVE,
        });
      }, 1000);
    }
  };
};

export const LogoutUser = (user) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      await axios({
        method: 'post',
        url: '/users/logout',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem('token', null);
      dispatch({
        type: LOGOUT_USER,
      });
    } catch (error) {
      dispatch({
        type: ERROR_OCCUR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_RESOLVE,
        });
      }, 1000);
    }
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
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
      return updateUser.data;
    } catch (error) {
      dispatch({
        type: ERROR_OCCUR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_RESOLVE,
        });
      }, 1000);
    }
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    try {
      const token = localStorage.getItem('token');
      const posts = await axios({
        method: 'get',
        url: '/posts',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(posts);
      dispatch({
        type: GET_POSTS,
        payload: posts.data,
      });
      return posts;
    } catch (error) {
      dispatch({
        type: ERROR_OCCUR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_RESOLVE,
        });
      }, 1000);
    }
  };
};

export const addPost = (post) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    try {
      const token = localStorage.getItem('token');
      const newpost = await axios({
        method: 'post',
        url: '/posts',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: post,
      });
      dispatch({
        type: ADD_POST,
        payload: newpost.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_OCCUR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_RESOLVE,
        });
      }, 1000);
    }
  };
};

export const deleteUser = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    try {
      const token = localStorage.getItem('token');
      const user = await axios({
        method: 'delete',
        url: '/users',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(user);
      localStorage.setItem('token', null);
      dispatch({
        type: DELETE_USER,
      });
      return user;
    } catch (error) {
      dispatch({
        type: ERROR_RESOLVE,
      });
    }
  };
};

export const deletePost = (post) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    console.log('deleeeeeeeeeee');
    try {
      const token = localStorage.getItem('token');
      console.log(token, post);
      const dpost = await axios({
        method: 'delete',
        url: '/posts',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: post,
      });
      console.log(dpost);
      dispatch({
        type: DELETE_POST,
      });
      return post;
    } catch (error) {
      dispatch({
        type: ERROR_OCCUR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_RESOLVE,
        });
      }, 1000);
    }
  };
};
