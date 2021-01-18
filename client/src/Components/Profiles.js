import React from 'react';
import { getUsers } from '../Redux/Actions/Actions';
import { counter, connect } from 'react-redux';

const Profiles = (props) => {
  const fetchUsers = () => {
    props.dispatch(getUsers());
  };
  return (
    <div>
      <h1>Profiles page</h1>
      <button onClick={fetchUsers}>Get</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(Profiles);
