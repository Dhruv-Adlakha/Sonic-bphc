import axios from 'axios';

import { INCREMENT, DECREMENT, GET_USERS } from './ActionConstants';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// export const fetchUsers = () => {
//   return function (dispatch) {
//     axios
//       .get('/users')
//       .then((res) => {
//         const users = res.data;
//         dispatch({
//           type: FETCH_USERS_SUCCESS,
//           payload: users,
//         });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };
// };

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get('/users');
      dispatch({
        type: GET_USERS,
        payload: users,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
