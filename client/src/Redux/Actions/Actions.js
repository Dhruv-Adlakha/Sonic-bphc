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
  ADD_LIKE,
  ADD_COMMENT,
  ADD_DISLIKE,
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
      return error;
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
      return error;
    }
  };
};

export const LoginUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    try {
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
      return error;
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
      return error;
    }
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
      return error;
    }
  };
};

export const getPosts = () => {
  return async (dispatch) => {
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
      return error;
    }
  };
};

export const addPost = (post) => {
  return async (dispatch) => {
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
      return error;
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
      return error;
    }
  };
};

export const deletePost = (post) => {
  return async (dispatch) => {
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
      console.log('dpost: ', dpost);
      dispatch({
        type: DELETE_POST,
        payload: dpost.data,
      });
      console.log('eee');
      return dpost;
    } catch (error) {
      dispatch({
        type: ERROR_OCCUR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_RESOLVE,
        });
      }, 1000);
      return error;
    }
  };
};

export const addLike = (post) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const dpost = await axios({
        method: 'patch',
        url: `/posts/like/${post._id}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: ADD_LIKE,
        payload: dpost.data,
      });
      return dpost;
    } catch (error) {
      dispatch({
        type: ERROR_OCCUR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_RESOLVE,
        });
      }, 1000);
      return error;
    }
  };
};

export const addDislike = (post) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const dpost = await axios({
        method: 'patch',
        url: `/posts/dislike/${post._id}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: ADD_DISLIKE,
        payload: dpost.data,
      });
      return dpost;
    } catch (error) {
      dispatch({
        type: ERROR_OCCUR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_RESOLVE,
        });
      }, 1000);
      return error;
    }
  };
};

export const addComment = (comm) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    try {
      const token = localStorage.getItem('token');
      const comment = {
        content: comm.content,
      };
      console.log(comm);
      const newcomm = await axios({
        method: 'patch',
        url: `/posts/comment/${comm._id}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: comment,
      });
      console.log(comment);
      dispatch({
        type: 'ADD_COMMENT',
        payload: newcomm.data,
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
      return error;
    }
  };
};
