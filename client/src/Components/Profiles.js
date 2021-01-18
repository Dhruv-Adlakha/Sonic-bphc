import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUsers } from '../Redux/Actions/Actions';

class Profiles extends React.Component {
  componentDidMount(props) {
    this.props.dispatch(getUsers());
  }
  render() {
    return (
      <section class='profiles-container'>
        {this.props.users.map((user) => {
          return <Profile user={user} />;
        })}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Profiles);
